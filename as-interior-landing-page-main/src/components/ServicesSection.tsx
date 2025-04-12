
const ServicesSection = () => {
  const services = [
    {
      icon: "✏️",
      title: "Дизайн-проект",
      description: "Полная разработка дизайн-проекта от обмеров до визуализации и чертежей"
    },
    {
      icon: "🏠",
      title: "Планировочное решение",
      description: "Разработка функциональной планировки с учетом ваших пожеланий и потребностей"
    },
    {
      icon: "🖼️",
      title: "3D-визуализация",
      description: "Реалистичная визуализация интерьера для наглядного представления будущего пространства"
    },
    {
      icon: "📋",
      title: "Комплектация проекта",
      description: "Подбор материалов, мебели, освещения и декора для вашего интерьера"
    },
    {
      icon: "👷‍♀️",
      title: "Авторский надзор",
      description: "Контроль реализации проекта на всех этапах строительных и отделочных работ"
    },
    {
      icon: "🏢",
      title: "Коммерческие интерьеры",
      description: "Разработка дизайна офисов, ресторанов, магазинов и других коммерческих пространств"
    }
  ];

  return (
    <section id="services" className="section bg-asLight">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Наши услуги</h2>
          <p className="text-asGray-400 max-w-2xl mx-auto">
            Мы предоставляем полный спектр услуг по созданию уникальных и функциональных интерьеров
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="heading-sm mb-3">{service.title}</h3>
              <p className="text-asGray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="heading-sm mb-6">Как мы работаем</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-asBurgundy text-asWhite flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h4 className="font-medium mb-2">Встреча и обсуждение</h4>
              <p className="text-sm text-asGray-400 text-center">Знакомство и обсуждение ваших пожеланий</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-asBurgundy text-asWhite flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h4 className="font-medium mb-2">Разработка концепции</h4>
              <p className="text-sm text-asGray-400 text-center">Создание планировки и концепции дизайна</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-asBurgundy text-asWhite flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h4 className="font-medium mb-2">3D-визуализация</h4>
              <p className="text-sm text-asGray-400 text-center">Реалистичная визуализация будущего интерьера</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-asBurgundy text-asWhite flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h4 className="font-medium mb-2">Реализация проекта</h4>
              <p className="text-sm text-asGray-400 text-center">Подготовка документации и авторский надзор</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
