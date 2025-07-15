import React from "react";
import Hero from "./Hero.jsx";
import WhyChoose from "./WhyChoose.jsx";
import Product from "../shop/Product.jsx";
import Experiences from "./Experiences.jsx";
import Materials from "./Materials.jsx";
import Testimonial from "./Testimonial.jsx";

const Home = () => {
   return (
      <>
         <div>
            <Hero />
            <WhyChoose />
            <Product headLine="Best Selling Product" />
            <Experiences />
            <Materials />
            <Testimonial />
         </div>
      </>
   );
};

export default Home;
