import { Mail, PhoneCall } from "lucide-react";

const ButtonsMobile = () => {
  return (
    <div
      className="flex flex-col gap-5 tablet:flex-row justify-center bottom-0 laptop:hidden
     bg-background pb-20 pt-16 tablet:pt-0 px-6 maxwidth:px-0 mx-auto items-center tablet:-mt-20"
    >
      {/* Box 1 */}
      <div
        className=" rounded-2xl border border-border bg-container p-4 tablet:p-8 w-full laptop:w-72
            shadow-black shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
      >
        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 tablet:p-3">
          <PhoneCall className="h-4 tablet:h-6 w-4 tablet:w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-lg tablet:text-xl font-semibold text-foreground">
          Meet Us
        </h3>
        <p className="mb-4 text-sm tablet:text-base leading-relaxed text-subtitle">
          Schedule a call with us
        </p>
        <a href="/quality-checks" className="w-full">
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
        className=" rounded-2xl border border-border bg-container p-4 tablet:p-8 w-full laptop:w-72
            shadow-black shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
      >
        <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 tablet:p-3">
          <Mail className="h-4 tablet:h-6 w-4 tablet:w-6 text-primary" />
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
  );
};

export default ButtonsMobile;
