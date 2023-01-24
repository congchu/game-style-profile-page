import { newsList } from "../properties/content";

export default function News() {
  return (
    <div className="flex flex-col space-y-4 fadeInUp">
      {newsList.map(({ key, title, subTitle, tags }) => (
        <div className="sidebar-left  rounded-3xl shadow-xl p-4">
          <div className="flex space-x-3" key={key}>
            {/* <img
              src={`https://assets.codepen.io/3685267/${image}`}
              alt=""
              className="rounded-3xl"
            /> */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full tag-yellow-dot"></div>
                <div className="text-white">{title}</div>
              </div>
              <div className="mt-1 text-sm color-base-lite">{subTitle}</div>
              {/* <div className="flex space-x-2 mt-2">
                {tags.map(({ text, color }) => (
                  <div
                    className="text-xs text-white py-0.5 px-1.5 rounded-full"
                    style={{ background: color }}
                    key={text}
                  >
                    {text}
                  </div>
                ))}
              </div> */}

              {/* <div className="flex justify-end space-x-2 flex-grow items-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      ))}
      {/* <div className="flex space-x-1.5 items-center">
        <svg
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          className="w-1.5 h-1.5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          className="w-1.5 h-1.5"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div> */}
    </div>
  );
}
