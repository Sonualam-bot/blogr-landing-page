function NavChild() {
  return (
    <div className="md:w-[180px] sm:w-[70vw] sm:bg-[--grayish-blue] p-6 flex flex-col md:items-start sm:items-center justify-around gap-5 bg-[--white]  md:absolute rounded-md top-[35%] md:left-[40%] sm:left-[0%] ">
      <div className="text-[--very-dark-grayish-blue] hover:text-[--very-dark-gray-blue]">
        <p>Contact</p>
      </div>
      <div className="text-[--very-dark-grayish-blue] hover:text-[--very-dark-gray-blue]">
        <p>Newsletter</p>
      </div>
      <div className="text-[--very-dark-grayish-blue] hover:text-[--very-dark-gray-blue]">
        <p>Linkedln</p>
      </div>
    </div>
  );
}

export default NavChild;
