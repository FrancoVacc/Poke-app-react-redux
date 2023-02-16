import { useSelector } from "react-redux";
import useColor from "../hooks/useColor";
import PokeType from "./PokeType";

const Detalle = () => {
  const pokemones = useSelector((store) => store.pokemones);
  const { name, weight, height, sprites, types, id } = pokemones.unPokemon;

  if (pokemones.unPokemon.length !== 0) {
    const color = useColor(types);
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
