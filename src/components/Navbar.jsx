import React, { use } from "react";
import { useState, useEffect } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const navItems = [
   { path: "/furniture", label: "Furniture" },
   { path: "/shop", label: "Shop" },
   { path: "/about", label: "About us" },
   { path: "/contact", label: "Contact" },
];

const NavItems = ({handleMenuToggle}) => {
   return (
      <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
         {navItems.map((item, index) => (
            <li key={index} onClick={handleMenuToggle}>
               <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                     isActive
                        ? "text-orange-400 font-bold"
                        : " hover:text-orange-400"
                  }
               >
                  {item.label}
               </NavLink>
            </li>
         ))}
      </ul>
   );
};

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const handleMenuToggle = () => {
      setIsMenuOpen((prevState) => !prevState);
   };

   useEffect(() => {
      const handleEffect = () => {
         if (window.scrollY > 50) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      }
      window.addEventListener("scroll", handleEffect);
      return () => { 
         window.removeEventListener("scroll", handleEffect);
      }
   },[])

   return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out
      ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}>
         <nav className="container max-w-screen-2xl mx-auto flex justify-between align-center py-6 px-4">
            <div>
               <Link to="/">Panto</Link>
            </div>
            {/* hamburger menu */}
            <div
               onClick={handleMenuToggle}
               className="md:hidden cursor-pointer text-xl hover:text-orange-400"
            >
               {isMenuOpen ? <IoMdClose /> : <FaBars className="rotate-0" />}
            </div>
            {/* mobile menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-black backdrop-opacity-80 flex flex-col items-center
                justify-center space-y-8 text-white transition-transform transform 
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
               <div className="absolute top-5 right-5 text-xl cursor-pointer" onClick={handleMenuToggle}>
                  <IoMdClose />
               </div>
               <NavItems handleMenuToggle={handleMenuToggle} />
            </div>

            <div className="hidden md:flex">
               <NavItems />
            </div>

            <div className="hidden md:block cursor-pointer relative">
               <FaBagShopping className="text-xl" />
               <sup className="absolute top-0 -right-3 bg-amber-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                  0
               </sup>
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
