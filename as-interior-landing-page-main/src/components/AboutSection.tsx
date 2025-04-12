
const AboutSection = () => {
  return (
    <section id="about" className="section bg-asLight">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="heading-lg mb-6 text-asBurgundy">О студии A.S Interior Design</h2>
            <p className="text-asDark mb-6">
              A.S Interior Design Studio — это команда профессионалов, создающая уникальные и функциональные интерьерные решения. Мы специализируемся на разработке дизайн-проектов жилых и коммерческих пространств.
            </p>
            <p className="text-asDark mb-6">
              Наш подход основан на тщательном изучении потребностей и предпочтений клиентов, внимательном отношении к деталям и высоком уровне исполнения. Мы стремимся создавать интерьеры, которые не только соответствуют современным тенденциям, но и выражают индивидуальность их владельцев.
            </p>
            <p className="text-asDark mb-6">
              Основная философия нашей студии заключается в сочетании эстетики, эргономики и функциональности. Мы уверены, что идеальный интерьер должен не только впечатлять своим внешним видом, но и быть комфортным для повседневной жизни.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-asBurgundy">7+</span>
                <span className="text-sm text-asGray-400">лет опыта</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-asBurgundy">85+</span>
                <span className="text-sm text-asGray-400">реализованных проектов</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-asBurgundy">40+</span>
                <span className="text-sm text-asGray-400">счастливых клиентов</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/04bf630a-4a1a-4c51-8aa0-a04d38da4ec1.png" 
                alt="Интерьер дизайн-студии" 
                className="w-full h-auto rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 w-32 h-32 border-2 border-asBurgundy rounded-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
