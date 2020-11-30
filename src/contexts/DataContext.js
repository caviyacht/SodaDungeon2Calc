import { createContext, useContext } from "react";
import accessories from "../data/accessories";
import armors from "../data/armors";
import characters from "../data/characters";
import gems from "../data/gems";
import images from "../data/images";
import pets from "../data/pets";
import relics from "../data/relics";
import resource_ores from "../data/resource_ores";
import shields from "../data/shields";
import slots from "../data/slots";
import skills from "../data/skills";
import stats from "../data/stats";
import upgrades from "../data/upgrades";
import weapons from "../data/weapons";

const DataContext = createContext({
  items: {
    ...accessories,
    ...armors,
    ...characters,
    ...gems,
    ...pets,
    ...resource_ores,
    ...shields,
    ...upgrades,
    ...weapons
  },
  images,
  relics,
  slots,
  stats,
  skills
});

const useDataContext = () => {
  return useContext(DataContext);
}

export { useDataContext };