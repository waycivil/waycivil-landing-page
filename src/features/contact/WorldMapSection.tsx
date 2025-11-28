import WorldMap from "@/components/ui/world-map";
import { Mail, PhoneCall, Shield } from "lucide-react";

const WorldMapSection = () => {
  return (
    <section className=" w-full bg-background pt-10 pb-20">
      <div className=" w-full max-w-content mx-auto px-6 maxwidth:px-0 laptop:overflow-hidden">
        <div className=" w-full relative laptop:mt-10 full:-mt-20 hidden tablet:block">
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
            className="full:flex flex-col gap-5 full:gap-8 laptop:flex-row justify-center absolute bottom-0 hidden
         left-[50%] -translate-x-1/2"
          >
            {/* Box 1 */}
            <div
              className=" rounded-2xl border border-border bg-container p-4 tablet:p-8 min-w-94
            shadow-black shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <PhoneCall className="h-5 tablet:h-6 w-5 tablet:w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg tablet:text-xl font-semibold text-foreground">
                Book a call
              </h3>
              <p className="text-sm tablet:text-base leading-relaxed text-subtitle">
                Schedule a call with us
              </p>
            </div>

            {/* Box 2 */}
            <div
              className=" rounded-2xl border border-border bg-container p-4 tablet:p-8 min-w-94
            shadow-black shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Mail className="h-5 tablet:h-6 w-5 tablet:w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg tablet:text-xl font-semibold text-foreground">
                Chat to sales
              </h3>
              <p className="text-sm tablet:text-base leading-relaxed text-subtitle">
                Get in touch with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
