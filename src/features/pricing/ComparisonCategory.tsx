import type { FC } from "react";
import type { ComparisonCategoryType } from "./types";
import { TableCell, TableRow } from "@/components/ui/table";
import { renderFeatureValue } from "./utils/renderFeatureValue";

export const ComparisonCategory: FC<ComparisonCategoryType> = ({
  category,
  features,
}) => {
  return (
    <>
      <TableRow className=" border-b border-modal text-sm hover:bg-transparent">
        {/* Section header */}
        <TableCell className=" py-4 px-6 font-semibold uppercase text-primary">
          {category}
        </TableCell>
      </TableRow>
      {features.map((item) => (
        <TableRow
          key={item.name}
          className="border-b border-modal hover:bg-white/5"
        >
          <TableCell className="py-4 px-6 text-subtitle">{item.name}</TableCell>
          <TableCell className="py-4 px-6 text-center">
            {renderFeatureValue(item.free)}
          </TableCell>
          <TableCell className="py-4 px-6 text-center">
            {renderFeatureValue(item.enterprise)}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
