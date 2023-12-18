function Footer() {
  return (
    <div className="flex md:flex-row sm:flex-col justify-evenly md:items-start sm:items-center sm:py-[70px] text-[--white] bg-[--very-dark-black-blue] w-full md:h-[550px] p-[50px]  font-Overpass rounded-tr-[100px] sm:gap-[50px] ">
      <div>
        <h1 className="text-5xl font-bold ">Blogr</h1>
      </div>
      <div className="flex flex-col gap-7">
        <p className="font-bold text-lg">Product</p>
        <div className="flex flex-col gap-2 text-[--grayish-blue] ">
          <p>Overview</p>
          <p>Pricing</p>
          <p>Marketplace</p>
          <p>Features</p>
          <p>Integrations</p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <p className="font-bold text-lg">Company</p>
        <div className="flex flex-col gap-2 text-[--grayish-blue]">
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <p className="font-bold text-lg">Connect</p>
        <div className="flex flex-col gap-2 text-[--grayish-blue]">
          <p>Contact</p>
          <p>Newsletter</p>
          <p>Linkedln</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
