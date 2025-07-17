import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <>
         <footer className="bg-[#F5F5F5]">
            <div className="container max-w-screen-2xl mx-auto py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 ">
               <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">
                     <Link to={"/"}>Panto</Link>
                  </h2>
                  <p className="md:mr-12">
                     The advantage of hiring a warkplace with us is that givees
                     you comportabloe survicess and all about facilities{" "}
                  </p>
               </div>

               <div>
                  <h3 className="text-xl font-semibold mb-4">Services</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           Email Marketing
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           Campains
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           Branding
                        </Link>
                     </li>
                  </ul>
					</div>
					
               <div>
                  <h3 className="text-xl font-semibold mb-4">Furniture</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           Beds
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           Chair
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           ALl
                        </Link>
                     </li>
                  </ul>
					</div>
					
               <div>
                  <h3 className="text-xl font-semibold mb-4">Fellow Us</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           <FaFacebook className="inline-block mr-2" />
                           Facebook
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           <FaTwitter className="inline-block mr-2" />
                           Twitter
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:text-orange-500 ">
                           <FaInstagram className="inline-block mr-2" />
                           Instagram
                        </Link>
                     </li>
                  </ul>
					</div>
					
            </div>
            <div className="container max-w-screen-2xl mx-auto py-6 px-4 mt-12 flex flex-col sm:flex-row sm:items-center sm:text-center gap-4 sm:justify-between text-left border-t border-gray-300 pt-4">
					<p>CopyRight &copy; {new Date().getFullYear()}</p>
					<div 
						className="flex flex-col sm:flex-row gap-8">
						<Link>Trams & Conditions</Link>
						<Link>Privacy Policy</Link>
					</div>
            </div>
         </footer>
      </>
   );
};
export default Footer;
