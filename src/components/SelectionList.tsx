import clsx from "clsx";
import { useState } from "react";
import { topSelectionCategories } from "../properties/content";
import { topSelectIcons } from "../properties/icons";

export default function SelectionList() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col space-y-8">
      {topSelectionCategories.map((i, index) => (
        <div
          className={clsx(
            "flex items-center cursor-pointer",
            active === index && "top-selection-active"
          )}
          onClick={() => setActive(index)}
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
            {i}
          </div>
        </div>
      ))}
    </div>
  );
}
