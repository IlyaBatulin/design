
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { type ProjectType } from './ProjectData';

interface GridViewProps {
  projects: ProjectType[];
}

const GridView = ({ projects }: GridViewProps) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectType) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard 
              project={project} 
              onProjectClick={handleProjectClick}
              index={index} // Pass the index for staggered animation
            />
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
        hasNavigation={projects.length > 1}
      />
    </>
  );
};

export default GridView;
