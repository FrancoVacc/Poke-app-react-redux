const useColor = (types) => {
  const colorTypes = (types) => {
    const name = types[0].type.name;

    if (name === "grass" || name === "bug")
      return "bg-gradient-to-b from-green-600 to-green-300";
    if (
      name === "poison" ||
      name === "ghost" ||
      name === "dark" ||
      name === "unknown" ||
      name === "shadow"
    )
      return "bg-gradient-to-b from-violet-600 to-violet-300";
    if (name === "ground" || name === "rock")
      return " bg-gradient-to-b from-orange-800 to-orange-400";
    if (name === "fire" || name === "fighting" || name === "dragon")
      return " bg-gradient-to-b from-red-600 to-red-300";
    if (name === "normal" || name === "flying" || name === "steel")
      return "bg-gradient-to-b from-slate-600 to-slate-300";
    if (name === "water" || name === "ice")
      return "bg-gradient-to-b from-sky-600 to-sky-300";
    if (name === "psychic" || name === "fairy")
      return "bg-gradient-to-b from-pink-600 to-pink-300";
    if (name === "electric")
      return "bg-gradient-to-b from-yellow-600 to-yellow-300";
  };

  const color = colorTypes(types);

  return color;
};

export default useColor;
