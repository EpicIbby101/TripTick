import { UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-b-xl">
      <div className="max-w-screen-2xl flex flex-wrap items-center px-5 py-2">
        <p className="text-xl underline">- Quik Currency Converter -</p>
        <div className="flex-grow"></div>
        <div className="" id="navbar-default">
          <ul className="font-medium flex flex-row p-4 mt-0 md:space-x-8 mr-0 md:mr-5">
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
