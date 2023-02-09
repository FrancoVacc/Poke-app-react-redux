import React from "react";
import { useSelector } from "react-redux";

const PokeType = () => {
  const pokemones = useSelector((store) => store.pokemones.unPokemon);
  const { types } = pokemones;

  return (
    <div className="container d-flex">
      {types.length > 1 ? <p>TYPES: </p> : <p>TYPE: </p>}
      {types.map((type) => (
        <p className="mx-2 text-uppercase" key={type.slot}>
          {type.type.name}
        </p>
      ))}
    </div>
  );
};

export default PokeType;
