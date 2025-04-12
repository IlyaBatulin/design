// This file contains all the project data used in the portfolio section

export type Project = {
  id: number;
  title: string;
  location?: string;
  category: string;
  image: string;
  description?: string;
  details: {
    area: string;
    year: string;
    location: string;
  };
};

// White projects - ЖК Событие
export const whiteProjects: Project[] = [
  {
    id: 1,
    title: "ЖК Событие - Гостиная",
    location: "Москва",
    category: "white",
    image: "/lovable-uploads/ea4f9691-199c-44ec-b08c-6ecc4b2ebfde.png",
    description: "Современный светлый интерьер с акцентами на детали",
    details: {
      area: "35 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 2,
    title: "ЖК Событие - Детская",
    location: "Москва",
    category: "white",
    image: "/lovable-uploads/1202f05f-0768-43f7-98aa-2af69e1e6b44.png",
    description: "Уютная детская комната в светлых тонах",
    details: {
      area: "25 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 3,
    title: "ЖК Событие - Спальня",
    location: "Москва",
    category: "white",
    image: "/lovable-uploads/0a93ca0a-89dd-4c4a-8615-2b4dcaa2c1fc.png",
    description: "Элегантная спальня с минималистичным декором",
    details: {
      area: "30 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 4,
    title: "ЖК Событие - Рабочее пространство",
    location: "Москва",
    category: "white",
    image: "/lovable-uploads/555eb5f5-ab91-4a59-a23f-efb3e186bd3c.png",
    description: "Функциональный домашний офис с современным дизайном",
    details: {
      area: "20 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 5,
    title: "ЖК Событие - Рабочее место 2",
    location: "Москва",
    category: "white",
    image: "/lovable-uploads/a8791a46-b2ac-4e2f-8c51-77fd9aa49352.png", 
    description: "Современное рабочее пространство со стильным дизайном",
    details: {
      area: "18 м²",
      year: "2023",
      location: "Москва"
    }
  }
];

// Burgundy projects - ЖК Сердце Столицы
export const burgundyProjects: Project[] = [
  {
    id: 6,
    title: "ЖК Сердце Столицы - Кабинет",
    location: "Москва",
    category: "burgundy",
    image: "/lovable-uploads/06e294cf-d4df-4c52-a624-93aac346e7b1.png",
    description: "Элегантный кабинет с бордовыми стеновыми панелями",
    details: {
      area: "25 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 7,
    title: "ЖК Сердце Столицы - Кухня",
    location: "Москва",
    category: "burgundy",
    image: "/lovable-uploads/a7a757f7-d344-416e-997a-e7346b4e3363.png",
    description: "Современная кухня с бордовыми фасадами и мраморной столешницей",
    details: {
      area: "22 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 8,
    title: "ЖК Сердце Столицы - Гостиная 2",
    location: "Москва",
    category: "burgundy",
    image: "/lovable-uploads/e3611392-a244-49bb-a53a-3566de357464.png",
    description: "Гостиная с глубокими бордовыми акцентами",
    details: {
      area: "40 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 9,
    title: "ЖК Сердце Столицы - Кухня 2",
    location: "Москва",
    category: "burgundy",
    image: "/lovable-uploads/4d2244d8-0639-4d15-9e2d-71211dd75d68.png",
    description: "Элегантная кухня с деревянными и мраморными деталями",
    details: {
      area: "24 м²",
      year: "2023",
      location: "Москва"
    }
  }
];

// Combined project data
export const projectsData = [...whiteProjects, ...burgundyProjects];

// Inspiration projects
export const inspirationProjects = [
  {
    id: 101,
    title: "Вдохновение - Светлая гостиная",
    category: "inspiration",
    image: "/lovable-uploads/9415f238-45de-4cbb-a741-f3df4b7d620e.png",
  },
  {
    id: 102,
    title: "Вдохновение - Спальня",
    category: "inspiration",
    image: "/lovable-uploads/2b255dd9-91e8-4bc0-80c4-22b07313758a.png",
  },
  {
    id: 103,
    title: "Вдохновение - Кухня",
    category: "inspiration",
    image: "/lovable-uploads/93a2ed62-ee9f-4bb9-90d0-b5de2b924b9e.png",
  },
  {
    id: 104,
    title: "Вдохновение - Кабинет",
    category: "inspiration",
    image: "/lovable-uploads/04bf630a-4a1a-4c51-8aa0-a04d38da4ec1.png",
  },
  {
    id: 105,
    title: "Вдохновение - Детская",
    category: "inspiration",
    image: "/lovable-uploads/56e49fef-d1ba-4a8f-9595-f60a30ce8c04.png",
  },
  {
    id: 106,
    title: "Вдохновение - Гостиная",
    category: "inspiration",
    image: "/lovable-uploads/abf922fa-586b-47e3-863c-670fc58f7564.png",
  },
  {
    id: 107,
    title: "Вдохновение - Столовая",
    category: "inspiration",
    image: "/lovable-uploads/c8eba27b-233f-4dd0-9899-b1047b709bc1.png",
  },
  {
    id: 108,
    title: "Вдохновение - Ванная",
    category: "inspiration",
    image: "/lovable-uploads/e3cf4589-4917-4409-ac68-95a6d7eb9254.png",
  },
  {
    id: 109,
    title: "Вдохновение - Прихожая",
    category: "inspiration",
    image: "/lovable-uploads/f39584f6-88c5-44cc-9fb4-140b198dbd3a.png",
  },
  {
    id: 110,
    title: "Вдохновение - Холл",
    category: "inspiration",
    image: "/lovable-uploads/fd4c0bb3-80b2-4def-859d-0407906c5b83.png",
  }
];

// Project type
export type ProjectType = {
  id: number;
  title: string;
  location?: string;
  category: string;
  image: string;
  description?: string;
  details: {
    area: string;
    year: string;
    location: string;
  };
};

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  details: {
    area: string;
    year: string;
    location: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Современная гостиная",
    description: "Элегантный дизайн гостиной с использованием натуральных материалов",
    image: "/images/projects/living-room.jpg",
    category: "Жилые помещения",
    details: {
      area: "35 м²",
      year: "2023",
      location: "Москва"
    }
  },
  {
    id: 2,
    title: "Минималистичная кухня",
    description: "Функциональная кухня в стиле минимализм",
    image: "/images/projects/kitchen.jpg",
    category: "Кухни",
    details: {
      area: "20 м²",
      year: "2023",
      location: "Санкт-Петербург"
    }
  },
  {
    id: 3,
    title: "Спальня в скандинавском стиле",
    description: "Уютная спальня с элементами скандинавского дизайна",
    image: "/images/projects/bedroom.jpg",
    category: "Спальни",
    details: {
      area: "25 м²",
      year: "2023",
      location: "Москва"
    }
  }
];
