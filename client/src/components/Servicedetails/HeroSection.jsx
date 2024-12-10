const HeroSection = () => {
  return (
    <section className="bg-gradient-to-t from-teal-500 via-teal-200 to-tertiary font-sans pt-16 pb-20 max-md:pt-[120px] max-lg:pt-36 lg:pt-36">
      {/* Content Container */}
      <div className="flex flex-col gap-4 mx-auto max-w-none max-lg:max-w-[728px] lg:max-w-[1024px]">
        {/* Header Section */}
        <h1
          className="text-primary font-bold text-center pb-4
            text-[32px] leading-[35px] 
            sm:text-5xl sm:leading-[51px]
            md:text-[65px] md:leading-[72px]
            lg:text-[70px] lg:leading-[77px]"
        >
          <span className="text-secondary">Web</span> Development
        </h1>

        {/* Description Section */}
        <p
          className="text-secondary text-center font-medium 
            text-[18px] leading-[27px] 
            mx-[10px] sm:mx-4"
        >
          Encompasses building and maintaining websites, including front-end
          (user interface) and back-end (server-side) development.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
