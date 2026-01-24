import { Phone, Truck, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#fleet", label: "Автопарк" },
  { href: "#prices", label: "Цены" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#contacts", label: "Контакты" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="hidden sm:block">
              <div className={`font-bold text-lg transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-background"}`}>
                ВитЭкспресс
              </div>
              <div className={`text-xs transition-colors duration-300 ${isScrolled ? "text-muted-foreground" : "text-background/70"}`}>
                Надежные грузоперевозки
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 link-underline ${
                  isScrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-background/90 hover:text-background"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+375256775849"
              className={`flex items-center gap-2 font-semibold transition-all duration-300 group ${
                isScrolled ? "text-primary hover:text-primary/80" : "text-background hover:text-background/80"
              }`}
            >
              <div className="relative">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span>+375 (25) 677-58-49</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-background"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-b-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300 px-4 py-2 rounded-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+375256775849"
                className="flex items-center gap-2 text-primary font-semibold px-4 py-2 mt-2 bg-primary/5 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                <span>+375 (25) 677-58-49</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
