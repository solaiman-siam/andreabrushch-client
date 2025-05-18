import { Link } from "react-router";
import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

function Navbar() {

    const [activeNav, setActiveNav] = useState(0)


  interface INavLink {
    label: string;
    to: string;
  }

  const navLinks: INavLink[] = [
    { label: "Home", to: "" },
    { label: "Explore Events", to: "" },
    { label: "About Us", to: "" },
    { label: "For Venues", to: "" },
    { label: "Contact Us", to: "" },
  ];

  const handleActiveNav = (index : number) => {
    setActiveNav(index)
  }

  return (
    <div className="py-4">
      
        <div className="flex max-w-[1720px] mx-auto items-center justify-between">
          <div>
            <h1 className=" text-3xl">Logo Here</h1>
          </div>
          <div className="flex items-center translate-x-16 gap-1">
            {navLinks.map((link , index) => (
              <Link key={index} to={link.to}>
                <h4 onClick={() => handleActiveNav(index)} className={`px-4 py-2 ${index === activeNav ? 'text-black' : 'text-black/60'}`}>{link.label}</h4>{" "}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link to={""}>
              <button className="px-12 cursor-pointer py-2.5 rounded-md border">
                Login
              </button>
            </Link>
            <Link to={""}>
               <ButtonPrimary innerText="SignUp" className="px-10 border-primary01 py-2.5 font-normal rounded-sm"/>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Navbar;
