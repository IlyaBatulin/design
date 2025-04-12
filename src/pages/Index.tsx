
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";
import ShowcaseSection from "@/components/ShowcaseSection";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Эффект для обработки анимации появления элементов при скролле
  useEffect(() => {
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealOnScroll = () => {
      for (let i = 0; i < scrollRevealElements.length; i++) {
        const element = scrollRevealElements[i];
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add("active");
        }
      }
    };
    
    // Имитируем загрузку страницы
    const timer = setTimeout(() => {
      setIsLoading(false);
      // После загрузки запускаем первичную анимацию
      setTimeout(revealOnScroll, 100);
    }, 800);
    
    // Слушаем скролл страницы
    window.addEventListener("scroll", revealOnScroll);
    
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-asWhite flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4 text-asBurgundy">A.S Interior Design Studio</h1>
          <div className="w-16 h-1 bg-asBurgundy mx-auto mb-4"></div>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 rounded-full bg-asBurgundy animate-[bounce_1s_infinite_100ms]"></div>
            <div className="w-3 h-3 rounded-full bg-asBurgundy animate-[bounce_1s_infinite_200ms]"></div>
            <div className="w-3 h-3 rounded-full bg-asBurgundy animate-[bounce_1s_infinite_300ms]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ShowcaseSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ContactPopup />
      
      {/* Кнопка для возвращения наверх страницы */}
      <ScrollToTopButton />
    </>
  );
};

// Компонент кнопки "Наверх"
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <button 
      className={`fixed bottom-8 right-24 bg-asBurgundy/80 hover:bg-asBurgundy text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 z-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      onClick={scrollToTop}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
      <span className="sr-only">Наверх</span>
    </button>
  );
};

export default Index;
