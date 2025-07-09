import react from "react";
import heroImage from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
   return (
      <section
         className="h-screen relative bg-cover bg-center  text-white"
         style={{ backgroundImage: `url(${heroImage})` }}
      >
         <div className=" md:pt-36 pt-20 px-2 text-center space-y-6 md:w-1/2 mx-auto">
            <h1 className="text-4xl lg:text-5xl font-medium lg:leading-tight leading-snug">
               Make your interior more minimalistic & modern
            </h1>
            <p className="text-2xl lg:text-lg font-normal lg:w-1/2 mx-auto">
               Turn your room with panto into a lot more minimalist and modern
               with ease and speed
            </p>
            <div className="relative inline-block z-30">
               <input
                  type="text"
                  placeholder="Search Furniture"
                  className="w-full md:w-80 px-6 py-2 placeholder:text-white bg-white/20 rounded-full border border-green-300 focus:outline-none"
               />
               <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-orange-400 p-2 rounded-full cursor-pointer hover:bg-orange-500 transition duration-300">
                  <FaSearch />
               </div>
            </div>
         </div>
         <div className="absolute inset-x-0 bottom-0 h-3/4 -md-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>
      </section>
   );
};

export default Hero;
