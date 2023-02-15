import { useSelector } from "react-redux";
import useLogo from "../hooks/useLogo";

const PokeType = () => {
  const pokemones = useSelector((store) => store.pokemones.unPokemon);
  const { types } = pokemones;

  const logo = types.map((type) => {
    const logo = useLogo(type.type.name);
    console.log(type.slot);
    return logo;
  });

  console.log(logo);

  return (
    <div>
      {types.length > 1 ? <p>TYPES: </p> : <p>TYPE: </p>}
      {types.map((type, index) => (
        <p key={type.slot} className="uppercase">
          {type.type.name}
          <span>{logo[index].logo}</span>
        </p>
      ))}
    </div>
  );
};

export default PokeType;
