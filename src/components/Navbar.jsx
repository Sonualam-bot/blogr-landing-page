import { useState } from "react";
import downArrowLight from "../images/icon-arrow-light.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import NavChild from "./NavChild";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showHam, setShowHam] = useState(false);
  return (
    <div className="w-full flex flex-col justify-around items-center h-[60%] absolute text-white mt-4  ">
      {/* first part starts here  */}
      <div className="w-full flex items-center md:justify-around sm:justify-between px-8 gap-[150px] font-bold  ">
        <div className="flex items-center justify-center gap-[70px] ">
          <div className=" text-5xl  ">
            <h1 className="mb-5  ">Blogr</h1>
          </div>
          <div className=" sm:hidden md:block">
            <div className="flex items-center justify-center gap-9 font-Overpass text-lg  ">
              <div className="flex flex-row gap-2 items-center justify-center cursor-pointer ">
                <p className="hover:border-b border-white">Product</p>
                <img
                  className="hover:rotate-180"
                  src={downArrowLight}
                  alt="/"
                />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center cursor-pointer ">
                <p className="hover:border-b border-white">Company</p>
                <img src={downArrowLight} alt="/" />
              </div>
              <div className="flex flex-row gap-2 items-center justify-center cursor-pointer ">
                <p
                  onClick={() => setShow(!show)}
                  className="hover:border-b border-white"
                >
                  Connect
                </p>
                <img src={downArrowLight} alt="/" />
              </div>
            </div>
          </div>

          <div className=" w-full  sm:block md:hidden ">
            {showHam && <HamburgerMenu show={show} setShow={setShow} />}
          </div>

          {show && <NavChild />}
        </div>

        <div className=" sm:hidden md:block">
          <div className="flex items-center justify-center gap-[30px] font-Ubuntu text-lg  cursor-pointer">
            <p>Login</p>
            <button className="text-[--very-light-red-bg] bg-white px-[40px] py-[11px] rounded-3xl font-Ubuntu text-xl hover:bg-[--very-light-red-bg] hover:text-white ">
              Sign up
            </button>
          </div>
        </div>
        <div className=" sm:block md:hidden">
          {!showHam ? (
            <img onClick={() => setShowHam(!showHam)} src={hamburger} alt="/" />
          ) : (
            <img onClick={() => setShowHam(!showHam)} src={close} alt="/" />
          )}
        </div>
      </div>
      {/* first part ends here  */}
      {/* the second part starts */}
      <div className="w-70% h-[40%] flex flex-col items-center justify-center pt-[115px] gap-[40px] ">
        <div className="flex flex-col items-center justify-center  gap-[20px] font-Overpass ">
          <div className="md:text-6xl sm:text-3xl sm:font-semibold  md:font-bold  ">
            <h1>A modern publishing platform</h1>
          </div>
          <div className="md:text-xl sm:text-lg font-medium">
            <p>Grow your audience and build your online brand</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 ">
          <button
            className="text-[--very-light-red-bg] bg-white px-[16px] py-[11px] 
          rounded-3xl font-bold  font-Ubuntu text-xl text-center hover:bg-[--very-light-red-bg] hover:text-white "
          >
            Start for Free
          </button>
          <button
            className="text-white  
            px-[20px] py-[11px] 
            
            border border-white
          rounded-[40px] font-bold text-center font-Ubuntu text-xl hover:bg-white hover:text-[--very-light-red-bg] "
          >
            Learn More
          </button>
        </div>
      </div>
      {/* the second part ends */}
    </div>
  );
}

export default Navbar;
