import React from "react";
import btnIcon from "../assets/button-icon.png";

const Button = ({text}) => {
   return (
      <button className="text-sm text-orange-400 flex item-center gap-2">
      {text}
         <img src={btnIcon} alt="btn-icon" />
      </button>
   );
};

export default Button;
