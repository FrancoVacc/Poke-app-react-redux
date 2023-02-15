import React from "react";
import { useSelector } from "react-redux";
import PokeType from "./PokeType";

const Detalle = () => {
  const pokemones = useSelector((store) => store.pokemones);

  if (pokemones.unPokemon.length !== 0) {
    const { name, weight, height, sprites } = pokemones.unPokemon;

    return (
      <div className="w-sm  border bg-red-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" rounded-[50%] flex items-center justify-center bg-slate-300 bg-opacity-60">
          <img src={sprites} alt={name} />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Height: {height} | Weight: {weight}
          </p>
          <PokeType />
        </div>
      </div>
    );
  } else {
    return <h5>No Data</h5>;
  }
};
export default Detalle;
