import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const experience = [
  {
    company: "COMCAST NBCUNIVERSAL",
    role: "Leadership Development",
    type: "Fortune 500",
    logo: "/logos/comcast.svg",
  },
  {
    company: "LINCOLN FINANCIAL GROUP",
    role: "Leadership Development",
    type: "Fortune 500",
    logo: "/logos/lincoln.svg",
  },
  {
    company: "VANGUARD",
    role: "Leadership Development",
    type: "Fortune 500",
    logo: "/logos/vanguard.svg",
  },
];

const clients = [
  { name: "C",                  logo: "/logos/clients/costco.svg" },
  { name: "Charter Communications",  logo: "/logos/clients/charter.svg" },
  { name: "WSFS Bank",               logo: "/logos/clients/wsfs.svg" },
  { name: "Cox",                     logo: "/logos/clients/cox.svg" },
  { name: "DLL",                     logo: "/logos/clients/dll.svg" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[40vh] flex items-center overflow-hidden bg-primary">
        <div
          className="absolute inset-0 z-0 opacity-5 hidden md:block"
          style={{ clipPath: "polygon(0 0, 56% 0, 46% 100%, 0% 100%)" }}
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[40rem] font-bold text-white/5 select-none pointer-events-none hidden lg:block z-0">
          D
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
              ABOUT <span className="font-medium">RENEE.</span>
            </h1>
            <div className="w-20 h-1 bg-accent mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-16 pb-8 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[22%] relative"
            >
              <div className="aspect-[4/5] relative z-10 overflow-hidden">
                <img
                  src="/reneedole.png"
                  alt="Renee Dole"
                  className="w-full h-full object-cover shadow-2xl"
                  style={{ transform: 'scale(1.22) translateY(-9%)', transformOrigin: 'center center' }}
                />
              </div>
              <div className="absolute -top-10 -left-10 w-full h-full border-[20px] border-primary/5 -z-0" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/4"
            >
              <span className="text-xs font-bold tracking-[0.4em] text-accent mb-4 block uppercase">
                President, Executive Coach & Leadership Consultant
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-primary mb-6 leading-tight whitespace-nowrap">
                DEVELOPING STRATEGIES FOR <span className="font-medium">MEANINGFUL RESULTS.</span>
              </h2>
              <div className="space-y-4 text-lg text-primary/80 font-light leading-relaxed">
                <p>
                  Renee Dole is an executive coach, career strategist, and facilitator specializing in leadership development and high-impact professional growth. She partners with both corporate and individual clients to deliver executive coaching, career strategy, leadership program design, and facilitation across a wide range of organizations and industries.
                </p>
                <p>
                  Renee's approach is grounded in helping clients navigate the realities of their organizational environment—developing clear, actionable strategies that align with both business context and individual goals. She works primarily with high-performing leaders to refine their leadership approach, elevate their impact, and execute with intention as they advance in their careers.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Background + Education side by side */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">

          {/* Single flat grid — desktop: paired rows; mobile: each heading groups with its cards via CSS order */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-3">

            {/* Pro heading — mobile: 1st, desktop: col1 row1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-none pb-3 lg:pb-3"
            >
              <span className="text-xs font-bold tracking-[0.4em] text-accent mb-3 block uppercase">Career History</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-primary mb-4">
                PROFESSIONAL <span className="font-medium">BACKGROUND</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-4" />
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Renee's background spans Leadership Development within Fortune 500 organizations, where she has developed and managed leadership programs across coaching, curriculum design, and facilitation—spanning levels, functions, skill sets, and business lines.
              </p>
            </motion.div>

            {/* Edu heading — mobile: 5th, desktop: col2 row1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-5 lg:order-none pb-3 lg:pb-3"
            >
              <span className="text-xs font-bold tracking-[0.4em] text-accent mb-3 block uppercase">Academic & Professional</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-primary mb-4">
                EDUCATION & <span className="font-medium">CREDENTIALS</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-4" />
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                A foundation at the Wharton School, complemented by a Master's in Organizational Dynamics from the University of Pennsylvania, with additional graduate study at University of Oxford and HEC Paris, alongside certifications in Coaching, Organizational Diagnosis, and Leadership.
              </p>
            </motion.div>

            {/* Comcast — mobile: 2nd, desktop: col1 row2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="order-2 lg:order-none bg-white p-5 hover:shadow-md transition-shadow duration-300 flex items-center gap-5"
            >
              <div className="w-24 shrink-0 flex items-center justify-center">
                <img src="/logos/comcast.svg" alt="Comcast NBCUniversal" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-l border-gray-100 pl-5">
                <h3 className="text-sm font-semibold tracking-wide text-primary mb-1">COMCAST NBCUNIVERSAL</h3>
                <p className="text-sm text-primary/60 font-light">Leadership Development</p>
                <span className="text-[10px] tracking-[0.3em] text-accent font-bold">Fortune 500</span>
              </div>
            </motion.div>

            {/* UPenn — mobile: 6th, desktop: col2 row2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.0 }}
              className="order-6 lg:order-none bg-white p-5 hover:shadow-md transition-shadow duration-300 flex items-center gap-5"
            >
              <div className="w-24 shrink-0 flex items-center justify-center">
                <img src="/logos/upenn.svg" alt="University of Pennsylvania" className="max-h-10 w-auto object-contain" />
              </div>
              <div className="border-l border-gray-100 pl-5">
                <h3 className="text-sm font-semibold tracking-wide text-primary mb-1">UNIVERSITY OF PENNSYLVANIA</h3>
                <p className="text-sm text-primary/70 font-light">Master's in Organizational Dynamics</p>
                <p className="text-xs text-primary/50 font-light mt-1 italic">Including graduate studies at Oxford University and HEC Paris</p>
              </div>
            </motion.div>

            {/* Lincoln — mobile: 3rd, desktop: col1 row3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="order-3 lg:order-none bg-white p-5 hover:shadow-md transition-shadow duration-300 flex items-center gap-5"
            >
              <div className="w-24 shrink-0 flex items-center justify-center">
                <img src="/logos/lincoln.svg" alt="Lincoln Financial Group" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-l border-gray-100 pl-5">
                <h3 className="text-sm font-semibold tracking-wide text-primary mb-1">LINCOLN FINANCIAL GROUP</h3>
                <p className="text-sm text-primary/60 font-light">Leadership Development</p>
                <span className="text-[10px] tracking-[0.3em] text-accent font-bold">Fortune 500</span>
              </div>
            </motion.div>

            {/* Wharton — mobile: 7th, desktop: col2 row3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="order-7 lg:order-none bg-white p-5 hover:shadow-md transition-shadow duration-300 flex items-center gap-5"
            >
              <div className="w-24 shrink-0 flex items-center justify-center">
                <img src="/logos/wharton.svg" alt="The Wharton School" className="max-h-10 w-auto object-contain" />
              </div>
              <div className="border-l border-gray-100 pl-5">
                <h3 className="text-sm font-semibold tracking-wide text-primary mb-1">THE WHARTON SCHOOL</h3>
                <p className="text-sm text-primary/70 font-light">Bachelor's in Management & Marketing</p>
                <p className="text-xs text-primary/50 font-light mt-1 italic">University of Pennsylvania</p>
              </div>
            </motion.div>

            {/* Vanguard — mobile: 4th, desktop: col1 row4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="order-4 lg:order-none bg-white p-5 hover:shadow-md transition-shadow duration-300 flex items-center gap-5"
            >
              <div className="w-24 shrink-0 flex items-center justify-center">
                <img src="/logos/vanguard.svg" alt="Vanguard" className="max-h-8 w-auto object-contain" />
              </div>
              <div className="border-l border-gray-100 pl-5">
                <h3 className="text-sm font-semibold tracking-wide text-primary mb-1">VANGUARD</h3>
                <p className="text-sm text-primary/60 font-light">Leadership Development</p>
                <span className="text-[10px] tracking-[0.3em] text-accent font-bold">Fortune 500</span>
              </div>
            </motion.div>

            {/* 3 certs — mobile: 8th, desktop: col2 row4 */}
            <div className="order-8 lg:order-none grid grid-cols-3 gap-3">
              {[
                { logo: "/logos/parwcc.svg",      logoAlt: "PARWCC",  title: "RESUME WRITER", subtitle: "CPRW Certified" },
                { logo: "/logos/birkman.svg?v=2", logoAlt: "Birkman", title: "BIRKMAN",        subtitle: "Certified Facilitator" },
                { logo: "/logos/upenn.svg",        logoAlt: "UPenn",   title: "CERTIFICATES",  subtitle: "Coaching & Leadership" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.16 + index * 0.08 }}
                  className="bg-white p-4 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center gap-2"
                >
                  <img src={cert.logo} alt={cert.logoAlt} className="max-h-8 w-auto object-contain" />
                  <div className="border-t border-gray-100 pt-2 w-full">
                    <h3 className="text-[10px] font-semibold tracking-wide text-primary leading-tight">{cert.title}</h3>
                    <p className="text-[9px] text-primary/60 font-light mt-0.5">{cert.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-6">
            <span className="text-xs font-bold tracking-[0.4em] text-accent mb-3 block uppercase">Client Portfolio</span>
            <div className="w-16 h-1 bg-accent" />
          </div>
          {/* TO SWAP A LOGO: replace the file in public/logos/clients/ (keep same filename) */}
          <div className="flex flex-wrap justify-center gap-y-3 lg:flex-nowrap lg:gap-x-2">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center justify-center px-2 w-[30%] lg:w-auto lg:flex-1"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
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

      {/* CTA */}
      <section className="py-8 md:py-12 bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-6">
            READY TO <span className="font-medium">GET STARTED?</span>
          </h2>
          <p className="text-white/70 font-light mb-10 max-w-xl mx-auto text-lg">
            Let's build a strategy tailored to your goals and organizational culture.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-primary border border-white hover:bg-transparent hover:text-white rounded-none px-10 py-4 text-sm tracking-[0.2em] font-medium transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
