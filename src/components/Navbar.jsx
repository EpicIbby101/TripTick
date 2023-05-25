import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-b-xl">
      <div className="max-w-screen-2xl flex flex-wrap items-center px-4 py-2">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-4 hidden md:block"
          alt="Flowbite Logo"
        />
        <form className="w-4/5 md:w-1/3">
          <div className="relative flex items-center w-full md:w-auto h-12 rounded-full focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer flex-grow min-w-0 w-full md:w-auto h-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something..."
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex-grow"></div>
        <div className="" id="navbar-default">
          <ul className="font-medium flex flex-row p-4 mt-0 md:space-x-8 mr-2 md:mr-5">
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
