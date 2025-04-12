
import { useState, useEffect } from 'react';
import { type CarouselApi } from "@/components/ui/carousel";
import FilterButtons from './portfolio/FilterButtons';
import ProjectCarousel from './portfolio/ProjectCarousel';
import GridView from './portfolio/GridView';
import InspirationCarousel from './portfolio/InspirationCarousel';
import { projectsData, whiteProjects, burgundyProjects, inspirationProjects } from './portfolio/ProjectData';

const PortfolioSection = () => {
  const [filter, setFilter] = useState<string>('all');
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [whiteApi, setWhiteApi] = useState<CarouselApi | null>(null);
  const [burgundyApi, setBurgundyApi] = useState<CarouselApi | null>(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Set up autoplay for carousels
  useEffect(() => {
    if (!api || !whiteApi || !burgundyApi || !autoplayEnabled) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
      whiteApi.scrollNext();
      burgundyApi.scrollNext();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [api, whiteApi, burgundyApi, autoplayEnabled]);

  return (
    <section id="portfolio" className="section bg-asGray-50 scroll-reveal">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Наши проекты</h2>
          <p className="text-asGray-600 max-w-2xl mx-auto">
            Исследуйте наше портфолио и вдохновляйтесь реализованными проектами, которые мы создали для наших клиентов
          </p>
          
          {/* Filter Buttons Component */}
          <FilterButtons activeFilter={filter} onFilterChange={setFilter} />
        </div>
        
        {filter === 'all' && (
          <>
            {/* White Projects Carousel */}
            <ProjectCarousel 
              projects={whiteProjects} 
              title="ЖК Событие г. Москва" 
              setCarouselApi={setWhiteApi} 
            />
            
            {/* Burgundy Projects Carousel */}
            <ProjectCarousel 
              projects={burgundyProjects} 
              title="ЖК Сердце Столицы" 
              setCarouselApi={setBurgundyApi} 
            />
            
            {/* Inspiration Projects Carousel */}
            <InspirationCarousel 
              projects={inspirationProjects}
              autoplayEnabled={autoplayEnabled}
              setAutoplayEnabled={setAutoplayEnabled}
              carouselApi={api}
              setCarouselApi={setApi}
            />
          </>
        )}
        
        {/* Grid View for filtered projects */}
        {filter !== 'all' && (
          <GridView projects={filteredProjects} />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
