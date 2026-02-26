import { useState } from "react";
import { SingleOfferItem } from "./SingleOfferItem";
import { Building2, FileCheck, Lock } from "lucide-react";

const accordionItems = [
  {
    icon: FileCheck,
    title: "Custom Review Logic",
    subtitle: "Train the AI to match how your team reviews",
    content:
      "Your own QC model, trained on your past plans, markups, and reviews, so every project is checked the way your team checks it.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    subtitle: "Your model is built just for you",
    content:
      "All your data remains completely private and secure. Your plans, standards, and review data are encrypted and stored in isolated environments with full compliance certifications.",
  },
  {
    icon: Building2,
    title: "Company-Specific Criteria",
    subtitle: "Adapted to your client's standards",
    content:
      "Configured to match any client specs, whether it is municipal standards, DOT guidelines, or your internal QC.",
  },
];

const OfferAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className=" space-y-4">
      {accordionItems.map((item, index) => {
        const Icon = item.icon;
        const isOpen = openIndex === index;

        return (
          <SingleOfferItem
            key={index}
            setOpenIndex={setOpenIndex}
            index={index}
            isOpen={isOpen}
            Icon={Icon}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default OfferAccordion;
