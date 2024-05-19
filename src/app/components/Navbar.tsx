import CustomIconLogo from "./icons/customlogo";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-8 w-f text-white">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.gambhirpoudel.com.np/" className="w-[50px] text-lightest-slate hover:text-green">
        <CustomIconLogo/>
        </a>
        
      </div>
      {/* ---------------- Menus -----------------*/}
      <div className="mx-10 flex gap-6 items-center justify-center">
        <a
          href="#about"
          className="relative font-sfMono text-lightest-slate text-greenn hover:text-green text-xs "
        >
          <span className="text-green ">01. </span>
          About
        </a>

        <a
          href="#experiences"
          className="relative font-sfMono text-lightest-slate text-greenn hover:text-green text-xs"
        >
          <span className="text-green">02. </span>
          Experience
        </a>

        <a
          href="#works"
          className="relative font-sfMono text-greenn text-lightest-slate hover:text-green text-xs"
        >
          <span className="text-green">03. </span>
          Work
        </a>

        <a
          href="#contacts"
          className="relative font-sfMono text-greenn text-lightest-slate hover:text-green text-xs"
        >
          <span className="text-green">04. </span>
          Contacts
        </a>
        <div className="ihALZY">
          <a
            href="/gambhir.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <div className="smallButton" style={{ transitionDelay: "100ms" }}>
              Resume
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
