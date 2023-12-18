import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

function MidSection2() {
  return (
    <div className="w-full md:h-[400px] sm:mt-[250px] flex md:flex-row sm:flex-col items-end justify-between  bg-[--very-dark-gray-blue] rounded-tr-[90px] rounded-bl-[90px]  relative ">
      <div className=" w-[800px]  md:h-[400px] overflow-hidden  ">
        <img
          className=" w-full  object-cover  md:scale-125 sm:scale-90 sm:h-full sm:w-[80%] md:-ml-[107px] sm:ml-[250px] md:pt-2  md:pb-[3000px] sm:-pb-[200px]  "
          src={circles}
          alt="/"
        />
      </div>
      <div className="absolute sm:-top-[200px] md:-bottom-[110px] left-[120px] ">
        <img className="  " src={phones} alt="/" />
      </div>
      <div className=" flex flex-col justify-center absolute  sm:m-[50px] sm:text-center sm:items-center top-[30%] md:left-[48%] gap-9 sm:z-10 ">
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
