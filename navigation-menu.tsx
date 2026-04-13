import { motion } from "motion/react";

const logos = [
  { name: "Comcast NBCUniversal",     src: "/logos/comcast.svg" },
  { name: "Costco",                   src: "/logos/clients/costco.svg" },
  { name: "Charter Communications",   src: "/logos/clients/charter.svg" },
  { name: "Cox",                      src: "/logos/clients/cox.svg" },
  { name: "WSFS Bank",                src: "/logos/clients/wsfs.svg" },
  { name: "Lincoln Financial Group",  src: "/logos/lincoln.svg" },
  { name: "DLL",                      src: "/logos/clients/dll.svg" },
];

export default function TrustedBy() {
  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-[9px] tracking-[0.35em] font-bold text-primary/40 mb-5 uppercase">
          Partnering with leaders at organizations including:
        </p>

        {/* Mobile: 3 per row (3 rows) | lg: all 8 in one row */}
        <div className="flex flex-wrap justify-center gap-y-3 lg:flex-nowrap lg:gap-x-2">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center justify-center px-2 w-[30%] sm:w-[22%] lg:w-auto lg:flex-1"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain transition-all duration-300"
                style={{ filter: "grayscale(100%) opacity(0.5)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) opacity(1)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) opacity(0.45)";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
