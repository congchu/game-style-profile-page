import clsx from "clsx";
import { useState } from "react";
import SidebarIcons from "./SidebarIcons";

export default function SidebarLeft() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-28">
      <div className="sidebar-left rounded-3xl shadow-xl  overflow-hidden w-20 -ml-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            className={clsx(
              "h-20 w-20 flex items-center justify-center cursor-pointer",
              active === i && "sidebar-left-active text-white"
            )}
            onClick={() => {
              setActive(i);
            }}
          >
            <SidebarIcons index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
