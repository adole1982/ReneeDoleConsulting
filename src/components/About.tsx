import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="pt-12 pb-6 md:pt-24 md:pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="/about-photo.png"
                alt="Renee Dole Consulting" 
                className="w-full h-full object-cover object-[center_75%] shadow-2xl"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute -top-10 -left-10 w-full h-full border-[20px] border-primary/5 -z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3"
          >
            <span className="text-xs font-bold tracking-[0.4em] text-accent mb-4 block uppercase">
              About Renee Dole
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-8 leading-tight">
              BRINGING <span className="font-medium">EXTENSIVE EXPERIENCE</span> TO EVERY CLIENT.
            </h2>
            <div className="space-y-6 text-lg text-primary/80 font-light leading-relaxed">
              <p>
                Renee Dole is a seasoned executive coach and consultant with over 20 years of experience in human resources, leadership development, and organizational strategy.
              </p>
              <p>
                Her approach is rooted in the belief that every individual and organization has the potential for greatness. By combining strategic insight with empathetic listening, she helps clients navigate complex challenges and achieve meaningful results.
              </p>
              <p>
                Whether you are an executive looking to level up your leadership, or an organization seeking to build a high-performing culture, Renee provides the expertise and partnership needed to succeed.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <span className="text-4xl font-medium text-primary">20+</span>
                <p className="text-xs tracking-widest text-primary/50 font-bold mt-2 uppercase">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl font-medium text-primary">500+</span>
                <p className="text-xs tracking-widest text-primary/50 font-bold mt-2 uppercase">Leaders Coached</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
