
import { MessageSquare, Smartphone } from "lucide-react";
import { useState } from "react";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Круглая кнопка вызова */}
      <div 
        className="contact-float"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src="/lovable-uploads/85dfb537-833e-4fdf-a2bc-428ed00888ba.png" 
          alt="Контактное лицо" 
          className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white" 
        />
      </div>
      
      {/* Всплывающее окно с контактами */}
      <div className={`contact-popup ${isOpen ? "active" : ""}`}>
        <div className="flex items-center space-x-4 mb-6">
          <img 
            src="/lovable-uploads/85dfb537-833e-4fdf-a2bc-428ed00888ba.png" 
            alt="Контактное лицо" 
            className="w-20 h-20 rounded-full object-cover shadow-md border-2 border-white" 
          />
          <div>
            <h3 className="font-medium text-lg">Амалия</h3>
            <p className="text-sm text-asGray-500">Руководитель студии</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <a 
            href="https://t.me/asinteriordesign" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 p-3 bg-[#0088cc]/10 rounded-sm hover:bg-[#0088cc]/20 transition-colors"
          >
            <MessageSquare size={22} className="text-[#0088cc]" />
            <span className="font-medium">Написать в Telegram</span>
          </a>
          
          <a 
            href="https://wa.me/79991234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 p-3 bg-[#25D366]/10 rounded-sm hover:bg-[#25D366]/20 transition-colors"
          >
            <svg className="w-[22px] h-[22px] text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="font-medium">Написать в WhatsApp</span>
          </a>
          
          <a 
            href="tel:+79991234567" 
            className="flex items-center space-x-2 p-3 bg-asGray-100 rounded-sm hover:bg-asGray-200 transition-colors"
          >
            <Smartphone size={22} className="text-asBurgundy" />
            <span className="font-medium">Позвонить</span>
          </a>
        </div>
        
        <button 
          className="absolute top-3 right-3 text-asGray-400 hover:text-asDark p-1"
          onClick={() => setIsOpen(false)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span className="sr-only">Закрыть</span>
        </button>
      </div>
    </>
  );
};

export default ContactPopup;
