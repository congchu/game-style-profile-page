import { getStaticAsset } from "../utils/getStatic";

interface ItemProps {
  title: string;
  subTitle: string;
  image: string;
  avatar: string;
  tags: { text: string; color: string }[];
}
export default function SelectionListItem({
  item: { title, subTitle, image, avatar, tags },
}: {
  item: ItemProps;
}) {
  return (
    <div className="fadeInUp cursor-pointer">
      <div>
        <div
          style={{
            width: "216px",
            height: "150px",
            backgroundImage: `url(${getStaticAsset(`images/${image}`)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-3xl"
        />
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
          <div className="mt-1 text-sm text-gray-400">{subTitle}</div>
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
