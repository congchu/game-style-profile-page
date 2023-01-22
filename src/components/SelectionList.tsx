import clsx from "clsx";
import { useState } from "react";
import { topSelectionCategories } from "../properties/content";
import { topSelectIcons } from "../properties/icons";
import { CategoryType, CategoryValueType } from "../types/types";

interface SelectionListProps {
  setActiveSelectionValue: (category: CategoryValueType) => void;
}

export default function SelectionList({
  setActiveSelectionValue,
}: SelectionListProps) {
  const [active, setActive] = useState(1);
  const onClickSelection = (category: CategoryType) => {
    setActive(category.key);
    setActiveSelectionValue(category.value);
  };

  return (
    <div className="flex flex-col space-y-8">
      {topSelectionCategories.map((category, index) => (
        <div
          className={clsx(
            "flex items-center cursor-pointer",
            active === category.key && "top-selection-active"
          )}
          onClick={() => onClickSelection(category)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5"
            fill="currentColor"
          >
            {topSelectIcons[index]}
          </svg>
          <div className="font-medium uppercase text-sm ml-4 flex color-base">
            {category.label}
          </div>
        </div>
      ))}
    </div>
  );
}
