import { useState } from "react";
import { motion } from "motion/react";
import { Label } from "@/src/components/ui/label";

const FORMSPREE_URL = "https://formspree.io/f/xkokwrvn";

const inputStyle = { background: "rgba(255,255,255,0.92)", color: "#011F5B" };
const inputClass = "w-full px-3 py-3 text-sm rounded-[4px] border-0 outline-none focus:ring-2 focus:ring-white/30 transition-all";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-6 md:py-12 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left — heading + copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/5 lg:pt-2"
          >
            <span className="text-xs font-bold tracking-[0.4em] text-accent mb-4 block uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-tight">
              LET'S <span className="font-medium">CONNECT.</span>
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-white/70 leading-relaxed text-lg font-light mb-8">
              Ready to optimize your impact? Fill out the form and Renee will be in touch to discuss a strategy tailored to your goals.
            </p>
            <div className="space-y-4 text-white/60 text-sm font-light">
              <p className="flex items-start gap-3">
                <span className="text-accent mt-0.5">—</span>
                Executive coaching &amp; leadership development
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent mt-0.5">—</span>
                Career consulting &amp; strategy
              </p>
              <p className="flex items-start gap-3">
                <span className="text-accent mt-0.5">—</span>
                Group facilitation &amp; curriculum design
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-3/5 w-full"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light tracking-tight mb-2">Thank you for reaching out!</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    Your message has been received. Renee will get back to you within 24–48 hours. We look forward to connecting soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold tracking-[0.15em] uppercase text-white/80">
                      Name
                    </Label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold tracking-[0.15em] uppercase text-white/80">
                      Email Address
                    </Label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs font-bold tracking-[0.15em] uppercase text-white/80">
                    Subject
                  </Label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="Executive Coaching Inquiry"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-bold tracking-[0.15em] uppercase text-white/80">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-300 text-sm font-light">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{
                    background: "#ffffff",
                    color: "#011F5B",
                    borderRadius: "50px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={e => { if (status !== "submitting") e.currentTarget.style.background = "rgba(255,255,255,0.85)"; }}
                  onMouseLeave={e => (e.currentTarget.style.background = "#ffffff")}
                >
                  {status === "submitting" ? "SENDING…" : "START THE CONVERSATION"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
