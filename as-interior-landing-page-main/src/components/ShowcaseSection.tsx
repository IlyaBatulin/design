
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const showcaseImages = [
  {
    id: 1,
    image: "/lovable-uploads/06e294cf-d4df-4c52-a624-93aac346e7b1.png",
    description: "Элегантный дизайн кабинета с бордовыми акцентами"
  },
  {
    id: 2,
    image: "/lovable-uploads/a7a757f7-d344-416e-997a-e7346b4e3363.png",
    description: "Современная кухня с бордовыми фасадами и мраморной столешницей"
  },
  {
    id: 3,
    image: "/lovable-uploads/abf922fa-586b-47e3-863c-670fc58f7564.png",
    description: "Уютная гостиная с деревянными элементами и панорамными окнами"
  },
  {
    id: 4,
    image: "/lovable-uploads/9415f238-45de-4cbb-a741-f3df4b7d620e.png",
    description: "Минималистичный интерьер с деревянными панелями и светлой мебелью"
  },
  {
    id: 5,
    image: "/lovable-uploads/56e49fef-d1ba-4a8f-9595-f60a30ce8c04.png",
    description: "Просторная библиотека с встроенными шкафами и светлой мебелью"
  },
  {
    id: 6,
    image: "/lovable-uploads/93a2ed62-ee9f-4bb9-90d0-b5de2b924b9e.png",
    description: "Современная темная кухня с подсветкой и минималистичным дизайном"
  },
  {
    id: 7,
    image: "/lovable-uploads/2b255dd9-91e8-4bc0-80c4-22b07313758a.png",
    description: "Светлая гостиная с темными деревянными стенами и минималистичной мебелью"
  },
  {
    id: 8,
    image: "/lovable-uploads/fd4c0bb3-80b2-4def-859d-0407906c5b83.png",
    description: "Спальня с телевизором и текстурной стеной"
  },
  {
    id: 9,
    image: "/lovable-uploads/c8eba27b-233f-4dd0-9899-b1047b709bc1.png",
    description: "Современная кухня с островом и деревянными элементами"
  },
  {
    id: 10,
    image: "/lovable-uploads/f39584f6-88c5-44cc-9fb4-140b198dbd3a.png",
    description: "Спальня с зеленой кроватью и деревянными панелями"
  },
  {
    id: 11,
    image: "/lovable-uploads/e3cf4589-4917-4409-ac68-95a6d7eb9254.png",
    description: "Спальня в зеленых тонах с деревянными панелями и растениями"
  }
];

const ShowcaseSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <section id="showcase" className="section bg-asLight">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Вдохновляющие интерьеры</h2>
          <p className="text-asGray-400 max-w-2xl mx-auto">
            Погрузитесь в мир изысканных интерьеров, сочетающих современные тенденции с уютом и функциональностью
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl">
          <Carousel className="relative mb-12">
            <CarouselContent>
              {showcaseImages.map((item) => (
                <CarouselItem key={item.id} className="relative h-[600px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.description} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asDark/70 to-transparent flex flex-col justify-end p-6">
                    <p className="text-asWhite text-sm md:text-base">{item.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-asWhite/80 hover:bg-asWhite text-asDark border-none" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-asWhite/80 hover:bg-asWhite text-asDark border-none" />
          </Carousel>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {showcaseImages.slice(0, 8).map((item, index) => (
              <div 
                key={item.id} 
                className="h-48 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setCurrentImage(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.description}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
