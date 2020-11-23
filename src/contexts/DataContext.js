import React from "react";

export default React.createContext({
  images: {
    icons: {
      "accessory": "./images/icons/icon_accessory.png",
      "armor": "./images/icons/icon_armor.png",
      "craft_accessory": "./images/icons/icon_craft_accessory.png",
      "craft_armor": "./images/icons/icon_craft_armor.png",
      "craft_gem": "./images/icons/icon_craft_gem.png",
      "craft_resource": "./images/icons/icon_craft_resource.png",
      "craft_shield": "./images/icons/icon_craft_shield.png",
      "craft_weapon": "./images/icons/icon_craft_weapon.png",
      "shield": "./images/icons/icon_shield.png",
      "weapon": "./images/icons/icon_weapon.png"
    },
    pets: {
      "angel": "./images/pets/pet_angel_1.png",
      "cat": "./images/pets/pet_cat_1.png",
      "chameleon": "./images/pets/pet_chamelon_1.png",
      "fairy": "./images/pets/pet_fairy_1.png",
      "hedgehog": "./images/pets/pet_hedgehog_1.png",
      "mosquito": "./images/pets/pet_mosquito_1.png",
      "platypus": "./images/pets/pet_platypus_1.png",
      "pug": "./images/pets/pet_pug_1.png",
      "rock": "./images/pets/pet_rock_1.png",
      "whale": "./images/pets/pet_whale_1.png"
    },
    characters: {
      "carpenter": "./images/portraits/char_portrait_carpenter_1.png",
      "chef": "./images/portraits/char_portrait_chef_1.png",
      "dark_lord": "./images/portraits/char_portrait_dark_lord_1.png",
      "darkmage": "./images/portraits/char_portrait_darkmage_1.png",
      "dual_wield": "./images/portraits/char_portrait_dual_wield_1.png",
      "huntress": "./images/portraits/char_portrait_huntress_1.png",
      "miner": "./images/portraits/char_portrait_miner_1.png",
      "nurse": "./images/portraits/char_portrait_nurse_1.png",
      "psychic": "./images/portraits/char_portrait_psychic_1.png",
      "soda_junkie": "./images/portraits/char_portrait_soda_junkie_1.png",
      "thief": "./images/portraits/char_portrait_thief_1.png"
    },
    weapons: {
      "99": "./images/items/weapons/i99.png",
      "103": "./images/items/weapons/i103.png",
      "120": "./images/items/weapons/i120.png",
      "156": "./images/items/weapons/i156.png",
      "178": "./images/items/weapons/i178.png"
    },
    shields: {
      "167": "./images/items/shields/i167.png"
    },
    armors: {
      "143": "./images/items/armors/i143_male.png",
      "162": "./images/items/armors/i162_male.png"
    },
    accessories: {
      "100": "./images/items/accessories/i100.png",
      "127": "./images/items/accessories/i127.png",
      "129": "./images/items/accessories/i129.png",
      "130": "./images/items/accessories/i130.png"
    },
    resources: {

    },
    gems: {

    },
    upgrades: {
      "allsight": "./images/upgrades/thumbnail_allsight.png"
    },
    portraits: {
      "mystery": "./images/portraits/char_portrait_mystery_1.png"
    }
  },
  types: {
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
      "weapon_special_1": { types: ["weapon_special"], itemIds: ["99"], collection: "weapons" },
      "weapon_special_2": { types: ["weapon_special"], itemIds: ["178"], collection: "weapons" },
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
  },
  relics: {
    "hp": { internalId: "1", groupId: "1", type: "regular", stats: { "hp": 5 } },
    "atk": { internalId: "2", groupId: "1", type: "regular", stats: { "atk": 2 } },
    "mp": { internalId: "3", groupId: "1", type: "regular", stats: { "mp": 3 } },
    "gold_find": { internalId: "7", groupId: "1", type: "regular", stats: { "gold_find": 1 } },
    "crit_chance": { internalId: "8", groupId: "1", type: "maxable", maxLevel: 250, stats: { "crit_chance": 0.10 } },
    "crit_bonus": { internalId: "11", groupId: "1", type: "maxable", maxLevel: 250, stats: { "crit_bonus": 0.50 } },
    "essence_find": { internalId: "12", groupId: "1", type: "maxable", maxLevel: 100, stats: { "essence_find": 0.20 } },
    "hp_regen": { internalId: "13", groupId: "1", type: "maxable", maxLevel: 100, stats: { "hp_regen": 1 } },
    "phys_boost": { internalId: "14", groupId: "1", type: "regular", stats: { "phys_boost": 0.25 } },
    "magic_boost": { internalId: "15", groupId: "1", type: "regular", stats: { "magic_boost": 0.20 } },
    "chance_for_dungeon_keys": { internalId: "4", groupId: "2", type: "maxable", maxLevel: 300, stats: { "chance_for_dungeon_keys": 0.10 } },
    "mastery_xp_boost": { internalId: "5", groupId: "2", type: "maxable", maxLevel: 100, stats: { "mastery_xp_boost": 0.10 } },
    "ore_find": { internalId: "6", groupId: "2", type: "maxable", maxLevel: 100, stats: { "ore_find": 0.10 } },
    "status_resist": { internalId: "9", groupId: "2", type: "maxable", maxLevel: 50, stats: { "status_resist": 0.25 } },
    "dmg_reflection": { internalId: "10", groupId: "2", type: "maxable", maxLevel: 100, stats: { "dmg_reflection": 0.20 } },
    "soda_junkie": { internalId: "100", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "carpenter": { internalId: "101", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "miner": { internalId: "102", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "nurse": { internalId: "103", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "psychic": { internalId: "104", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "thief": { internalId: "105", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "huntress": { internalId: "106", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "darkmage": { internalId: "107", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "dual_wield": { internalId: "108", groupId: "3", type: "character", stats: { "hp": 2, "atk": 2 } },
    "dark_lord": { internalId: "109", groupId: "3", type: "character", stats: { "hp": 2, "mp": 2, "atk": 2 } },
    "chef": { internalId: "110", groupId: "3", type: "character", stats: { "hp": 2, "atk": 2 } }
  },
  pets: {
    "whale": { type: "pet", name: "Finn", stats: { "hp_boost": { value: 0.08, scope: "team" } } },
    "platypus": { type: "pet", name: "Patty", stats: { "status_resist": { value: 0.08, scope: "team" } } },
    "hedgehog": { type: "pet", name: "Spike", stats: { "dmg_reflection": { value: 0.08, scope: "team" } } },
    "pug": { type: "pet", name: "Bandit", stats: { "gold_find": { value: 0.16, scope: "team" } } },
    "rock": { type: "pet", name: "Cliff", stats: { "dmg_reduction": { value: 0.08, scope: "team" } } },
    "chameleon": { type: "pet", name: "Sly", stats: { "evade": { value: 0.08, scope: "team" } } },
    "mosquito": { type: "pet", name: "Culex", stats: { "phys_boost": { value: 0.08, scope: "team" } } },
    "cat": { type: "pet", name: "Neko", stats: { "item_find": { value: 8, scope: "team" } } },
    "fairy": { type: "pet", name: "Aurora", stats: { "essence_find": { value: 0.08, scope: "team" } } },
    "angel": { type: "pet", name: "Cassiel", stats: { "magic_boost": { value: 0.08, scope: "team" } } }
  },
  characters: {
    "soda_junkie": {
      type: "character",
      name: "Soda Junkie",
      stats: {
        "hp": 62,
        "hp_boost": 0.09,
        "atk": 19,
        "atk_boost": 0.09,
        "mp": 16,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "evade": 0.08,
        "dmg_reduction": 0.02,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1,
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"]
    },
    "carpenter": {
      type: "character",
      name: "Carpenter",
      stats: {
        "hp": 63,
        "hp_boost": 0.09,
        "atk": 23,
        "atk_boost": 0.12,
        "mp": 23,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "evade": 0.04,
        "dmg_reduction": 0.04,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"]
    },
    "miner": {
      type: "character",
      name: "Miner",
      stats: {
        "hp": 61,
        "hp_boost": 0.09,
        "atk": 20,
        "atk_boost": 0.09,
        "mp": 33,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "dmg_reduction": 0.02,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1,
        "ore_find": 27
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"]
    },
    "nurse": { 
      type: "character", 
      name: "Nurse", 
      stats: {
        "hp": 63,
        "hp_boost": 0.09,
        "atk": 19,
        "atk_boost": 0.09,
        "mp": 43,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "dmg_reduction": 0.02,
        "status_resist": 0.14,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      }, 
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"] 
    },
    "psychic": {
      type: "character",
      name: "Mystic",
      stats: {
        "hp": 65,
        "hp_boost": 0.09,
        "atk": 21,
        "atk_boost": 0.09,
        "mp": 41,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "magic_boost": 0.34,
        "phys_boost": 0.05,
        "dmg_reduction": 0.02,
        "status_resist": 0.02,
        "hp_regen": 6,
        "mp_regen": 9,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"]
    },
    "thief": {
      type: "character",
      name: "Thief",
      stats: {
        "hp": 67,
        "hp_boost": 0.09,
        "atk": 20,
        "atk_boost": 0.09,
        "mp": 18,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "evade": 0.06,
        "dmg_reduction": 0.02,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"]
    },
    "huntress": {
      type: "character",
      name: "Huntress",
      stats: {
        "hp": 67,
        "hp_boost": 0.09,
        "atk": 20,
        "atk_boost": 0.09,
        "mp": 18,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "dmg_reduction": 0.02,
        "dmg_reflection": 0.16,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"]
    },
    "darkmage": {
      type: "character",
      name: "Darkmage",
      stats: {
        "hp": 69,
        "hp_boost": 0.09,
        "atk": 21,
        "atk_boost": 0.09,
        "mp": 43,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "magic_boost": 0.25,
        "phys_boost": 0.05,
        "dmg_reduction": 0.07,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      },
      slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"]
    },
    "dual_wield": {
      type: "character",
      name: "Blademaster",
      stats: {
        "hp": 70,
        "hp_boost": 0.09,
        "atk": 36,
        "atk_boost": 0.09,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "dmg_reduction": 0.07,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      },
      slots: ["weapon_1", "weapon_2", "armor_1", "accessory_1"]
    },
    "dark_lord": {
      type: "character_special", 
      name: "Dark Lord", 
      stats: {
        "hp": 100,
        "hp_boost": 0.09,
        "atk": 38,
        "atk_boost": 0.09,
        "mp": 43,
        "crit_chance": 0.02,
        "crit_bonus": 0.07,
        "phys_boost": 0.05,
        "dmg_reduction": 0.07,
        "status_resist": 0.02,
        "hp_regen": 6,
        "essence_find": 0.03,
        "gold_find": 0.02,
        "item_find": 1
      }, 
      slots: ["weapon_special_1", "accessory_1", "accessory_2", "accessory_3"] 
    },
    "chef": { 
      type: "character_special", 
      name: "Chef", 
      stats: {
        "hp": 43,
        "hp_boost": 0.02,
        "atk": 14,
        "atk_boost": 0.02,
        "dmg_reduction": 0.05,
        "essence_find": 0.08,
        "gold_find": 0.20,
        "item_find": 10,
        "chance_for_dungeon_keys": 0.02,
        "ore_find": 4,
        "mastery_xp_boost": 0.07
      }, 
      slots: ["weapon_special_2", "armor_1", "accessory_1"] 
    }
  },
  upgrades: {
    "allsight": { name: "Allsight" }
  },
  weapons: {
    "99": { type: "weapon_special", name: "Aphotic Blade", stats: { "atk": 5, "crit_chance": 0.40, "crit_bonus": 0.50 } },
    "178": { type: "weapon_special", name: "Iron Skillet", stats: { "atk": 20 } },

    "103": { type: "weapon", name: "Saber", stats: { "atk": 26, "crit_chance": 0.39, "crit_bonus": 0.59, "evade": 0.29 }, slots: ["resource_ore_1"] },
    "120": { type: "weapon", name: "Skull Blade", stats: { "atk": 33, "crit_chance": 0.34, "crit_bonus": 0.84, "dmg_reduction": 0.19 }, slots: ["resource_ore_1"] },
    "156": { type: "weapon", name: "Grand Scepter", stats: { "atk": 68, "magic_boost": 0.48 }, slots: ["resource_ore_1", "gem_1"] },
  },
  shields: {
    "142": { type: "shield", name: "Power Shield", stats: { "hp": 62, "atk": 33 }, slots: ["resource_ore_1", "gem_1"] },
    "150": { type: "shield", name: "Stoplight Shield", stats: { "hp": 62, "hp_regen": 15 } , slots: ["resource_ore_1", "gem_1"] },
    "154": { type: "shield", name: "Cosmic Shield", stats: { "hp": 67, "magic_boost": 0.33, "essence_find": 0.03 }, slots: ["resource_ore_1", "gem_1"] },
    "167": { type: "shield", name: "Shield of the Divine", stats: { "hp": 57, "dmg_reduction": 0.19 }, slots: ["resource_ore_1"] },
  },
  armors: {
    "143": { type: "armor", name: "Karuta", stats: { "hp": 54, "evade": 0.34 }, slots: ["resource_ore_1"] },
    "162": { type: "armor", name: "Platinum Armor", stats: { "hp": 227, "hp_boost": 0.14, "dmg_reduction": 0.24 }, slots: ["resource_ore_1"] },
  },
  accessories: {
    "100": { type: "accessory", name: "Phantasmal Claw", stats: { } },
    "127": { type: "accessory", name: "Dark Amulet", stats: { "prevents_burn": true, "prevents_stone": true } },
    "129": { type: "accessory", name: "Silver Necklace", stats: { "dmg_reduction": 0.10, "item_find": 10 } },
    "130": { type: "accessory", name: "Back Protector", stats: { "hp_boost": 0.10, "prevents_back_atk_bonus": true } },
  },
  gems: {
    "153": { type: "gem", name: "Pearl Gem", stats: { "hp_boost": 0.10, "atk_boost": 0.10, "magic_boost": 0.05 } },
  },
  resources: {
    "15": { type: "resource_ore", name: "Copper Ore" },
    "16": { type: "resource_ore", name: "Silver Ore" },
    "17": { type: "resource_ore", name: "Gold Ore" },
    "18": { type: "resource_ore", name: "Platinum Ore" },
    "19": { type: "resource_ore", name: "Uranium Ore"}
  },
  player: {
    floor: 6000000,
    pets: {
      "rock": { level: 8, isFavorite: true }
    },
    characters: { 
      "nurse": { level: 50 }
    },
    items: {
      "103": { level: 10, isFavorite: true }
    },
    relics: {
      "hp": { level: 210000, isFavorite: true },
      "nurse": { level: 100000, isFavorite: true }
    },
    teams: {
      "default": {
        name: "Default",
        pets: {
          "pet_1": { itemId: "rock" }
        },
        characters: {
          "character_1": {
            itemId: "nurse",
            slots: {
              "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
              "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
              "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
              "accessory_1": { itemId: "130" }
            }
          },
          "character_2": {
            itemId: "thief",
            slots: {
              "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
              "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
              "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
              "accessory_1": { type: "accessory", itemId: "130" }
            }
          },
          "character_3": {
            itemId: "dual_wield",
            slots: {
              "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
              "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
              "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
              "accessory_1": { type: "accessory", itemId: "127" }
            }
          },
          "character_4": {
            itemId: "dual_wield",
            slots: {
              "weapon_1": { itemId: "103",  slots: { "resource_ore_1": { itemId: null } } },
              "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
              "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
              "accessory_1": { itemId: "127" }
            }
          },
          "character_5": {
            itemId: "dual_wield",
            slots: {
              "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
              "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
              "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
              "accessory_1": { itemId: "127" }
            }
          },
          "character_6": {
            itemId: "dark_lord",
            slots: {
              "weapon_special_1": { itemId: "99" },
              "accessory_1": { itemId: "100" },
              "accessory_2": { itemId: "129" },
              "accessory_3": { itemId: "130" }
            }
          }
        }
      }
    }
  }
});