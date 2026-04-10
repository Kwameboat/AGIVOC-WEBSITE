import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mensah",
    role: "Fashion Design Graduate",
    content: "AGIVOC changed my life. The practical skills I learned in fashion design allowed me to start my own boutique within months of graduation.",
    rating: 5
  },
  {
    name: "Abena Boateng",
    role: "Catering Student",
    content: "The discipline and excellence at this institute are unmatched. I've gained so much confidence in my culinary skills.",
    rating: 5
  },
  {
    name: "Grace Appiah",
    role: "ICT Professional",
    content: "I never thought I could master digital tools, but the patient instructors at AGIVOC made it possible. Highly recommended!",
    rating: 5
  }
];

const images = [
  "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80"
];

export default function GalleryAndReviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Gallery */}
      <div id="gallery" className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Life at AGIVOC
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary">
              Our Gallery
            </h2>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-brand-warm py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
                Testimonials
              </span>
              <h2 className="text-4xl font-serif font-bold text-brand-secondary mb-6">
                What Our <br />
                <span className="text-brand-accent italic">Students Say.</span>
              </h2>
              <p className="text-brand-dark/80 leading-relaxed mb-8">
                Join hundreds of successful graduates who have transformed their lives through 
                our vocational training programs.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-primary font-bold">
                  4.9
                </div>
                <div>
                  <div className="flex text-brand-secondary">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Average Student Rating</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 rounded-[40px] shadow-xl shadow-brand-primary/5 relative"
                >
                  <Quote className="absolute top-8 right-8 text-brand-warm w-12 h-12 -z-0" />
                  <div className="relative z-10">
                    <div className="flex text-brand-secondary mb-4">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-brand-dark/80 italic mb-6 leading-relaxed">"{t.content}"</p>
                    <div>
                      <h4 className="font-bold text-brand-secondary">{t.name}</h4>
                      <span className="text-sm text-brand-secondary/70 font-medium">{t.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
