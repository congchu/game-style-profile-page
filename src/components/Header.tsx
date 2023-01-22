export default function Header() {
  return (
    <div className="h-24 flex items-center justify-between pr-8">
      <div className="pl-4 py-5 h-full flex">
        <img
          src="https://assets.codepen.io/3685267/react-streaming-dashboard-logo.jpg"
          alt="logo"
        />
      </div>
      <div className="relative mini-icon">
        <form action="#">
          <input
            type="email"
            placeholder="Search"
            className="w-72 input-search text-4xl  font-black"
          />
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-6 h-6 absolute right-0 top-2/4 input-search-icon"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="mini-icon inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="w-6 h-6 ml-6"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H11C11.5304 3 12.0391 3.21071 12.4142 3.58579C12.7893 3.96086 13 4.46957 13 5V9C13 9.53043 12.7893 10.0391 12.4142 10.4142C12.0391 10.7893 11.5304 11 11 11H9L6 14V11H4C3.46957 11 2.96086 10.7893 2.58579 10.4142C2.21071 10.0391 2 9.53043 2 9V5Z" />
          <path d="M15 7V9C15 10.0609 14.5786 11.0783 13.8284 11.8284C13.0783 12.5786 12.0609 13 11 13H9.828L8.062 14.767C8.342 14.916 8.661 15 9 15H11L14 18V15H16C16.5304 15 17.0391 14.7893 17.4142 14.4142C17.7893 14.0391 18 13.5304 18 13V9C18 8.46957 17.7893 7.96086 17.4142 7.58579C17.0391 7.21071 16.5304 7 16 7H15Z" />
          <circle cx="16.4375" cy="3.375" r="2.5625" fill="#5189f6" />
        </svg>
      </div>
    </div>
  );
}
