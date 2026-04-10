import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-8">
              Contact Us
            </h2>
            <p className="text-brand-dark/80 mb-12 text-lg leading-relaxed">
              Have questions about our programs or the admission process? 
              Our team is here to help you every step of the way.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">Phone</h4>
                  <p className="text-brand-dark/70">024 852 2926</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">Email</h4>
                  <p className="text-brand-dark/70">info@agivoc.edu.gh</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">Location</h4>
                  <p className="text-brand-dark/70">Accra, Ghana</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-secondary">Hours</h4>
                  <p className="text-brand-dark/70">Mon - Fri: 8 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-warm rounded-[40px] p-10 md:p-16"
          >
            <h3 className="text-2xl font-serif font-bold text-brand-secondary mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-white rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-white rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Subject</label>
                <input type="text" className="w-full px-6 py-4 bg-white rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-white rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-brand-secondary text-brand-primary rounded-2xl font-bold text-lg hover:bg-brand-secondary/90 transition-all shadow-xl shadow-brand-secondary/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-24 pt-24 border-t border-brand-secondary/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center text-brand-primary font-bold text-xl">A</div>
              <span className="font-serif text-2xl font-bold tracking-tighter text-brand-secondary">AGIVOC</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Empowering young women through excellence in vocational training and practical skills development 
              for a brighter, self-reliant future.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary hover:bg-brand-secondary hover:text-brand-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-primary mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-secondary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-brand-secondary transition-colors">Programs</a></li>
              <li><a href="#admissions" className="hover:text-brand-secondary transition-colors">Admissions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-primary mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-8 border-t border-brand-warm flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Accra Girls Vocational Institute. All rights reserved.</p>
          <p>Designed with Excellence in Accra, Ghana.</p>
        </div>
      </footer>
    </section>
  );
}
