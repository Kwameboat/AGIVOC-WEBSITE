import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    badge: "Empowering the Next Generation",
    title: "Excellence in Practical Skills.",
    subtitle: "Accra Girls Vocational Institute (AGIVOC) provides world-class technical training, fostering discipline, creativity, and professional mastery.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-4437-large.mp4",
    poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    accent: "text-brand-secondary"
  },
  {
    badge: "Fashion & Design",
    title: "Creative Mastery in Textiles.",
    subtitle: "Unleash your creativity with our advanced fashion design program. From pattern making to runway-ready garments.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-working-on-a-dress-4100-large.mp4",
    poster: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
    accent: "text-rose-400"
  },
  {
    badge: "Culinary Arts",
    title: "The Art of Professional Cooking.",
    subtitle: "Master the culinary world with hands-on training in international cuisines, pastry arts, and hospitality management.",
    video: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-in-a-professional-kitchen-4545-large.mp4",
    poster: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    accent: "text-amber-400"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      z: -1000,
      scale: 0.5,
      filter: "blur(10px)",
    }),
    center: {
      opacity: 1,
      rotateY: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      rotateY: direction > 0 ? -90 : 90,
      z: -1000,
      scale: 0.5,
      filter: "blur(10px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black perspective-2000">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full preserve-3d shadow-2xl"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-full h-full"
            >
              <video
                key={slides[current].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster={slides[current].poster}
              >
                <source src={slides[current].video} type="video/mp4" />
              </video>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70 z-0" />
            <div className="absolute inset-0 bg-brand-secondary/5 mix-blend-overlay z-0" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full text-left text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, rotateY: 20, x: -100 },
                  visible: {
                    opacity: 1,
                    rotateY: 0,
                    x: 0,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.6,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="max-w-3xl preserve-3d"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { duration: 0.6, ease: "easeOut" }
                    },
                  }}
                  className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-brand-secondary/30 border border-brand-secondary/40 rounded-full text-brand-secondary shadow-lg backdrop-blur-md"
                >
                  {slides[current].badge}
                </motion.span>
                
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
                    },
                  }}
                  className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight text-brand-primary drop-shadow-2xl"
                >
                  {slides[current].title.split('.').map((part, i) => (
                    <span key={i} className={i === 1 ? "text-white italic" : ""}>
                      {part}{i === 0 ? "." : ""}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </motion.h1>
                
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { duration: 0.8, ease: "easeOut" }
                    },
                  }}
                  className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-lg"
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" }
                    },
                  }}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <button className="w-full sm:w-auto px-8 py-4 bg-brand-secondary text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-xl shadow-brand-secondary/20">
                    Apply Now
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 glass-dark text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Play size={20} fill="currentColor" />
                    Explore Courses
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 3D Floating Elements (Fixed) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-32 glass-dark rounded-3xl rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-20 w-48 h-48 glass-dark rounded-full hidden lg:block"
        />
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 left-6 right-6 z-30 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-12 bg-brand-secondary" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-30"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}

