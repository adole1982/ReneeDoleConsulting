import { motion } from "motion/react";
import { Users, Briefcase, Presentation, BookOpen } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const services = [
  {
    icon: Users,
    title: "EXECUTIVE COACHING",
    subtitle: "One-on-One Leadership Development",
    description:
      "One-on-one engagement designed to help senior leaders sharpen their vision, strengthen decision-making, and lead with greater impact. Each engagement is tailored to the leader's goals, style, and organizational context — creating lasting, measurable change.",
  },
  {
    icon: Briefcase,
    title: "CAREER CONSULTING",
    subtitle: "Individual Career Strategy",
    description:
      "Strategic guidance for professionals navigating transitions, pursuing advancement, or defining their next chapter. Renee partners with clients to clarify direction, build confidence, and craft a compelling professional narrative.",
  },
  {
    icon: Presentation,
    title: "LEADERSHIP FACILITATION",
    subtitle: "High-Impact Workshops & Offsites",
    description:
      "Expert facilitation of leadership workshops, team sessions, and executive offsites designed to align teams, surface insight, and elevate culture. Renee brings structure, energy, and expertise to every session.",
  },
  {
    icon: BookOpen,
    title: "LEADERSHIP PROGRAMS",
    subtitle: "Curricula & Program Design",
    description:
      "Tailored leadership development programs built to scale — from onboarding frameworks to multi-tier leadership tracks. Renee has designed and delivered 8+ programs across Fortune 500 organizations to build talent pipelines that last.",
  },
];

export default function ServicesPage() {
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
              OUR <span className="font-medium">SERVICES.</span>
            </h1>
            <div className="w-20 h-1 bg-accent mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Feature: photo + intro text */}
      <section className="pt-16 pb-16 md:pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/5 shrink-0"
            >
              <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                <img
                  src="/services-keynote.png"
                  alt="Renee Dole presenting at a leadership conference"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full lg:w-4/5"
            >
              <span className="text-xs font-bold tracking-[0.4em] text-accent mb-4 block uppercase">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-8 leading-tight">
                TAILORED STRATEGIES FOR <span className="font-medium">MEANINGFUL RESULTS.</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <p className="text-lg text-primary/70 font-light leading-relaxed">
                Renee Dole partners with executives, leaders, and organizations to design strategies that create lasting impact. Whether through coaching, consulting, or program design, every engagement is built around your specific goals, culture, and people.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Grid — 4 cards, 2×2 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold tracking-widest text-primary mb-1">{service.title}</h3>
                <p className="text-xs tracking-wider text-accent font-medium mb-3">{service.subtitle}</p>
                <p className="text-sm text-primary/65 font-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How It Works */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold tracking-[0.4em] text-accent mb-4 block uppercase">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-primary mb-4">
              HOW WE <span className="font-medium">WORK TOGETHER</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              { step: "01", title: "DISCOVERY", body: "We begin with a focused conversation to understand your goals, context, and the outcomes that matter most to you." },
              { step: "02", title: "STRATEGY", body: "A customized plan is developed — grounded in your organizational culture and designed to create real, sustainable change." },
              { step: "03", title: "RESULTS", body: "Through ongoing partnership and accountability, we drive measurable progress and build capability that endures." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <span className="text-5xl font-light text-primary/10 block mb-4">{item.step}</span>
                <div className="w-8 h-1 bg-accent mx-auto mb-4" />
                <h3 className="text-sm font-semibold tracking-widest text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-primary/60 font-light leading-relaxed">{item.body}</p>
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
