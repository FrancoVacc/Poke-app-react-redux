import React from "react";
import { useSelector } from "react-redux";
import PokeType from "./PokeType";

const Detalle = () => {
  const pokemones = useSelector((store) => store.pokemones);

  if (pokemones.unPokemon.length !== 0) {
    const { name, weight, height, sprites } = pokemones.unPokemon;

    return (
      <div className="card w-30">
        <img src={sprites} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-uppercase">{name}</h5>
          <p className="card-text">
            Height: {height} | Weight: {weight}
          </p>
        </div>
        <PokeType />
      </div>
    );
  } else {
    return <h5>No Data</h5>;
  }
};
export default Detalle;
