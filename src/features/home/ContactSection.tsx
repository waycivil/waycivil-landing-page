import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import SpecialButton from "./SpecialButton";

const ContactSection = () => {
  return (
    <BackgroundBeamsWithCollision
      className="relative w-full overflow-hidden bg-linear-to-b from-background via-[#1a0b06] via-70% to-[#2d1508]
     px-6 py-24 laptop:py-32"
    >
      <div className="relative z-10 mx-auto max-w-content">
        <div className="flex flex-col gap-8">
          <h2
            className="text-balance text-left font-sans text-4xl font-bold leading-tight tracking-tight text-foreground
           laptop:text-5xl"
          >
            Ready to boost your company's productivity with Artificial
            Intelligence?
          </h2>

          {/* Buttons */}
          <div className="flex flex-col items-start gap-4 tablet:flex-row">
            <a href="/quality-checks" className="w-full tablet:w-fit">
              <button
                className="bg-primary text-sm rounded-md font-medium text-foreground hover:bg-primary-hover px-6 py-2.5
        cursor-pointer w-full tablet:w-fit"
              >
                Start reviewing
              </button>
            </a>

            <SpecialButton />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactSection;
