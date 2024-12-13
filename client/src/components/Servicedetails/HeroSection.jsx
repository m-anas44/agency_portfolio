const HeroSection = ({ services, slug }) => {
  const serviceData =
    services.find((item) => item.slug.current === slug.toLowerCase()) ||
    services[0];

  return (
    <section className="py-10 bg-primary sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-20">
      <div className="flex flex-col gap-6">
        <h1
          className="text-tertiary font-bold text-center 
            text-2xl sm:text-3xl md:text-5xl lg:text-[65px] 
            leading-7 sm:leading-9 md:leading-[72px] lg:leading-[77px]"
        >
          {serviceData?.title}
        </h1>

        <p className="px-4 text-sm font-medium leading-5 text-center text-secondary sm:text-base md:text-lg lg:text-xl sm:leading-7 md:leading-8 lg:leading-9 sm:px-6 line-clamp-2">
          {serviceData?.description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
