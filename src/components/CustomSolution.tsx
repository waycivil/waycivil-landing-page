import SvgLogo from "@/components/SvgLogo";
import type { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
  btnText?: string;
  btnRoute?: string;
}

const CustomSolution: FC<Props> = ({
  title,
  subtitle,
  btnText = "Contact Us",
  btnRoute = "/contact",
}) => {
  return (
    <div className="relative w-full mt-20 laptop:mt-32 mx-auto max-w-content">
      {/* Circulo exterior */}
      <div
        className="absolute -right-128 top-1/2 size-166 -translate-y-1/2 sm:translate-y-0 rounded-full pl-14 
      [mask:linear-gradient(to_right,black,transparent_50%)] sm:-bottom-13 sm:-right-100 sm:top-auto sm:transform-none
       md:-right-80 md:bottom-6 lg:-right-83 lg:top-1/2 lg:-translate-y-1/2 xl:-right-16.5"
      ></div>
      <section
        className="relative overflow-hidden px-6 py-13 before:pointer-events-none before:absolute before:inset-0 
      before:bg-linear-to-t before:from-primary before:to-transparent before:opacity-20 sm:py-20 maxwidth:rounded-md 
      laptop:px-20 laptop:py-27"
      >
        <div className=" space-y-8">
          <div className=" space-y-3">
            <p className="text-3xl laptop:text-4xl font-semibold text-foreground">
              {title}
            </p>
            <p className="max-w-md text-balance text-sm laptop:text-base text-subtitle">
              {subtitle}
            </p>
          </div>
          <a href={btnRoute} className="w-full tablet:w-fit">
            <button
              className="bg-primary text-sm rounded-md font-bold text-foreground hover:bg-primary-hover px-6 py-2.5
              cursor-pointer w-full tablet:w-fit"
            >
              {btnText}
            </button>
          </a>
        </div>

        {/* Box */}
        <div
          className="absolute -right-128 top-1/2 grid size-166 -translate-y-1/2 select-none place-content-center rounded-full 
          pl-14 sm:-bottom-13 sm:-right-100 sm:top-auto sm:translate-y-0 md:-right-80 
         md:bottom-6 lg:-right-83 lg:top-1/2 lg:-translate-y-1/2 xl:-right-16.5"
        >
          <div className="hidden full:block mr-46 maxwidth:mr-0">
            <SvgLogo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolution;
