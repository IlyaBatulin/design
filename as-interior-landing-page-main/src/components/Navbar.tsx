
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "shadow-sm py-2" : "py-4"} transition-all duration-300`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-semibold">A.S</span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest">Interior Design Studio</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="nav-link active">Главная</a>
          <a href="#about" className="nav-link">О студии</a>
          <a href="#portfolio" className="nav-link">Портфолио</a>
          <a href="#services" className="nav-link">Услуги</a>
          <a href="#contact" className="nav-link">Контакты</a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-asDark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-asWhite absolute w-full transition-all duration-300 ease-in-out border-t border-asGray-200 ${
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="container py-4 flex flex-col space-y-4">
          <a href="#" className="nav-link active">Главная</a>
          <a href="#about" className="nav-link">О студии</a>
          <a href="#portfolio" className="nav-link">Портфолио</a>
          <a href="#services" className="nav-link">Услуги</a>
          <a href="#contact" className="nav-link">Контакты</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
