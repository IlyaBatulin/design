
import { useState } from 'react';
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
import { type ProjectType } from './ProjectData';

interface ProjectCarouselProps {
  projects: ProjectType[];
  title: string;
  setCarouselApi?: (api: CarouselApi) => void;
  itemsPerView?: string;
}

const ProjectCarousel = ({ 
  projects, 
  title, 
  setCarouselApi,
  itemsPerView = "md:basis-1/2 lg:basis-1/3"
}: ProjectCarouselProps) => {
  
  const carouselOptions: EmblaOptionsType = {
    loop: true,
    align: "start",
    dragFree: true,
  };

  return (
    <div className="mb-16">
      <h3 className="heading-md mb-8 text-center">{title}</h3>
      <Carousel className="w-full" opts={carouselOptions} setApi={setCarouselApi}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={project.id} className={itemsPerView}>
              <ProjectCard 
                project={project} 
                index={index} // Add index for staggered animation
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4">
          <CarouselPrevious className="static mx-2 transform-none bg-asBurgundy/10 hover:bg-asBurgundy/20 border-none" />
          <CarouselNext className="static mx-2 transform-none bg-asBurgundy/10 hover:bg-asBurgundy/20 border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
