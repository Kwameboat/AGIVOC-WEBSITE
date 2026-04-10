import { motion } from 'motion/react';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Target className="text-brand-secondary" />,
      title: "Our Mission",
      description: "To empower young women with practical, market-driven vocational skills that foster self-reliance and economic independence."
    },
    {
      icon: <Eye className="text-brand-secondary" />,
      title: "Our Vision",
      description: "To be the leading vocational institute in Ghana, recognized for academic excellence, discipline, and professional integrity."
    },
    {
      icon: <Award className="text-brand-secondary" />,
      title: "Excellence",
      description: "We maintain high standards in both theoretical knowledge and practical application, ensuring our graduates are industry-ready."
    },
    {
      icon: <Users className="text-brand-secondary" />,
      title: "Community",
      description: "A supportive environment where every student is mentored to reach their full potential through discipline and hard work."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
              About AGIVOC
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-secondary mb-8 leading-tight">
              Nurturing Talent, <br />
              <span className="italic text-brand-accent">Building Futures.</span>
            </h2>
            <p className="text-brand-dark/80 text-lg mb-8 leading-relaxed">
              Located in the heart of Accra, Ghana, the Accra Girls Vocational Institute (AGIVOC) 
              has been a beacon of hope and professional development for decades. We specialize 
              in transforming passion into professional expertise through rigorous training 
              and hands-on experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-secondary">{item.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80"
                alt="Students in training"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-8 w-24 h-24 glass rounded-3xl -rotate-12 z-20 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <span className="block text-2xl font-bold text-brand-secondary">25+</span>
                <span className="text-[10px] uppercase font-bold text-gray-500">Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
