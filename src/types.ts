export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    area: string;
    year: string;
    location: string;
  };
  images: string[];
}; 