import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../components/Button";
import heroImage from "../assets/hero_profile.jpg";

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.14,
      duration: 0.75,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer", 
    "React.js Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  // Scroll-driven parallax for Hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ opacity: heroOpacity }}
    >
      {/* Subtle ambient glow - Hero-specific enhancement */}
      <motion.div 
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-purple-500/15 blur-[160px] pointer-events-none"
        style={{ y: heroY }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-24 lg:py-0">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex justify-start -ml-24 lg:-ml-40"
            style={{ y: imageY }}
          >
            <div className="relative w-full max-w-[520px] aspect-[3/4] overflow-hidden">

              <img
                src={heroImage}
                alt="Ritesh Upadhyay"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.98] contrast-[1.05]"
              />

              {/* blend overlays */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0B0F19] to-transparent" />
                <div className="absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-[#0B0F19] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0F19]/80 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,transparent_0%,rgba(11,15,25,0.45)_100%)]" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div className="relative" style={{ y: contentY }}>
            <div className="max-w-xl space-y-6">

              {/* dev badge */}
              <motion.span
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-block text-xs tracking-[0.3em] uppercase text-purple-300/70"
              >
                Developer • Engineer • Builder
              </motion.span>

              {/* name */}
              <motion.h1
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white"
              >
                Ritesh
                <span className="block font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Upadhyay
                </span>
              </motion.h1>

              {/* animated role */}
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-lg text-gray-300 font-medium"
              >
                {roles[roleIndex]}
              </motion.p>

              {/* anchor */}
              <motion.p
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-xl font-medium text-white/90"
              >
                Building user-friendly, scalable MERN applications.
              </motion.p>

              {/* description */}
              <motion.p
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-base md:text-lg text-gray-400 leading-relaxed"
              >
                Results-driven MERN Stack Developer with hands-on project experience in React.js, Node.js, Express, and MongoDB. 
                Committed to continuous learning and delivering high-quality, scalable web applications.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex gap-4 pt-2"
              >
                <Button href="mailto:upadhyay07ritesh@gmail.com">
                  Hire Me
                </Button>
                <Button
                  href="https://wa.me/919302010199"
                  variant="secondary"
                >
                  WhatsApp
                </Button>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
