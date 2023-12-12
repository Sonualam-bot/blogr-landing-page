import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

function MidSection2() {
  return (
    <div className="w-full h-[400px]  flex flex-row items-end justify-between  bg-[--very-dark-gray-blue] rounded-tr-[90px] rounded-bl-[90px]  relative ">
      <div className=" w-[800px] h-[400px] overflow-hidden  ">
        <img
          className=" w-full  object-cover  scale-125 -ml-[107px] pb-[3000px]  "
          src={circles}
          alt="/"
        />
      </div>
      <div className="absolute -bottom-[110px] left-[100px] ">
        <img className="  " src={phones} alt="/" />
      </div>
      <div className=" flex flex-col justify-center absolute top-[30%] left-[48%] gap-9  ">
        <h1 className="text-5xl text-[--white] font-semibold  top-[20px] font-Overpass ">
          State of the Art Infrastructure
        </h1>
        <p className="w-[75%] text-[--white] leading-7  text-base font-Overpass ">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
}

export default MidSection2;
