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
    <div className="fadeInUp">
      <div className="">
        <img
          src={`https://assets.codepen.io/3685267/${image}`}
          alt=""
          className="rounded-3xl"
        />
      </div>
      <div className="flex mt-3">
        <img
          src={`https://assets.codepen.io/3685267/${avatar}`}
          alt=""
          className="w-10 h-10  rounded-full"
        />
        <div className="ml-2">
          <div className="text-white text-sm ">{title}</div>
          <div className="mt-1 text-sm">{subTitle}</div>
          <div className="flex space-x-2 mt-2">
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
