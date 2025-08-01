import React from "react";
import Button from "../../components/Button";

const WhyChoose = () => {
   return (
      <>
         <section className="container max-w-screen-2xl mx-auto py-6 px-4">
            <div className="my-24 grid grid-cols-1 sm:grid-col-2 lg:grid-cols-4 gap-8 items-center md:gap-12 text-left">
               <div>
                  <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
               </div>
               <div>
                  <h3 className="text-2xl font-semibold mb-3">
                     Luxry factories
                  </h3>
                  <p className="margin-base mb-2">
                     The advantage of hiring a workspace with us is that givees
                     you comfortable service and all-around facilities.
                  </p>
                  <Button text="Learn More" />
               </div>
               <div>
                  <h3 className="text-2xl font-semibold mb-3">
                     Affordable Price
                  </h3>
                  <p className="margin-base mb-2">
                     You can get a workspace of the highst quality at an
                     affordable price and still enjoy the facilities that are
                     oly here.
                  </p>
                  <Button text="Learn More" />
               </div>
               <div>
                  <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
                  <p className="margin-base mb-2">
                     We provide many unique work space choices so that you can
                     choose the workspace to your liking.
                  </p>
                  <Button text="Learn More" />
               </div>
            </div>
            
         </section>
      </>
   );
};
export default WhyChoose;
