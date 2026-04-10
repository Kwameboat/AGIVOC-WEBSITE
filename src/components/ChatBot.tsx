import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/lib/utils';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your AGIVOC Admissions Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: `You are the Admissions Assistant for Accra Girls Vocational Institute (AGIVOC) in Accra, Ghana. 
          Your tone is professional, helpful, empowering, and friendly. 
          Knowledge Base:
          - Programs: Fashion Design & Textiles, Catering & Hospitality, ICT & Digital Literacy, Cosmetology & Hairdressing, Interior Decoration, Photography & Media.
          - Location: Accra, Ghana.
          - Contact: 024 852 2926.
          - Hours: Monday to Friday, 8 AM - 6 PM.
          - Goal: Help prospective students and parents with information about courses, requirements, and the application process.
          - Admissions: Currently open. Steps include filling an application, an interview, and then receiving an admission letter.
          Keep your responses concise and encouraging. If you don't know something specific, refer them to the contact number.`,
        },
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that. Please try again or call us at 024 852 2926.";
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please call us at 024 852 2926 for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Bubble Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-primary text-brand-secondary rounded-full shadow-2xl flex items-center justify-center relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-brand-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden border border-brand-warm"
          >
            {/* Header */}
            <div className="bg-brand-primary p-6 text-brand-secondary flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold">AGIVOC Assistant</h3>
                  <span className="text-xs text-brand-secondary/60 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-brand-secondary/10 p-2 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-warm/30"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-brand-secondary text-brand-primary" : "bg-brand-primary text-brand-secondary"
                  )}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-brand-primary text-brand-secondary rounded-tr-none shadow-sm font-medium" 
                      : "bg-white text-brand-dark shadow-sm rounded-tl-none border border-brand-warm"
                  )}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3 mr-auto max-w-[85%]">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary text-brand-secondary flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-brand-warm shadow-sm">
                    <Loader2 size={16} className="animate-spin text-brand-secondary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-brand-warm">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about admissions..."
                  className="flex-1 px-4 py-3 bg-brand-warm/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-12 h-12 bg-brand-primary text-brand-secondary rounded-xl flex items-center justify-center hover:bg-brand-primary/90 disabled:opacity-50 transition-all shadow-lg shadow-brand-primary/20"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
