import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/src/components/ui/button";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImgLoaded(true);
    }
  }, []);

  return (
    <section id="home" className="relative overflow-hidden mt-20">

      {/* ══════════════════════════════════════
          MOBILE  — diagonal navy + photo layout
      ══════════════════════════════════════ */}
      <div className="relative md:hidden overflow-hidden">

        {/* Photo — right 38%, no clip, sits behind the navy */}
        <div className="absolute right-0 inset-y-0 w-[38%] overflow-hidden">
          <motion.img
            src="/reneedole.png"
            alt="Renee Dole"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover object-[center_top]"
          />
        </div>

        {/* Navy — diagonal clip on right edge, sits on top of photo */}
        <div
          className="absolute inset-0 z-10 bg-primary"
          style={{ clipPath: "polygon(0 0, 73% 0, 62% 100%, 0 100%)" }}
        />

        {/* Text — on top of navy */}
        <div className="relative z-20 w-[72%] flex flex-col justify-center px-6 py-12">
          {/* subtle "D" watermark */}
          <span className="absolute bottom-0 left-0 text-[9rem] font-bold text-white/5 select-none pointer-events-none leading-none">
            D
          </span>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl font-light tracking-tight leading-tight text-white mb-4">
              OPTIMIZE<br />
              <span className="font-semibold">YOUR IMPACT.</span>
            </h1>
            <div className="w-8 h-0.5 bg-accent mb-4" />
            <p className="text-xs font-light text-white/75 leading-relaxed mb-6 max-w-[28ch]">
              Executive coaching, career consulting, and group professional development — tailored solutions with meaningful results.
            </p>
            <a href="#contact">
              <button className="text-[10px] tracking-[0.2em] font-semibold text-white border border-white/60 px-5 py-3 hover:bg-white hover:text-primary transition-all duration-300 uppercase">
                Book Strategic Audit
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP  — diagonal overlay layout
      ══════════════════════════════════════ */}
      <div className="hidden md:flex items-stretch">

        {/* Navy diagonal overlay */}
        <div
          className="absolute inset-0 z-10 bg-primary"
          style={{ clipPath: "polygon(0 0, 70% 0, 59% 100%, 0% 100%)" }}
        />

        {/* Photo — right side, diagonal clip */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[44%] overflow-hidden"
          style={{ clipPath: "polygon(32% 0%, 100% 0%, 100% 100%, 7% 100%)" }}
        >
          <motion.img
            ref={imgRef}
            src="/reneedole.png"
            alt="Renee Dole"
            onLoad={() => setImgLoaded(true)}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={imgLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-0 right-0 h-[125%] w-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl py-14 text-white"
          >
            <h1 className="text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-[1.1]">
              OPTIMIZE <br />
              <span className="font-medium">YOUR IMPACT.</span>
            </h1>
            <p className="text-xl font-light text-white/80 max-w-md mb-10 leading-relaxed">
              Renee Dole specializes in executive coaching, career consulting, and facilitation of group professional development. Renee brings extensive experience and expertise to provide tailored client solutions with meaningful results.
            </p>
            <a href="#contact">
              <Button className="w-fit bg-white text-primary border border-white hover:bg-transparent hover:text-white rounded-none px-8 py-6 text-sm tracking-[0.2em] font-medium transition-all duration-300">
                BOOK STRATEGIC AUDIT
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Large "D" watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[40rem] font-bold text-white/5 select-none pointer-events-none hidden lg:block z-20">
          D
        </div>
      </div>

    </section>
  );
}
