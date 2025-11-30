import WorldMap from "@/components/ui/world-map";
import { Mail, PhoneCall } from "lucide-react";

const WorldMapSection = () => {
  return (
    <section className="hidden tablet:block w-full bg-background pt-10 pb-20">
      <div
        className=" w-full max-w-content mx-auto px-6 maxwidth:px-0 laptop:overflow-y-hidden
       mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%)]"
      >
        <div className=" w-full relative full:-mt-20 hidden tablet:block">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 16.7617,
                  lng: -85.1918,
                }, // Miami
                end: {
                  lat: 26.7617,
                  lng: -122.1918,
                }, // California
              },
              {
                start: {
                  lat: -14.5709,
                  lng: -74.2973,
                }, // Colombia
                end: {
                  lat: 29.7617,
                  lng: -5,
                }, // España
              },
            ]}
          />

          {/* Buttons - Full Laptop */}
          <div
            className="laptop:flex flex-col gap-5 full:gap-8 laptop:flex-row justify-center absolute bottom-0 hidden
         left-[50%] -translate-x-1/2 z-1000"
          >
            {/* Box 1 */}
            <div
              className=" rounded-xl border border-border bg-container p-4 tablet:p-8 w-72
            shadow-black shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <PhoneCall className="h-5 tablet:h-6 w-5 tablet:w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg tablet:text-xl font-semibold text-foreground">
                Meet Us
              </h3>
              <p className="mb-4 text-sm tablet:text-base leading-relaxed text-subtitle">
                Schedule a call with us
              </p>
              <a
                href={import.meta.env.PUBLIC_CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button
                  className="bg-primary text-sm rounded-md font-medium text-foreground hover:bg-primary-hover px-6 py-2.5
                  cursor-pointer w-full tablet:w-fit"
                >
                  Book a call
                </button>
              </a>
            </div>

            {/* Box 2 */}
            <div
              className=" rounded-xl border border-border bg-container p-4 tablet:p-8 w-72
            shadow-black shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Mail className="h-5 tablet:h-6 w-5 tablet:w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg tablet:text-xl font-semibold text-foreground">
                Sales
              </h3>
              <p className="mb-4 text-sm tablet:text-base leading-relaxed text-subtitle">
                Get in touch with us
              </p>
              <a href="/contact/sales" className="w-full">
                <button
                  className="bg-primary text-sm rounded-md font-medium text-foreground hover:bg-primary-hover px-6 py-2.5
                  cursor-pointer w-full tablet:w-fit"
                >
                  Chat to sales
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
