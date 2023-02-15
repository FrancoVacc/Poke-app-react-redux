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
        return <GiPolarStar />;
      case "fighting":
        return <FaFistRaised />;
      case "flying":
        return <GiEgyptianBird />;
      case "poison":
        return <GiPoisonBottle />;
      case "ground":
        return <GiUndergroundCave />;
      case "rock":
        return <GiFallingRocks />;
      case "bug":
        return <GiSpottedBug />;
      case "ghost":
        return <GiGhost />;
      case "steel":
        return <GiSteelClaws />;
      case "fire":
        return <GiSmallFire />;
      case "water":
        return <GiWaterDrop />;
      case "grass":
        return <GiHighGrass />;
      case "electric":
        return <GiElectric />;
      case "psychic":
        return <GiPsychicWaves />;
      case "ice":
        return <GiIceBolt />;
      case "dragon":
        return <FaDragon />;
      case "dark":
        return <MdDarkMode />;
      case "fairy":
        return <GiFairyWand />;
      case "unknown":
        return <BsQuestionLg />;
      case "shadow":
        return <GiShadowGrasp />;
      default:
        break;
    }
  };

  const logo = typeLogo(name);

  return { name, logo };
};

export default useLogo;
