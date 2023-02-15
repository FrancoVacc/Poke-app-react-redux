import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokeType from "./PokeType";

const Detalle = () => {
  const pokemones = useSelector((store) => store.pokemones);

  if (pokemones.unPokemon.length !== 0) {
    const { name, weight, height, sprites, types, id } = pokemones.unPokemon;
    const [color, setColor] = useState("");

    const colorTypes = (types) => {
      const name = types[0].type.name;

      if (name === "grass" || name === "bug")
        return setColor("bg-gradient-to-b from-green-600 to-green-300");
      if (
        name === "poison" ||
        name === "ghost" ||
        name === "dark" ||
        name === "unknown" ||
        name === "shadow"
      )
        return setColor("bg-gradient-to-b from-violet-600 to-violet-300");
      if (name === "ground" || name === "rock")
        return setColor(" bg-gradient-to-b from-orange-800 to-orange-400");
      if (name === "fire" || name === "fighting" || name === "dragon")
        return setColor(" bg-gradient-to-b from-red-600 to-red-300");
      if (name === "normal" || name === "flying" || name === "steel")
        return setColor("bg-gradient-to-b from-slate-600 to-slate-300");
      if (name === "water" || name === "ice")
        return setColor("bg-gradient-to-b from-sky-600 to-sky-300");
      if (name === "psychic" || name === "fairy")
        return setColor("bg-gradient-to-b from-pink-600 to-pink-300");
      if (name === "electric")
        return setColor("bg-gradient-to-b from-yellow-600 to-yellow-300");
    };

    useEffect(() => {
      colorTypes(types);
    });

    return (
      <div
        className={`w-sm sm:w-full sm:flex sm:justify-center border ${color} border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className=" p-4 sm:w-60 sm:h-60 flex justify-center">
          <div className=" flex items-center justify-center  bg-opacity-60 bg-slate-400 rounded-[50%] w-[100%] h-[100%]">
            <img src={sprites} alt={name} className="w-full" />
          </div>
        </div>
        <div className="p-5">
          <h5 className="mb-2 uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name} - #{id}
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
