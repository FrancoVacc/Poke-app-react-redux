import React from "react";
import {
  GiEgyptianBird,
  GiElectric,
  GiFairyWand,
  GiFallingRocks,
  GiGhost,
  GiHighGrass,
  GiIceBolt,
  GiPoisonBottle,
  GiPolarStar,
  GiPsychicWaves,
  GiShadowGrasp,
  GiSmallFire,
  GiSpottedBug,
  GiSteelClaws,
  GiUndergroundCave,
  GiWaterDrop,
} from "react-icons/gi";
import { FaDragon, FaFistRaised } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";

const useLogo = (name) => {
  const typeLogo = (name) => {
    switch (name) {
      case "normal":
        return { color: "bg-neutral-400", icon: <GiPolarStar /> };
      case "fighting":
        return { color: " bg-orange-400", icon: <FaFistRaised /> };
      case "flying":
        return { color: " bg-gray-500", icon: <GiEgyptianBird /> };
      case "poison":
        return { color: " bg-purple-800", icon: <GiPoisonBottle /> };

      case "ground":
        return { color: " bg-orange-900", icon: <GiUndergroundCave /> };
      case "rock":
        return { color: " bg-orange-700", icon: <GiFallingRocks /> };

      case "bug":
        return { color: " bg-lime-400", icon: <GiSpottedBug /> };
      case "ghost":
        return { color: " bg-indigo-800", icon: <GiGhost /> };
      case "steel":
        return { color: " bg-gray-700", icon: <GiSteelClaws /> };
      case "fire":
        return { color: " bg-red-800", icon: <GiSmallFire /> };
      case "water":
        return { color: " bg-blue-800", icon: <GiWaterDrop /> };
      case "grass":
        return { color: " bg-green-800", icon: <GiHighGrass /> };
      case "electric":
        return { color: " bg-yellow-500", icon: <GiElectric /> };
      case "psychic":
        return { color: " bg-fuchsia-800", icon: <GiPsychicWaves /> };
      case "ice":
        return { color: " bg-cyan-400", icon: <GiIceBolt /> };
      case "dragon":
        return {
          color: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
          icon: <FaDragon />,
        };
      case "dark":
        return {
          color: "bg-gradient-to-r from-pink-900 to-slate-800",
          icon: <MdDarkMode />,
        };
      case "fairy":
        return { color: " bg-pink-700", icon: <GiFairyWand /> };
      case "unknown":
        return {
          color: "bg-gradient-to-r from-slate-300 to-gray-500",
          icon: <BsQuestionLg />,
        };
      case "shadow":
        return {
          color: "bg-gradient-to-r from-slate-700 to-gray-900",
          icon: <GiShadowGrasp />,
        };
      default:
        break;
    }
  };

  const logo = typeLogo(name);

  return { name, logo };
};

export default useLogo;
