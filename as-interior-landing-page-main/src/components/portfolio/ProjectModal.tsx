
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type ProjectType } from "./ProjectData";

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNavigation?: boolean;
}

const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNavigation = false 
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto p-0">
        <DialogClose className="absolute right-4 top-4 z-10 bg-white/80 rounded-full p-1.5 hover:bg-white">
          <X className="h-5 w-5" />
        </DialogClose>
        
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[50vh] md:h-[60vh] object-cover"
          />
          
          {hasNavigation && (
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white shadow-md"
                onClick={onPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous project</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-white/80 hover:bg-white shadow-md"
                onClick={onNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next project</span>
              </Button>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">{project.title}</DialogTitle>
            {project.location && (
              <DialogDescription className="text-lg mt-1">{project.location}</DialogDescription>
            )}
          </DialogHeader>
          
          <div className="mt-4">
            {project.description && (
              <p className="text-gray-700">{project.description}</p>
            )}
            
            {project.category && (
              <div className="mt-4">
                <span className="text-sm text-gray-500">Category: </span>
                <span className="inline-block bg-asGray-100 text-asDark px-3 py-1 rounded-sm text-sm">
                  {project.category === 'white' ? 'White Interior' :
                   project.category === 'burgundy' ? 'Burgundy Interior' :
                   project.category === 'inspiration' ? 'Inspiration' : project.category}
                </span>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
