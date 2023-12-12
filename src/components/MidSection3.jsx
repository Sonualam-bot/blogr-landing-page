import laptop from "../images/illustration-laptop-desktop.svg";

function Midsection3() {
  return (
    <div className="flex  w-full items-center justify-start gap-[350px] mt-24  ">
      <div className="w-[50%] h-[1040px] pt-28    -ml-[360px] ">
        <img
          className="w-full object-cover scale-125 ml-[190px]  "
          src={laptop}
          alt="/"
        />
      </div>
      <div className="flex w-[40%] flex-col items-center justify-around gap-24 mb-44 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl text-[--very-dark-blue] font-semibold ">
            Free, open, simple
          </h2>
          <p className="text-[--very-dark-grayish-blue] leading-6 font-base ">
            Blogr is a free and and open source application backend by a large
            community of helpful developers. It suports features such as code
            syntax highlighting. RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl text-[--very-dark-blue] font-semibold ">
            Powerful tooling
          </h2>
          <p className="text-[--very-dark-grayish-blue] leading-6 font-base ">
            Batteries included. We built a simple and straigntforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Midsection3;
