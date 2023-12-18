import { useState } from "react";
import arrowDown from "../images/icon-arrow-dark.svg";
import NavChild from "./NavChild";

function HamburgerMenu() {
  const [secShow, setSecShow] = useState(false);
  return (
    <div className=" w-[80%]  bg-[--white]  text-[--very-dark-gray-blue]  absolute top-[120px]  left-8 rounded-lg p-6 flex flex-col items-center justify-start gap-10 text-center shadow-xl ">
      <div className="flex items-center justify-center gap-4">
        <p>Product</p>
        <img src={arrowDown} alt="/" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <p>Company</p>
        <img src={arrowDown} alt="/" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <p onClick={() => setSecShow(!secShow)}>Connect</p>
        <img src={arrowDown} alt="/" />
      </div>
      <div>
        {secShow && <NavChild />}
        <div className="w-full my-2 h-[0.5px] bg-[--grayish-blue] "></div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 ">
        <button
          className=" 
            px-[20px] py-[11px] 
            
            border border-white
          rounded-[40px] font-bold text-center font-Ubuntu text-xl text-[--very-dark-grayish-blue] "
        >
          Login
        </button>
        <button
          className="bg-[--very-light-red-bg] text-white px-[16px] py-[11px] 
          rounded-3xl font-bold  font-Ubuntu text-xl text-center hover:bg-[--very-light-red-bg] hover:text-white "
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default HamburgerMenu;
