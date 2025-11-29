import { useState } from "react";
import { SingleOfferItem } from "./SingleOfferItem";
import { Building2, FileCheck, Lock } from "lucide-react";

const accordionItems = [
  {
    icon: FileCheck,
    title: "Custom Review Logic",
    subtitle: "Train the AI to match how your team reviews",
    content:
      "We train specialized AI models based on your organization's specific quality control processes and review methodologies. Your model learns from your past reviews and adapts to your unique criteria, ensuring consistency across all projects while maintaining your team's established standards.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    subtitle: "Your model is built just for you",
    content:
      "All your data remains completely private and secure. We deploy dedicated models for your organization that never share information with other clients. Your plans, standards, and review data are encrypted and stored in isolated environments with full compliance certifications.",
  },
  {
    icon: Building2,
    title: "Company-Specific Criteria",
    subtitle: "Adapted to your client's standards",
    content:
      "Our system seamlessly integrates your client's specific requirements, municipal standards, DOT guidelines, and company protocols. Configure custom criteria for each project, ensuring every review meets the exact specifications required by your clients and stakeholders.",
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
