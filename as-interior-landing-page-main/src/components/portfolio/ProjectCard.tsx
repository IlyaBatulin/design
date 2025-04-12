
import { useState, useEffect, useRef } from 'react';
import { type ProjectType } from './ProjectData';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: ProjectType;
  onProjectClick?: (project: ProjectType) => void;
  index?: number; // Added to stagger animations
}

const ProjectCard = ({ project, onProjectClick, index = 0 }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay based on the index for a staggered effect
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100); // Stagger by 100ms per card
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <>
      <div 
        ref={cardRef}
        className={`project-card p-1 h-full cursor-pointer transition-all duration-700 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        onClick={handleClick}
      >
        <div className="relative h-64 md:h-80 overflow-hidden group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-image"
          />
          <div className="project-overlay">
            <h3 className="project-title">{project.title}</h3>
            {project.location && <p className="project-location">{project.location}</p>}
          </div>
        </div>
      </div>

      {!onProjectClick && (
        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
