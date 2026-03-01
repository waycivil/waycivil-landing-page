import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { comparisonFeatures } from "../utils/constants";
import { ComparisonCategory } from "./ComparisonCategory";
import ComparisonCategoryMobile from "./ComparisonCategoryMobile";

const PlansComparisons = () => {
  const [selectedComparisonPlan, setSelectedComparisonPlan] = useState<
    "free" | "pro" | "enterprise"
  >("free");

  return (
    <div className=" flex-col justify-center flex items-center gap-6 laptop:gap-12 pt-24 w-full px-6 maxwidth:px-0">
      <h2 className="laptop:mb-12 text-center text-3xl font-bold text-foreground tablet:text-4xl">
        Compare Plans
      </h2>

      {/* Comparisons table - Laptop */}
      <Table className=" w-full border-collapse text-base hidden laptop:table">
        {/* Header */}
        <TableHeader>
          <TableRow className=" hover:bg-transparent border-b border-container">
            <TableHead className=" py-4 px-6 w-3/5">Features</TableHead>
            <TableHead className=" py-4 px-6 text-center">Free</TableHead>
            <TableHead className=" py-4 px-6 text-center">Pro</TableHead>
            <TableHead className=" py-4 px-6 text-center">Enterprise</TableHead>
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {comparisonFeatures.map((item) => (
            <ComparisonCategory key={item.category} {...item} />
          ))}
        </TableBody>
      </Table>

      {/* Comparisons table - Mobile */}
      <div className="flex flex-col items-center w-full gap-6 laptop:hidden">
        {/* Plan picker */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setSelectedComparisonPlan("free")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer border ${
              selectedComparisonPlan === "free"
                ? "border-primary bg-primary text-foreground hover:bg-primary-hover"
                : "border-container bg-background/50 text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            Free
          </button>
          <button
            onClick={() => setSelectedComparisonPlan("pro")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer border ${
              selectedComparisonPlan === "pro"
                ? "border-primary bg-primary text-foreground hover:bg-primary-hover"
                : "border-container bg-background/50 text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            Pro
          </button>
          <button
            onClick={() => setSelectedComparisonPlan("enterprise")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer border ${
              selectedComparisonPlan === "enterprise"
                ? "border-primary bg-primary text-foreground hover:bg-primary-hover"
                : "border-container bg-background/50 text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            Enterprise
          </button>
        </div>

        {/* Comparison */}
        <div className="space-y-6 w-full">
          {comparisonFeatures.map((item) => (
            <ComparisonCategoryMobile
              key={item.category}
              {...item}
              selectedComparisonPlan={selectedComparisonPlan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansComparisons;
