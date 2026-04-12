import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Users, Briefcase, Presentation, BookOpen } from "lucide-react";

const areas = [
  {
    title: "EXECUTIVE COACHING",
    description: "One-on-one leadership development for high-potential executives and senior leaders.",
    icon: Users,
  },
  {
    title: "CAREER CONSULTING",
    description: "Strategic guidance for career transitions, advancement, and personal branding.",
    icon: Briefcase,
  },
  {
    title: "LEADERSHIP FACILITATION",
    description: "Expert facilitation of high-impact workshops to align teams and elevate culture.",
    icon: Presentation,
  },
  {
    title: "LEADERSHIP PROGRAMS",
    description: "Tailored curricula development to build talent pipelines and leadership scale.",
    icon: BookOpen,
  },
];

export default function FocusAreas() {
  return (
    <section id="corporate" className="py-7 md:py-14 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-primary mb-4">
            OUR FOCUS <span className="font-medium">AREAS</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg tracking-widest font-semibold text-primary">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
