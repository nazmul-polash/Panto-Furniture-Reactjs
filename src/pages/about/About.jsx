import React from "react";
import heroImage from "../../assets/banner.png";
const About = () => {
   return (
      <>
         <section className="min-h-screen bg-gray-100">
            <div
               className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
               style={{ backgroundImage: `url(${heroImage})` }}
            >
               <h1 className="text-4xl font-bold">About Us</h1>
            </div>
            <div className="container max-w-screen-2xl mx-auto py-6 px-4">
               <h2 className="text-4xl font-bold text-center my-8">About</h2>

               <div>
                  <p className="text-lg text-gray-700 mb-4">
                     Welcome to our furniture store! We are dedicated to
                     providing you with the best selection of high-quality
                     furniture for your home. Our mission is to help you create
                     a comfortable and stylish living space that reflects your
                     personal taste and lifestyle.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                     Our team of experts is passionate about furniture and
                     design, and we are here to assist you in finding the
                     perfect pieces for your home. Whether you're looking for
                     modern, traditional, or contemporary styles, we have
                     something for everyone.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                     Thank you for choosing us as your furniture provider. We
                     look forward to helping you transform your home into a
                     beautiful and functional space!
                  </p>
               </div>
            </div>
         </section>
      </>
   );
};
export default About;
