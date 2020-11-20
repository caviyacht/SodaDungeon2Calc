export default {
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
    items: {
      "99": "./images/items/weapons/i99.png",
      "103": "./images/items/weapons/i103.png",
      "120": "./images/items/weapons/i120.png",
      "156": "./images/items/weapons/i156.png",
      "178": "./images/items/weapons/i178.png",

      "167": "./images/items/shields/i167.png",

      "143": "./images/items/armors/i143_male.png",
      "162": "./images/items/armors/i162_male.png",

      "100": "./images/items/accessories/i100.png",
      "127": "./images/items/accessories/i127.png",
      "129": "./images/items/accessories/i129.png",
      "130": "./images/items/accessories/i130.png",

      "angel": "./images/pets/pet_angel_1.png",
      "cat": "./images/pets/pet_cat_1.png",
      "chameleon": "./images/pets/pet_chamelon_1.png",
      "fairy": "./images/pets/pet_fairy_1.png",
      "hedgehog": "./images/pets/pet_hedgehog_1.png",
      "mosquito": "./images/pets/pet_mosquito_1.png",
      "platypus": "./images/pets/pet_platypus_1.png",
      "pug": "./images/pets/pet_pug_1.png",
      "rock": "./images/pets/pet_rock_1.png",
      "whale": "./images/pets/pet_whale_1.png",

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
      "thief": "./images/portraits/char_portrait_thief_1.png",

      "allsight": "./images/upgrades/thumbnail_allsight.png"
    },
    portraits: {
      "mystery": "./images/portraits/char_portrait_mystery_1.png"
    }
  },
  itemTypes: {
    "weapon": { name: "Weapon" },
    "shield": { name: "Shield" },
    "armor": { name: "Armor" },
    "accessory": { name: "Accessory" },
    "gem": { name: "Gem" },
    "resource_ore": { name: "Ore" },
    "character": { name: "Character" },
    "character_special": { name: "Special Character" },
    "weapon_special": { name: "Special Weapon" },
    "upgrade": { name: "Upgrade" }
  },
  slotTypes: {
    "weapon_special_1": { itemType: "weapon_special" },
    "weapon_1": { itemType: "weapon" },
    "weapon_2": { itemType: "weapon" },
    "shield_1": { itemType: "shield" },
    "armor_1": { itemType: "armor" },
    "accessory_1": { itemType: "accessory" },
    "accessory_2": { itemType: "accessory" },
    "accessory_3": { itemType: "accessory" },
    "resource_ore_1": { itemType: "resource_ore" },
    "gem_1": { itemType: "gem" },
    "character_1": { itemType: ["character", "character_special"] },
    "character_2": { itemType: ["character", "character_special"] },
    "character_3": { itemType: ["character", "character_special"] },
    "character_4": { itemType: ["character", "character_special"] },
    "character_5": { itemType: ["character", "character_special"] },
    "character_6": { itemType: ["character", "character_special"] },
    "pet_1": { itemType: "pet" }
  },
  statTypes: {
    "hp": { name: "HP", valueType: "number" },
    "hp_boost": { name: "HP Boost", valueType: "percentage", isOptional: true },
    "atk": { name: "ATK", valueType: "number" },
    "atk_boost": { name: "ATK Boost", valueType: "percentage", isOptional: true },
    "mp": { name: "MP", valueType: "number", isOptional: true },
    "mp_boost": { name: "MP Boost", valueType: "percentage", isOptional: true },
    "crit_chance": { name: "Crit Chance", valueType: "percentage", isOptional: true },
    "crit_bonus": { name: "Crit Bonus", valueType: "percentage", isOptional: true },
    "magic_boost": { name: "Magic Boost", valueType: "percentage" },
    "phys_boost": { name: "Physical Boost", valueType: "percentage" },
    "evade": { name: "Evade", valueType: "percentage" },
    "dmg_reduction": { name: "DMG Reduction", valueType: "percentage" },
    "dmg_reflection": { name: "DMG Reflection", valueType: "percentage", isOptional: true },
    "status_resist": { name: "Status Resist", valueType: "percentage" },
    "hp_regen": { name: "HP Regen", valueType: "number", isOptional: true },
    "mp_regen": { name: "MP Regen", valueType: "number", isOptional: true },
    "essence_find": { name: "Essence Find", valueType: "percentage", isOptional: true },
    "gold_find": { name: "Gold Find", valueType: "percentage", isOptional: true },
    "item_find": { name: "Item Find", valueType: "number", isOptional: true },
    "keyFind": { name: "Key Find", valueType: "percentage", isOptional: true },
    "ore_find": { name: "Ore Find", valueType: "number", isOptional: true },
    "mastery_xp_boost": { name: "XP Boost", valueType: "percentage", isOptional: true },
    "prevents_burn": { name: "Prevents Burn", valueType: "boolean", isOptional: true },
    "prevents_stone": { name: "Prevents Stone", valueType: "boolean", isOptional: true },
    "prevents_back_atk_bonus": { name: "Prevents Back Attack Bonus", valueType: "boolean", isOptional: true }
  },
  items: {
    "allsight": { type: "upgrade", name: "Allsight", stats: { }, slots: [] },

    "whale": { type: "pet", name: "Finn", stats: { "hp_boost": 0.08 }, slots: [] },
    "platypus": { type: "pet", name: "Patty", stats: { "status_resist": 0.08 }, slots: [] },
    "hedgehog": { type: "pet", name: "Spike", stats: { "dmg_reflection": 0.08 }, slots: [] },
    "pug": { type: "pet", name: "Bandit", stats: { "gold_find": 0.16 }, slots: [] },
    "rock": { type: "pet", name: "Cliff", stats: { "dmg_reduction": 0.08 }, slots: [] },
    "chameleon": { type: "pet", name: "Sly", stats: { "evade": 0.08 }, slots: [] },
    "mosquito": { type: "pet", name: "Culex", stats: { "phys_boost": 0.08 }, slots: [] },
    "cat": { type: "pet", name: "Neko", stats: { "item_find": 8 }, slots: [] },
    "fairy": { type: "pet", name: "Aurora", stats: { "essence_find": 0.08 }, slots: [] },
    "angel": { type: "pet", name: "Cassiel", stats: { "magic_boost": 0.08 }, slots: [] },

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
      slots: [{ id: "weapon_special_1", itemId: "99" }, "accessory_1", "accessory_2", "accessory_3"]
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
        "keyFind": 0.02,
        "ore_find": 4,
        "mastery_xp_boost": 0.07
      },
      slots: [{ id: "weapon_special_1", itemId: "178" }, "armor_1", "accessory_1"]
    },

    "99": { type: "weapon_special", name: "Aphotic Blade", stats: { "atk": 5, "crit_chance": 0.40, "crit_bonus": 0.50 }, slots: [] },
    "178": { type: "weapon_special", name: "Iron Skillet", stats: { "atk": 20 }, slots: [] },

    "103": { type: "weapon", name: "Saber", stats: { "atk": 26, "crit_chance": 0.39, "crit_bonus": 0.59, "evade": 0.29 }, slots: ["resource_ore_1"] },
    "120": { type: "weapon", name: "Skull Blade", stats: { "atk": 33, "crit_chance": 0.34, "crit_bonus": 0.84, "dmg_reduction": 0.19 }, slots: ["resource_ore_1"] },
    "156": { type: "weapon", name: "Grand Scepter", stats: { "atk": 68, "magic_boost": 0.48 }, slots: ["resource_ore_1", "gem_1"] },
    
    "142": { type: "shield", name: "Power Shield", stats: { "hp": 62, "atk": 33 }, slots: ["resource_ore_1", "gem_1"] },
    "150": { type: "shield", name: "Stoplight Shield", stats: { "hp": 62, "hp_regen": 15 } , slots: ["resource_ore_1", "gem_1"] },
    "154": { type: "shield", name: "Cosmic Shield", stats: { "hp": 67, "magic_boost": 0.33, "essence_find": 0.03 }, slots: ["resource_ore_1", "gem_1"] },
    "167": { type: "shield", name: "Shield of the Divine", stats: { "hp": 57, "dmg_reduction": 0.19 }, slots: ["resource_ore_1"] },

    "143": { type: "armor", name: "Karuta", stats: { "hp": 54, "evade": 0.34 }, slots: ["resource_ore_1"] },
    "162": { type: "armor", name: "Platinum Armor", stats: { "hp": 227, "hp_boost": 0.14, "dmg_reduction": 0.24 }, slots: ["resource_ore_1"] },

    "100": { type: "accessory", name: "Phantasmal Claw", stats: { }, slots: [] },
    "127": { type: "accessory", name: "Dark Amulet", stats: { "prevents_burn": true, "prevents_stone": true }, slots: [] },
    "129": { type: "accessory", name: "Silver Necklace", stats: { "dmg_reduction": 0.10, "item_find": 10 }, slots: [] },
    "130": { type: "accessory", name: "Back Protector", stats: { "hp_boost": 0.10, "prevents_back_atk_bonus": true }, slots: [] },

    "153": { type: "gem", name: "Pearl Gem", stats: { "hp_boost": 0.10, "atk_boost": 0.10, "magic_boost": 0.05 }, slots: [] },

    "15": { type: "resource_ore", name: "Copper Ore", stats: { }, slots: [] },
    "16": { type: "resource_ore", name: "Silver Ore", stats: { }, slots: [] },
    "17": { type: "resource_ore", name: "Gold Ore", stats: { }, slots: [] },
    "18": { type: "resource_ore", name: "Platinum Ore", stats: { }, slots: [] },
    "19": { type: "resource_ore", name: "Uranium Ore", stats: { }, slots: [] }
  },
  teams: {
    "default": {
      name: "Default",
      slots: {
        "pet_1": { type: "pet", itemId: "rock", slots: [] },
        "character_1": {
          type: "character",
          itemId: "nurse",
          slots: {
            "weapon_1": {
              type: "weapon", 
              itemId: "120", 
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "shield_1": {
              type: "shield",
              itemId: "167",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "armor_1": {
              type: "armor",
              itemId: "162",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "accessory_1": { type: "accessory", itemId: "130", slots: { } }
          }
        },
        "character_2": {
          type: "character",
          itemId: "thief",
          slots: {
            "weapon_1": {
              type: "weapon", 
              itemId: "120", 
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "shield_1": {
              type: "shield",
              itemId: "167",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "armor_1": {
              type: "armor",
              itemId: "162",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "accessory_1": { type: "accessory", itemId: "130", slots: { } }
          }
        },
        "character_3": {
          type: "character",
          itemId: "dual_wield",
          slots: {
            "weapon_1": {
              type: "weapon", 
              itemId: "103", 
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "weapon_2": {
              type: "weapon",
              itemId: "103",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "armor_1": {
              type: "armor",
              itemId: "143",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "accessory_1": { type: "accessory", itemId: "127", slots: { } }
          }
        },
        "character_4": {
          type: "character",
          itemId: "dual_wield",
          slots: {
            "weapon_1": {
              type: "weapon", 
              itemId: "103", 
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "weapon_2": {
              type: "weapon",
              itemId: "103",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "armor_1": {
              type: "armor",
              itemId: "143",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "accessory_1": { type: "accessory", itemId: "127", slots: { } }
          }
        },
        "character_5": {
          type: "character",
          itemId: "dual_wield",
          slots: {
            "weapon_1": {
              type: "weapon", 
              itemId: "103", 
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "weapon_2": {
              type: "weapon",
              itemId: "103",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "armor_1": {
              type: "armor",
              itemId: "143",
              slots: {
                "resource_ore_1": { type: "resource_ore", itemId: null }
              }
            },
            "accessory_1": { type: "accessory", itemId: "127", slots: { } }
          }
        },
        "character_6": {
          type: "character_special",
          itemId: "dark_lord",
          slots: {
            "weapon_special_1": {
              type: "weapon_special", 
              itemId: "99", 
              slots: { }
            },
            "accessory_1": { type: "accessory", itemId: "100", slots: { } },
            "accessory_2": { type: "accessory", itemId: "129", slots: { } },
            "accessory_3": { type: "accessory", itemId: "130", slots: { } }
          }
        }
      }
    }
  }
};