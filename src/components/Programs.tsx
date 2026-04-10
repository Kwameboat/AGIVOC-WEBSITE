import { motion } from 'motion/react';
import { Scissors, Utensils, Monitor, Sparkles, Shirt, Camera } from 'lucide-react';

const programs = [
  {
    title: "Fashion Design & Textiles",
    description: "Master the art of garment construction, pattern making, and creative textile design.",
    icon: <Scissors className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
    color: "bg-rose-50"
  },
  {
    title: "Catering & Hospitality",
    description: "Professional culinary training, pastry arts, and world-class hospitality management.",
    icon: <Utensils className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    color: "bg-amber-50"
  },
  {
    title: "ICT & Digital Literacy",
    description: "Essential computer skills, graphic design, and modern office management techniques.",
    icon: <Monitor className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    color: "bg-blue-50"
  },
  {
    title: "Cosmetology & Hairdressing",
    description: "Advanced hair styling, skin care, and professional makeup artistry training.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80",
    color: "bg-purple-50"
  },
  {
    title: "Interior Decoration",
    description: "Creative space planning, soft furnishings, and aesthetic design for modern homes.",
    icon: <Shirt className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1616489953149-864c39050b48?auto=format&fit=crop&q=80",
    color: "bg-emerald-50"
  },
  {
    title: "Photography & Media",
    description: "Visual storytelling, digital photography, and basic video editing skills.",
    icon: <Camera className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80",
    color: "bg-slate-50"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-6">
              Vocational Excellence
            </h2>
            <p className="text-brand-dark/80 max-w-2xl mx-auto text-lg">
              We offer a diverse range of practical programs designed to equip our students 
              with the skills needed to thrive in today's competitive job market.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-xl shadow-brand-primary/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <button className="text-white font-bold flex items-center gap-2">
                    Learn More <Scissors size={16} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center text-brand-secondary mb-6 group-hover:rotate-12 transition-transform`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-secondary mb-4">
                  {program.title}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
