import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Menu = ["Home", "About", "Services", "Pricing", "About"];
const Nav = ({onClickShoppingBtn}) => {
  const [isMobileToggle, setIsMobileToggle] = useState(false);
  return (
    <nav className="relative z-20 flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      <button
        onClick={() => setIsMobileToggle(!isMobileToggle)}
        className="focus:ring-2 focus:ring-gray-200 rounded-lg p-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div className={`${isMobileToggle === false && "hidden"} w-full lg:block lg:w-auto absolute lg:relative top-20 lg:top-0`}>
        <ul className="rounded-lg border border-gray-100 text-lg bg-gray-50 p-4 flex flex-col lg:flex-row lg:space-x-8 lg:bg-transparent lg:border-none">
          {Menu.map((route, i) => {
            return (
              <li
                className={`cursor-pointer px-3 py-2 rounded 
                    ${i === 0 ? 
                        "bg-blue-500 text-white lg:text-blue-500 lg:bg-transparent" 
                        : 
                        "hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-500"}
                         ${(i === 3 || i === 4) && "lg:text-white" }    
                    `}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div onClick={onClickShoppingBtn}  className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8">
        <div className="cursor-pointer flex-center h-12 w-12 border rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
