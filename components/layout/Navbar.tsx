import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="px-4  xl:px-12  flex items-center  ">
      <div className=" flex items-center w-full  ">
        <i className="material-icons  text-gray-00 py-4 pr-4 text-2xl xl:hidden ">
          menu
        </i>
        <div className="    w-full py-4">
          <span
            className="absolute pl-2  material-icons-outlined text-purple-300"
            style={{ lineHeight: "3rem" }}
          >
            search{" "}
          </span>
          <input
            type="text"
            className="pl-10 w-full bg-white border-purple-200  border text-sm  ring-purple-200   py-2 my-1 ring-2  rounded-lg border-box px-4 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent "
            placeholder="Brskaj pesmi, izvajalce, zgodovina.."
          />
        </div>
        <div className="flex ">
          <i
            className="hidden sm:block mx-3 material-icons  align-middle text-gray-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            brightness_4
          </i>
          <i className="hidden sm:block material-icons align-middle text-gray-500">
            account_circle
          </i>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
