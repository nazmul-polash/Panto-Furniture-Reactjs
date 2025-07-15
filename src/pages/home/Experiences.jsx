import react from "react";
import expImg from "../../assets/experience1.png";
import Button from "../../components/Button";

const Experiences = () => {
   return (
      <section className="container max-w-screen-2xl mx-auto my-20 px-4 flex flex-col md:flex-row justify-between items-center md:gap-20 gap-8">
         <div className="md:w-1/2 md:h-[500px]">
            <img src={expImg} alt="" className="h-full w-full"/>
         </div>
         <div className="md:w-1/2 mx-auto">
            <h3 className="uppercase text-lg text-orange-400 font-semibold mb-5">
               Experiences
            </h3>
            <h2 className="capitalize text-4xl font-bold mb-5 md:w-2/3">
               we provide you the best experience
            </h2>
            <p className="text-gray-700 mb-5 lg:w-2/3">
               You don’t have to worry about the result because all of these
               interiors are made by people who are professionals in their
               fields with an elegant and lucurious style and with premium
               quality materials
            </p>
            <Button text="More info" />
         </div>
      </section>
   );
};
export default Experiences;
