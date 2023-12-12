function NavChild() {
  return (
    <div className="w-[180px] p-6 flex flex-col items-start justify-around gap-5 bg-[--white]  absolute rounded-md top-[25%] left-[40%] ">
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
