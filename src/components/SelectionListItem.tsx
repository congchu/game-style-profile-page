import { SelectionItemProps } from "../types/types";
import { getStaticAsset } from "../utils/getStatic";

export default function SelectionListItem({
  item: { title, subTitle, image, url, isSmallImage = false, tags },
}: {
  item: SelectionItemProps;
}) {
  const onClickSelection = (url?: string) => {
    if (!url) {
      return;
    }
    window.open(url);
  };
  return (
    <div className="fadeInUp cursor-pointer flex-1">
      <div onClick={() => onClickSelection(url)}>
        {image && (
          <div
            style={{
              width: "100%",
              height: `${isSmallImage ? "100px" : "150px"}`,
              backgroundImage: `url(${getStaticAsset(`images/${image}`)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-3xl"
          />
        )}
      </div>
      <div className="flex mt-3">
        {/* <div
          style={{
            backgroundImage: `url(${getStaticAsset(`images/${avatar}`)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-10 h-10  rounded-full"
        /> */}
        <div className="ml-2">
          <div className="text-white text-sm ">{title}</div>
          <div className="mt-1 text-sm whitespace-pre-wrap text-gray-400">
            {subTitle}
          </div>
          <div className="flex mt-2 gap-1 flex-wrap">
            {tags.map(({ text, color }) => (
              <div
                className="text-xs text-white py-0.5 px-1.5 rounded-full"
                style={{ background: color }}
                key={text}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
