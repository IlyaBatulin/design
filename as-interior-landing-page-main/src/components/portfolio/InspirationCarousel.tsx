
import { type CarouselApi } from "@/components/ui/carousel";
import ProjectCarousel from './ProjectCarousel';
import { type ProjectType } from './ProjectData';

interface InspirationCarouselProps {
  projects: ProjectType[];
  autoplayEnabled: boolean;
  setAutoplayEnabled: (enabled: boolean) => void;
  carouselApi: CarouselApi | null;
  setCarouselApi: (api: CarouselApi) => void;
}

const InspirationCarousel = ({ 
  projects,
  autoplayEnabled,
  setAutoplayEnabled,
  carouselApi,
  setCarouselApi
}: InspirationCarouselProps) => {
  return (
    <div className="pt-6">
      <h3 className="heading-md mb-8 text-center">Вдохновляющие интерьеры</h3>
      <ProjectCarousel 
        projects={projects}
        title=""
        setCarouselApi={setCarouselApi}
        itemsPerView="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
      />
      <div className="flex items-center justify-center mt-4">
        <button 
          onClick={() => setAutoplayEnabled(!autoplayEnabled)}
          className={`px-3 py-1 mx-2 rounded-sm text-sm ${autoplayEnabled ? 'bg-asBurgundy text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          {autoplayEnabled ? 'Пауза' : 'Слайдшоу'}
        </button>
      </div>
    </div>
  );
};

export default InspirationCarousel;
