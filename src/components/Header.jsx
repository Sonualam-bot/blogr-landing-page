import desktopIntro from "../images/bg-pattern-intro-desktop.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex flex-col w-full md:h-[87vh] sm:h-[87vh] relative ">
      <div className="w-full h-full rounded-bl-[90px] overflow-hidden bg-gradient-to-r from-[--very-light-red] to-[--light-red]  ">
        <img
          src={desktopIntro}
          alt="/intro"
          className="w-full h-full sm:scale-280  md:scale-280 object-cover sm:pl-[10px] md:pl-[330px] md:pb-[40px]   "
        />
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
