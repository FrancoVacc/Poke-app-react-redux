import React from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { TbPokeball } from "react-icons/tb";

const Button = ({ btnClass, onClick, title }) => {
  return (
    <button onClick={onClick} className={btnClass} title={title}>
      {title === "Next" ? (
        <span className="text-3xl text-white">
          <BiSkipNext />
        </span>
      ) : title === "Previous" ? (
        <span className="  text-3xl text-white text-center">
          <BiSkipPrevious />
        </span>
      ) : (
        <TbPokeball />
      )}
    </button>
  );
};

export default Button;
