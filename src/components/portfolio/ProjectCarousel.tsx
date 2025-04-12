import { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { EmblaOptionsType } from 'embla-carousel';
import ProjectCard from './ProjectCard';
import { type Project } from './ProjectData';

interface ProjectCarouselProps {
  projects: Project[];
  title?: string;
  setCarouselApi?: (api: CarouselApi) => void;
  itemsPerView?: string;
  onProjectClick: (project: Project) => void;
}

const ProjectCarousel = ({ 
  projects, 
  title,
  setCarouselApi,
  itemsPerView = "basis-full md:basis-1/2 lg:basis-1/3",
  onProjectClick
}: ProjectCarouselProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Определяем, мобильное ли устройство
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Проверяем при загрузке
    checkMobile();
    
    // Слушаем изменение размера окна
    window.addEventListener('resize', checkMobile);
    
    // Имитируем загрузку карусели
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Уменьшили время для мобильных устройств
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);
  
  const carouselOptions: EmblaOptionsType = {
    loop: true,
    align: "start",
    dragFree: isMobile ? false : true, // На мобильных устройствах отключаем dragFree для лучшего UX
    slidesToScroll: isMobile ? 1 : 2, // На мобильных устройствах прокручиваем по одному слайду
  };

  return (
    <div className="mb-8 md:mb-16">
      {title && <h3 className="heading-md mb-4 md:mb-8 text-center">{title}</h3>}
      {isLoading ? (
        <div className="flex justify-center items-center h-48 md:h-64">
          <div className="w-10 h-10 border-3 border-asBurgundy border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <Carousel className="w-full" opts={carouselOptions} setApi={setCarouselApi}>
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className={itemsPerView}>
                <ProjectCard 
                  project={project} 
                  onClick={() => onProjectClick(project)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-4">
            <CarouselPrevious className="static mx-2 transform-none bg-asBurgundy/20 hover:bg-asBurgundy/40 text-asWhite border-none shadow-md h-10 w-10" />
            <CarouselNext className="static mx-2 transform-none bg-asBurgundy/20 hover:bg-asBurgundy/40 text-asWhite border-none shadow-md h-10 w-10" />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default ProjectCarousel;
