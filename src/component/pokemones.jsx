import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  nextPokemonsAction,
  previousPokemonsAction,
  aPokeDetaillAction,
} from "../redux/pokeDuks";
import Detalle from "./Detalle";

const pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones);

  return (
    <div className="container m-3 d-flex">
      <div className=" w-50 mx-5">
        <h3>Lista de Pokemones</h3>
        <ul className="list-group my-3">
          {pokemones.results.map((pokemon) => (
            <li key={pokemon.name} className="list-group-item">
              <span className="text-uppercase">{pokemon.name}</span>
              <button
                className="btn btn-sm btn-dark float-end"
                onClick={() => dispatch(aPokeDetaillAction(pokemon.url))}
              >
                info
              </button>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between ">
          {pokemones.results.length === 0 && (
            <button
              className="btn btn-dark"
              onClick={() => dispatch(getPokemonsAction())}
            >
              Obtener Pokemones
            </button>
          )}
          {pokemones.next && (
            <button
              className="btn btn-dark"
              onClick={() => dispatch(nextPokemonsAction())}
            >
              Siguiente
            </button>
          )}
          {pokemones.previous && (
            <button
              className="btn btn-dark"
              onClick={() => dispatch(previousPokemonsAction())}
            >
              Anterior
            </button>
          )}
        </div>
      </div>
      <div className="w-50 mx-5">
        <h3>Detalle del Pokemon</h3>
        <Detalle />
      </div>
    </div>
  );
};

export default pokemones;
