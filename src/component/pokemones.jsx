import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  nextPokemonsAction,
  previousPokemonsAction,
  aPokeDetaillAction,
} from "../redux/pokeDuks";
import Button from "./Button";
import Detalle from "./Detalle";

const pokemones = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((store) => store.pokemones);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    return () => {
      dispatch(getPokemonsAction());
    };
  }, []);

  const handleDetail = (url) => {
    dispatch(aPokeDetaillAction(url));
    setDetail(true);
  };

  return (
    <div className="sm:flex sm:justify-around px-4">
      <div className=" w-72 m-auto sm:mx-0 sm:my-2 py-2 px-5 bg-slate-200 border border-solid border-slate-400 rounded-md ">
        <h3 className="text-center font-bold text-xl text-gray-800">
          Pokemons
        </h3>
        <ul>
          {pokemones.results.map((pokemon) => (
            <li
              key={pokemon.name}
              className="my-2 flex justify-between items-center pb-1 border-b-[1px] border-solid border-gray-400 "
            >
              <span className="uppercase">{pokemon.name}</span>
              <Button
                btnClass={
                  "text-sm text-white bg-red-600 px-4 py-2 rounded-sm hover:bg-red-500"
                }
                onClick={() => handleDetail(pokemon.url)}
                title={"Info"}
              />
            </li>
          ))}
        </ul>
        <div className="flex">
          {pokemones.previous && (
            <Button
              btnClass={
                "flex justify-center w-full bg-green-800 py-2 hover:bg-green-500"
              }
              onClick={() => dispatch(previousPokemonsAction())}
              title={"Previous"}
            />
          )}
          {pokemones.next && (
            <Button
              btnClass={
                "flex justify-center w-full bg-green-800 py-2 hover:bg-green-500"
              }
              onClick={() => dispatch(nextPokemonsAction())}
              title={"Next"}
            />
          )}
        </div>
      </div>
      {detail && (
        <div>
          <h3>Detalle del Pokemon</h3>
          <Detalle />
        </div>
      )}
    </div>
  );
};

export default pokemones;
