import { createContext, useContext } from "react";
import accessories from "../data/accessories";
import armors from "../data/armors";
import characters from "../data/characters";
import gems from "../data/gems";
import images from "../data/images";
import pets from "../data/pets";
import relics from "../data/relics";
import resources from "../data/resources";
import shields from "../data/shields";
import types from "../data/types";
import upgrades from "../data/upgrades";
import weapons from "../data/weapons";

const DataContext = createContext({
  accessories,
  armors,
  characters,
  gems,
  images,
  pets,
  relics,
  resources,
  shields,
  types,
  upgrades,
  weapons
});

const useDataContext = () => {
  return useContext(DataContext);
}

export { useDataContext };