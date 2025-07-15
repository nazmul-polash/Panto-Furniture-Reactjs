import react from "react";
import Button from "../../components/Button";
import materialImg1 from "../../assets/materials1.png"
import materialImg2 from "../../assets/materials2.png"
import materialImg3 from "../../assets/materials3.png"



const Materials = () => {
   return (
      <section className="container max-w-screen-2xl mx-auto my-20 px-4 flex flex-col md:flex-row justify-between items-center md:gap-20 gap-8">
         
         <div className="md:w-1/2 mx-auto">
            <h3 className="uppercase text-lg text-orange-400 font-semibold mb-5">Materials</h3>
            <h2 className="capitalize text-4xl font-bold mb-5 md:w-2/3">
               Very serious materials for making furniture
            </h2>
            <p className="text-gray-700 mb-5 lg:w-2/3">
               Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
            </p>
            <Button text="More info" />
         </div>
         <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
            <div className="p-0">
               <img src={materialImg1} alt="" />
               <img src={materialImg2} alt="" />
            </div>
            <div className="md:col-span-2 col-span-1">
               <img src={materialImg3} alt="" className="w-full h-[540px]"/>
            </div>
         </div>
      </section>
   )
}

export default Materials;