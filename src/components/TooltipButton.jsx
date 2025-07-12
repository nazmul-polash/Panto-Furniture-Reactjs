import react from "react";

const TooltipButton = ({
   position = "bottom",
   colors = ["bg-red-700", "bg-green-700", "bg-blue-700"],
}) => {
   const postionClasses = {
      bottom: {
         tooltip: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
         arrow: "left-1/2 transform -translate-x-1/2 -bottom-2 ",
      },
   };
   // console.log(postionClasses[position]);
   
   return (
      <>
         <div className="relative group">
            <button className="relative md:p-3 bg-white/25 rounded-full border text-white text-xl">
               <div
                  className={`hidden absolute ${postionClasses[position].tooltip} p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex`}
               >
                  {
                     colors.map((color, index) => (
                        <div key={index} className={`size-6 ${color} border border-white rounded-full`}></div>
                     ))
                  }
                  {/* tool tip arror  */}
                  <div className={`absolute ${postionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35`}></div>
               </div>
            </button>
         </div>
      </>
   );
};

export default TooltipButton;
