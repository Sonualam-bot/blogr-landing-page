import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

function MidSection2() {
  return (
    <div className="w-full md:h-[400px] sm:mt-[250px] flex md:flex-row sm:flex-col items-end md:justify-between sm:justify-start   bg-[--very-dark-gray-blue] rounded-tr-[90px] rounded-bl-[90px]  relative ">
      <div className=" md:w-[800px] sm:w-[470px]  md:h-[400px] overflow-hidden  sm:mb-[190px] ">
        <img
          className=" w-full  object-cover  md:scale-125 sm:scale-170 sm:ml-[28px]  sm:pb-[390px] sm:w-[80%] md:-ml-[107px]  md:pt-2  md:pb-[3000px]  "
          src={circles}
          alt="/"
        />
      </div>
      <div className="absolute sm:-top-[170px] md:-bottom-[110px] md:left-[120px] sm:left-[90px] ">
        <img className="  " src={phones} alt="/" />
      </div>
      <div className=" flex flex-col justify-center absolute sm:mt-[0]  sm:m-[50px] sm:text-center sm:items-center top-[30%] md:left-[48%] gap-9 sm:z-10 ">
        <h1 className="text-5xl sm:text-4xl text-[--white] font-semibold  top-[20px] font-Overpass ">
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
