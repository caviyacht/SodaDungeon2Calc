export default {
  items: {
    "weapon": { name: "Weapon" },
    "weapon_special": { name: "Special Weapon" },
    "shield": { name: "Shield" },
    "armor": { name: "Armor" },
    "accessory": { name: "Accessory" },
    "gem": { name: "Gem" },
    "resource_ore": { name: "Ore" }
  },
  pets: {
    "pet": { name: "Pet" }
  },
  characters: {
    "character": { name: "Character" },
    "character_special": { name: "Special Character" }
  },
  slots: {
    "weapon_1": { types: ["weapon"], collection: "weapons" },
    "weapon_2": { types: ["weapon"], collection: "weapons" },
    "weapon_special_1": { types: ["weapon_special"], collection: "weapons" },
    "shield_1": { types: ["shield"], collection: "shields" },
    "armor_1": { types: ["armor"], collection: "armors" },
    "accessory_1": { types: ["accessory"], collection: "accessories" },
    "accessory_2": { types: ["accessory"], collection: "accessories" },
    "accessory_3": { types: ["accessory"], collection: "accessories" },
    "character_1": { types: ["character", "character_special"], collection: "characters" },
    "character_2": { types: ["character", "character_special"], collection: "characters" },
    "character_3": { types: ["character", "character_special"], collection: "characters" },
    "character_4": { types: ["character", "character_special"], collection: "characters" },
    "character_5": { types: ["character", "character_special"], collection: "characters" },
    "character_6": { types: ["character", "character_special"], collection: "characters" },
    "pet_1": { types: ["pet"], collection: "pets" },
    "resource_ore_1": { types: ["resource_ore"], collection: "resources" },
    "gem_1": { types: ["gem"], collection: "gems" }
  },
  stats: {
    "hp": { name: "HP", valueType: "number" },
    "hp_boost": { name: "HP Boost", valueType: "percent", affectsStatId: "hp" },
    "atk": { name: "ATK", valueType: "number" },
    "atk_boost": { name: "ATK Boost", valueType: "percent", affectsStatId: "atk" },
    "mp": { name: "MP", valueType: "number" },
    "mp_boost": { name: "MP Boost", valueType: "percent", affectsStatId: "mp" },
    "crit_chance": { name: "Crit Chance", valueType: "percent" },
    "crit_bonus": { name: "Crit Bonus", valueType: "percent" },
    "magic_boost": { name: "Magic Boost", valueType: "percent" },
    "phys_boost": { name: "Physical Boost", valueType: "percent" },
    "evade": { name: "Evade", valueType: "percent" },
    "dmg_reduction": { name: "DMG Reduction", valueType: "percent" },
    "dmg_reflection": { name: "DMG Reflection", valueType: "percent" },
    "status_resist": { name: "Status Resist", valueType: "percent" },
    "hp_regen": { name: "HP Regen", valueType: "number" },
    "mp_regen": { name: "MP Regen", valueType: "number" },
    "essence_find": { name: "Essence Find", valueType: "percent", scope: "team" },
    "gold_find": { name: "Gold Find", valueType: "percent", scope: "team" },
    "item_find": { name: "Item Find", valueType: "number", scope: "team" },
    "chance_for_dungeon_keys": { name: "Key Find", valueType: "percent", scope: "team" },
    "ore_find": { name: "Ore Find", valueType: "number", scope: "team" },
    "mastery_xp_boost": { name: "XP Boost", valueType: "percent", scope: "team" },
    "prevents_burn": { name: "Prevents Burn", valueType: "boolean" },
    "prevents_stone": { name: "Prevents Stone", valueType: "boolean" },
    "prevents_back_atk_bonus": { name: "Prevents Back Attack Bonus", valueType: "boolean" }
  },
  relics: {
    "regular": { name: "Regular" },
    "maxable": { name: "Maxable" },
    "character": { name: "Character" }
  }
};