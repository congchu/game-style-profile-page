import { topSelectionItemList } from "../contents/content";
import SelectionList from "./SelectionList";
import SelectionListItem from "./SelectionListItem";

export default function TopSelection() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-3xl">Your Top Selection</div>
        <div className="w-20 tag-red text-white flex rounded-full items-center justify-center py-0.5">
          <div className="w-2 h-2 rounded-full tag-red-dot" />
          <div className="ml-2 text-xs font-bold">Live</div>
        </div>
      </div>
      <div className="flex mt-8">
        <SelectionList />
        <div className="ml-24 space-x-8 flex">
          {topSelectionItemList.map((item) => (
            <SelectionListItem key={item.key} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
