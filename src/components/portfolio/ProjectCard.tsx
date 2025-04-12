import { useState, useEffect, useRef } from 'react';
import { Project } from "./ProjectData";
import ProjectModal from './ProjectModal';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index?: number;
}

const ProjectCard = ({ project, onClick, index = 0 }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="aspect-w-16 aspect-h-9">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-asDark flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-asWhite border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold mb-1">{project.title}</h3>
            {project.location && (
              <p className="text-white/80 text-sm">{project.location}</p>
            )}
          </div>
        </div>
      </motion.div>

      {!onClick && (
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
