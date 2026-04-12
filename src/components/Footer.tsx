import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-3 md:py-6 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-8">

          {/* On mobile: logo + LinkedIn share one row (left / right).
              On desktop: wrapper dissolves via `contents` so all three
              items sit in the parent's flex row as normal. */}
          <div className="flex flex-row justify-between items-center w-full md:contents">
            <div className="flex flex-col items-start md:flex-1">
              <span className="text-xl font-light tracking-widest text-primary leading-tight">
                RENEE DOLE
              </span>
              <span className="text-[8px] tracking-[0.3em] text-primary/70 font-medium -mt-1">
                CONSULTING
              </span>
            </div>

            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/renee-dole-2b50281/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/40 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <p className="text-[10px] tracking-widest text-primary/40 font-medium uppercase">
              © {new Date().getFullYear()} RENEE DOLE CONSULTING. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
