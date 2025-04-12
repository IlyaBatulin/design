import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from "./ProjectData";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNavigation?: boolean;
}

const ProjectModal = ({ project, isOpen, onClose, onNext, onPrevious, hasNavigation = false }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [isOpen, project]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl mx-4 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white/90"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="relative h-[80vh]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                </div>
              )}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-contain transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={handleImageLoad}
              />
            </div>

            <div className="p-6 bg-white">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              {project.description && (
                <p className="text-gray-600 mb-4">{project.description}</p>
              )}
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium">Площадь:</span> {project.details.area}
                </div>
                <div>
                  <span className="font-medium">Год:</span> {project.details.year}
                </div>
                <div>
                  <span className="font-medium">Локация:</span> {project.details.location}
                </div>
              </div>
            </div>

            {hasNavigation && (onNext || onPrevious) && (
              <div className="absolute inset-y-0 flex items-center justify-between px-4">
                {onPrevious && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/80 hover:bg-white/90"
                    onClick={onPrevious}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </Button>
                )}
                {onNext && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/80 hover:bg-white/90 ml-auto"
                    onClick={onNext}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
