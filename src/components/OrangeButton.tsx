import type { ComponentProps } from "react";

interface OrangeButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
}

const OrangeButton = ({
  children,
  className = "",
  ...props
}: OrangeButtonProps) => {
  return (
    <button
      className={`bg-primary hover:bg-primary-hover text-foreground font-semibold px-4 tablet:px-6 py-2 tablet:py-2.5 
        rounded-lg transition-colors duration-200 cursor-pointer disabled:bg-subtitle disabled:opacity-60 
        disabled:cursor-not-allowed disabled:hover:bg-subtitle text-sm tablet:text-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default OrangeButton;
