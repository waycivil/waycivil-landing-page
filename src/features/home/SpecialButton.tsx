import { BorderBeam } from "@/components/ui/border-beam";

const SpecialButton = () => {
  return (
    <a
      href="/contact"
      className="w-full tablet:w-fit relative overflow-hidden rounded-md"
    >
      <button
        className="text-foreground hover:border-primary px-6 h-10 text-sm font-medium rounded-md
            cursor-pointer border-border border transition-all hover:text-primary w-full tablet:w-fit"
      >
        Contact sales
      </button>
      <BorderBeam
        className=" rounded-md"
        duration={8}
        colorFrom="#F97316"
        colorTo="#F97316"
      />
    </a>
  );
};

export default SpecialButton;
