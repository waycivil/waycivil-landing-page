import type { FC } from "react";

interface Props {
  isSelected: boolean;
  children: React.ReactNode;
  handleClick: () => void;
}

const PricingBtnOption: FC<Props> = ({ isSelected, children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`rounded-md px-6 py-2 text-sm font-medium transition-all hover:cursor-pointer ${
        isSelected
          ? "bg-primary text-foreground"
          : "text-subtitle hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
};

export default PricingBtnOption;
