export default function Video() {
  return (
    <div className="relative">
      <img
        src="https://assets.codepen.io/3685267/react-streaming-dashboard-video.jpg"
        alt=""
        style={{ borderRadius: "32px" }}
      />
      <div className="absolute  -left-4 -bottom-4">
        <div className="relative">
          <div className="ping-outer" />
          <img
            src="https://assets.codepen.io/3685267/react-streaming-dashboard-player.jpg"
            alt=""
            className="player rounded-3xl"
          />
          <svg
            className="absolute inset-0"
            viewBox="0 0 276 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M249.5 18.9257L35.25 15.9257H249.5C255.299 15.9257 260 20.6267 260 26.4257V133.574L257 26.4257C257 22.2835 253.642 18.9257 249.5 18.9257Z"
              fill="#EA4D60"
            />
            <circle cx="255.75" cy="20.25" r="7.25" fill="white" />
            <circle cx="255.75" cy="20.25" r="4.25" fill="#EA4D5F" />
          </svg>
        </div>
      </div>
    </div>
  );
}
