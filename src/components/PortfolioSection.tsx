import { useState } from 'react';
import { Project, projectsData } from './portfolio/ProjectData';
import ProjectCard from './portfolio/ProjectCard';
import FilterButtons from './portfolio/FilterButtons';
import GridView from './portfolio/GridView';
import ProjectCarousel from './portfolio/ProjectCarousel';
import ProjectModal from './portfolio/ProjectModal';

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePreviousProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const previousIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[previousIndex]);
  };

  return (
    <section id="portfolio" className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Наши проекты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Ознакомьтесь с нашими последними работами и вдохновитесь идеями для вашего интерьера
          </p>
        </div>

        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <FilterButtons
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="flex space-x-2 justify-center md:justify-end">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2.5 rounded-md text-sm md:text-base min-w-[80px] ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Сетка
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2.5 rounded-md text-sm md:text-base min-w-[80px] ${
                viewMode === 'carousel'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Карусель
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <GridView
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        ) : (
          <ProjectCarousel
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        )}

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={handleCloseModal}
            onNext={handleNextProject}
            onPrevious={handlePreviousProject}
            hasNavigation={true}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
