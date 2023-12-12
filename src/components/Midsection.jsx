import editorPng from "../images/illustration-editor-desktop.svg";

function Midsection() {
  return (
    <div className="flex w-full items-center justify-end mt-11 relative ">
      <div className="flex w-[40%] flex-col items-center justify-around gap-16  ">
        <h1 className="absolute text-5xl top-28 left-[30%] font-semibold text-[--very-dark-blue] ">
          Designed for the future
        </h1>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl text-[--very-dark-blue] font-semibold ">
            Introducing an extensible editor
          </h2>
          <p className="text-[--very-dark-grayish-blue] leading-6 font-base ">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content The editor supports management
            of multiple blogs and allows easy manipulation of embeds such a
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl text-[--very-dark-blue] font-semibold ">
            Robust content management
          </h2>
          <p className="text-[--very-dark-grayish-blue] leading-6 font-base ">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customize
            categories, sections, format, or flow. With this functionality,
            you&apos;re in full control.
          </p>
        </div>
      </div>
      <div className="w-[50%] h-[1040px] pt-28   overflow-hidden ">
        <img
          className="w-full object-cover scale-125 ml-[190px]  "
          src={editorPng}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Midsection;
