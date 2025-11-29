import { ChevronDown } from "lucide-react";
import type { Dispatch, FC, SetStateAction } from "react";

interface Props {
  index: number;
  isOpen: boolean;
  Icon: any;
  title: string;
  subtitle: string;
  content: string;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
}

export const SingleOfferItem: FC<Props> = ({
  index,
  isOpen,
  Icon,
  title,
  subtitle,
  content,
  setOpenIndex,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-transparent transition-all">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex w-full items-center gap-4 p-4 tablet:p-6 text-left transition-colors bg-popover/60 
        hover:bg-container/70 cursor-pointer"
      >
        <div className="shrink-0 rounded-md tablet:rounded-lg bg-primary/10 p-2.5 tablet:p-3">
          <Icon className="h-5 tablet:h-6 w-5 tablet:w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className=" text-lg tablet:text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-xs tablet:text-sm text-subtitle">{subtitle}</p>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-subtitle transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-foreground/10 p-4 tablet:p-6 ">
          <p className="text-sm tablet:text-base leading-relaxed text-subtitle">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
