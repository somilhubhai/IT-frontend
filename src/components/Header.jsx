import { useState, useEffect } from "react";
import hamburger from "../assets/hamburger.webp";
import cross from "../assets/cross.png"
import { Link } from "react-router-dom";


const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="absolute w-full flex md:justify-between md:items-center md:p-4">
        <h2 className="text-white">Logo comes here</h2>
        {isMobile ? (
          <>
            <img
              src={hamburger}
              alt="hamburger"
              className="size-10 md:ml-48 ml-auto"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="bg-gradient-to-tl from-cyan-700 via-black to-blue-500 h-72 w-32 transition delay-150 pl-1">
                <img
                  src={cross}
                  alt="cross"
                  className="size-7"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                />
                <ul className="text-white font-bold text-md leading-10">
                  <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
                    <Link to="/services">IT-Services</Link>
                  </li>
                  <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="text-white flex gap-24 font-bold text-md">
            <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
              <Link to="/services">IT-Services</Link>
            </li>
            <li className="hover:text-orange-300 transition delay-100 hover:scale-110">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Header;
