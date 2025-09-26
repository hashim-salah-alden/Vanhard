// import controlFreedomBg from "@/public/images/freedom.jpg";

const ControlFreedomSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(/images/freedom.jpg)` }}
      className="relative flex items-center justify-center bg-no-repeat bg-cover bg-fixed"
    >
      {/* Background Image */}
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Full Control Section */}
          <div className="flex flex-col justify-center lg:text-left space-y-6 p-8 lg:p-12 rounded-lg bg-blur bg-gray/20 backdrop-blur-lg h-full">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-center font-bold text-white mb-4 leading-none">
                Full Control
              </h2>
              <p className="text-lg font-medium text-center text-white/80 tracking-wider uppercase">
                (Your Environment)
              </p>
            </div>
            <p className="text-base md:text-xl text-white/90 text-center leading-relaxed max-w-md mx-auto lg:mx-0">
              YOU RETAIN FULL CONTROL AND OWNERSHIP. WE DON&apos;T RESELL,
              LICENSE, OR HOST ANYTHING.
            </p>
          </div>

          {/* Full Freedom Section */}
          <div className="flex flex-col justify-center lg:text-left space-y-6 p-8 lg:p-12 rounded-lg bg-blur bg-gray/20 backdrop-blur-lg h-full">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl text-center font-bold text-white mb-4 leading-none">
                Full
                Freedom
              </h2>
              <p className="text-lg font-medium text-center text-white/80 tracking-wider uppercase">
                (Your Future)
              </p>
            </div>
            <p className="md:text-xl text-white/90 text-center leading-relaxed max-w-md mx-auto lg:mx-0">
              EACH SETUP IS DELIVERED WITH CLEAR DOCUMENTATION. YOU ARE FREE TO
              MAINTAIN, MODIFY, OR SCALE IT AS YOU WISH.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-primary opacity-60 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default ControlFreedomSection;
