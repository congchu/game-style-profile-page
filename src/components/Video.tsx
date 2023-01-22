import { getStaticAsset } from "../utils/getStatic";

export default function Video() {
  return (
    <div className="relative">
      <div
        className="video-container"
        style={{ borderRadius: "32px", maxWidth: "640px", maxHeight: "320px" }}
      >
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          controls
          style={{
            margin: 0,
            padding: 0,
            borderRadius: "32px",
            maxWidth: "640px",
            maxHeight: "320px",
          }}
        >
          <source
            src={getStaticAsset("videos/vlog-movie.mp4")}
            type="video/mp4"
          />
          대체 텍스트
        </video>
      </div>

      {/* <img
        src="https://assets.codepen.io/3685267/react-streaming-dashboard-video.jpg"
        alt=""
      /> */}
      <div className="absolute  -left-4 -bottom-4">
        <div className="relative">
          <div className="ping-outer" />
          <div
            style={{
              backgroundImage: `url(
                ${getStaticAsset("images/profile-2.jpg")})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              width: "200px",
              height: "130px",
              borderRadius: "12px",
            }}
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
