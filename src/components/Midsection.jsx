import editorPng from "../images/illustration-editor-desktop.svg";
import editorMobilePng from "../images/illustration-editor-mobile.svg";

function Midsection() {
  return (
    <div className="flex sm:flex-col w-full items-center justify-end md:mt-11 sm:my-14  relative ">
      <div>
        <h1 className="md:absolute sm:text-3xl md:text-5xl sm:top-24 md:top-28 left-[30%] font-semibold text-[--very-dark-blue] ">
          Designed for the future
        </h1>
      </div>
      <div className="flex sm:flex-col-reverse items-center sm:justify-center md:justify-between sm:gap-[50px] sm:text-center ">
        <div className="flex md:w-[40%] sm:w-[80%] flex-col items-center md:justify-around sm:justify-center gap-16 md:pl-[100px] ">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-[--very-dark-blue] font-semibold ">
              Introducing an extensible editor
            </h2>
            <p className="text-[--very-dark-grayish-blue] leading-6 font-base ">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such a images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
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
        <div className="w-[50%] md:h-[1040px] pt-28 sm:pb-14  overflow-hidden ">
          <img
            className="w-full object-cover scale-125 ml-[190px] sm:ml-0 sm:hidden md:block "
            src={editorPng}
            alt="/"
          />
          <img
            className="w-full object-cover scale-125 ml-[190px] sm:ml-0 md:hidden sm:block "
            src={editorMobilePng}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Midsection;
