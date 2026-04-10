import { motion } from 'motion/react';
import { CheckCircle2, FileText, Calendar, GraduationCap } from 'lucide-react';

export default function Admissions() {
  const steps = [
    {
      icon: <FileText className="text-brand-secondary" />,
      title: "Fill Application",
      desc: "Complete our online or physical application form with your details."
    },
    {
      icon: <Calendar className="text-brand-secondary" />,
      title: "Interview",
      desc: "Attend a brief interview to discuss your goals and program choice."
    },
    {
      icon: <CheckCircle2 className="text-brand-secondary" />,
      title: "Admission",
      desc: "Receive your admission letter and start your journey with us."
    }
  ];

  return (
    <section id="admissions" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-primary z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 -skew-x-12 translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-secondary mb-8 leading-tight">
              Join the <br />
              <span className="text-brand-secondary/60 italic">AGIVOC Family.</span>
            </h2>
            <p className="text-brand-dark/80 text-lg mb-12 leading-relaxed max-w-xl">
              Admissions are currently open for the upcoming academic session. 
              Take the first step towards a rewarding career in vocational arts.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-secondary transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-secondary mb-2">{step.title}</h3>
                    <p className="text-brand-dark/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl relative"
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary shadow-xl rotate-12">
              <GraduationCap size={40} />
            </div>
            
            <h3 className="text-3xl font-serif font-bold text-brand-secondary mb-6">Ready to Start?</h3>
            <p className="text-brand-dark/70 mb-8">
              Download our prospectus or apply online today to secure your spot. 
              Limited spaces available for popular courses.
            </p>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-6 py-4 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all text-brand-dark placeholder:text-brand-dark/40"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all text-brand-dark placeholder:text-brand-dark/40"
              />
              <select className="w-full px-6 py-4 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10 focus:ring-2 focus:ring-brand-secondary transition-all text-brand-dark/70">
                <option>Select Program</option>
                <option>Fashion Design</option>
                <option>Catering</option>
                <option>ICT</option>
                <option>Cosmetology</option>
              </select>
              <button className="w-full py-5 bg-brand-secondary text-brand-primary rounded-2xl font-bold text-lg hover:bg-brand-secondary/90 transition-all shadow-xl shadow-brand-secondary/20">
                Submit Application
              </button>
            </form>
            
            <p className="text-center mt-6 text-sm text-gray-400">
              Need help? Call us at <span className="text-brand-secondary font-bold">024 852 2926</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
