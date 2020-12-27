import accessories from "./entities/accessories";
import armors from "./entities/armors";
import characters from "./entities/characters";
import gems from "./entities/gems";
import pets from "./entities/pets";
import relics from "./entities/relics";
import resource_bars from "./entities/resource_bars";
import resource_ores from "./entities/resource_ores";
import shields from "./entities/shields";
import skills from "./entities/skills";
import slots from "./entities/slots";
import stats from "./entities/stats";
import upgrades from "./entities/upgrades";
import weapons from "./entities/weapons";

import imagesData from "./images";

export const entities = {
  ...accessories,
  ...armors,
  ...characters,
  ...gems,
  ...pets,
  ...relics,
  ...resource_bars,
  ...resource_ores,
  ...shields,
  ...skills,
  ...slots,
  ...stats,
  ...upgrades,
  ...weapons
};

export const images = {
  ...imagesData
};