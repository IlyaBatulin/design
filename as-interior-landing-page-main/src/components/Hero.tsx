
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/ea4f9691-199c-44ec-b08c-6ecc4b2ebfde.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-asDark/50"></div>
      </div>
      
      <div className="relative container z-10">
        <div className="max-w-3xl">
          <h1 className="text-asWhite heading-xl mb-6">
            Создаём интерьеры, которые рассказывают вашу историю
          </h1>
          <p className="text-asWhite/90 text-lg mb-8 max-w-xl">
            Мы преображаем пространства в функциональные и эстетичные интерьеры, отражающие индивидуальность каждого клиента
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="button-primary">Смотреть проекты</a>
            <a href="#contact" className="button-outline border-asWhite text-asWhite hover:bg-asWhite hover:text-asDark">Связаться с нами</a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a href="#about" className="text-asWhite animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
