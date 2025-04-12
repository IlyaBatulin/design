import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from './ProjectData';

interface GridViewProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const GridView = ({ projects, onProjectClick }: GridViewProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Определение мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePreviousProject = () => {
    if (!selectedProject) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {projects.map((project, index) => (
          <div key={project.id} className="px-1 md:px-0">
            <ProjectCard 
              project={project} 
              onClick={() => handleProjectClick(project)}
              index={index} // Pass the index for staggered animation
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrevious={handlePreviousProject}
          hasNavigation={projects.length > 1 && !isMobile} // Отключаем навигацию на мобильных
        />
      )}
    </>
  );
};

export default GridView;
