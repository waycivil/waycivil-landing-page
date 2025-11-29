import SvgLogo from "@/components/SvgLogo";

const CustomSolution = () => {
  return (
    <div className="relative w-full mt-20 laptop:mt-32 mx-auto max-w-content">
      {/* Circulo exterior */}
      <div
        className="absolute -right-128 top-1/2 size-166 -translate-y-1/2 sm:translate-y-0 rounded-full bg-white/6 pl-14 
      [mask:linear-gradient(to_right,black,transparent_50%)] sm:-bottom-13 sm:-right-100 sm:top-auto sm:transform-none
       md:-right-80 md:bottom-6 lg:-right-83 lg:top-1/2 lg:-translate-y-1/2 xl:-right-16.5"
      ></div>
      <section
        className="relative overflow-hidden px-6 py-13 before:pointer-events-none before:absolute before:inset-0 
      before:bg-linear-to-b before:from-foreground before:to-transparent before:opacity-20 sm:py-20 maxwidth:rounded-md 
      laptop:px-20 laptop:py-27 bg-primary"
      >
        <div className=" space-y-8">
          <div className=" space-y-3">
            <p className="text-3xl font-semibold text-foreground">
              Need a custom solution?
            </p>
            <p className="max-w-md text-balance text-sm text-foreground">
              Get in touch with our sales team to discuss enterprise plans,
              custom integrations, and dedicated support for your organization.
            </p>
          </div>
          <a href="/contact">
            <button
              className="bg-foreground text-background opacity-100 hover:bg-foreground/80 py-1.5 font-medium 
              text-sm px-3 rounded-md cursor-pointer shadow-black/30 shadow-md transition-all duration-200"
            >
              Contact Us
            </button>
          </a>
        </div>

        {/* Box */}
        <div
          className="absolute -right-128 top-1/2 grid size-166 -translate-y-1/2 select-none place-content-center rounded-full 
          border border-white/10 bg-white/6 pl-14 sm:-bottom-13 sm:-right-100 sm:top-auto sm:translate-y-0 md:-right-80 
         md:bottom-6 lg:-right-83 lg:top-1/2 lg:-translate-y-1/2 xl:-right-16.5"
        >
          <div className="hidden full:block mr-46 maxwidth:mr-0">
            <SvgLogo color="rgba(255, 255, 255, 0.1)" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolution;
