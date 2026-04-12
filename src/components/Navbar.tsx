import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/src/components/ui/sheet";

const navLinks = [
  { name: "HOME", href: "/", type: "route" },
  { name: "SERVICES", href: "/services", type: "route" },
  { name: "ABOUT", href: "/about", type: "route" },
];

function NavLink({ link, className }: { link: typeof navLinks[0]; className: string }) {
  const location = useLocation();

  if (link.type === "route") {
    return (
      <Link
        to={link.href}
        className={className}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <a href={link.href} className={className}>
      {link.name}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-light tracking-widest text-primary leading-tight">
            RENEE DOLE
          </span>
          <span className="text-[10px] tracking-[0.3em] text-primary/70 font-medium -mt-1">
            CONSULTING
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              link={link}
              className="text-xs font-semibold tracking-widest text-primary hover:text-accent transition-colors"
            />
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-6 mt-12">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    className="text-lg font-medium tracking-widest text-primary hover:text-accent transition-colors"
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
