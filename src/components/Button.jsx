import React from "react";
import btnIcon from "../assets/button-icon.png";

const Button = (props) => {
   return (
      <button className="text-sm text-orange-400 flex item-center gap-2">
      {props.text}
         <img src={btnIcon} alt="btn-icon" />
      </button>
   );
};

export default Button;
