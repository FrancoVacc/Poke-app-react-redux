import { useSelector } from "react-redux";
import useLogo from "../hooks/useLogo";

const PokeType = () => {
  const pokemones = useSelector((store) => store.pokemones.unPokemon);
  const { types } = pokemones;

  const logo = types.map((type) => {
    const logo = useLogo(type.type.name);
    return logo;
  });
  return (
    <div className="flex flex-wrap justify-between items-center">
      {types.map((type, index) => (
        <div
          key={type.slot}
          className={`flex w-full py-2 px-4 items-center justify-center ${logo[index].logo.color} mx-1 rounded-sm my-1`}
        >
          <p className="uppercase text-white">{type.type.name}</p>
          <span className="ml-2 text-white">{logo[index].logo.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default PokeType;
