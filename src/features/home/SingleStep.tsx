import type { FC } from "react";

interface Props {
  step: number;
  title: string;
  description: string;
  image: string;
}

const SingleStep: FC<Props> = ({ step, title, description, image }) => {
  return (
    <div className="flex justify-start pt-10 laptop:gap-10 laptop:pt-40">
      <div className="sticky top-40 z-40 flex max-w-xs flex-col self-start laptop:w-full full:max-w-sm">
        {/* Step */}
        <div
          className="absolute left-2 h-8 w-8 items-center justify-center rounded-full laptop:left-3 bg-black
         laptop:h-10 laptop:w-10 hidden laptop:flex"
        >
          <span
            className=" h-8 w-8 laptop:h-10 laptop:w-10 text-sm font-bold text-primary laptop:text-lg bg-primary/20
           flex items-center justify-center rounded-full"
          >
            {step}
          </span>
        </div>

        {/* Title and description - Laptop */}
        <div className="hidden laptop:block laptop:pl-20">
          <h3 className="mb-4 text-2xl font-bold text-primary full:text-3xl">
            {title}
          </h3>

          <p className="text-sm text-subtitle laptop:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Title and description - Mobile */}
      <div className="relative w-full flex flex-col gap-4 laptop:pl-4">
        <div className=" flex items-start gap-4 laptop:hidden">
          <div
            className=" min-h-8 min-w-8  text-sm font-bold text-primary bg-primary/20
           flex items-center justify-center rounded-full"
          >
            {step}
          </div>
          <div className=" flex flex-col items-start gap-2">
            <h3 className="block text-left text-xl font-bold text-primary">
              {title}
            </h3>

            <p className="block text-sm text-subtitle">{description}</p>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-lg border border-container bg-modal p-0 tablet:p-3 laptop:p-5">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStep;
