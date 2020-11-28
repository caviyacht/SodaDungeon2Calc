export default {
  floor: 6000000,
  items: {
    "rock": { level: 8, isFavorite: true },
    "nurse": { level: 50 },
    "chef": { level: 1 },
    "103": { level: 10, isFavorite: true },
    "kitchen": { level: 10 }
  },
  relics: {
    "hp": { level: 210000, isFavorite: true },
    "hp_regen": { level: 1 },
    "nurse": { level: 100000, isFavorite: true }
  },
  teams: {
    "default": {
      name: "Default",
      members: {
        "pet_1": { itemId: "rock" },
        "character_1": {
          itemId: "nurse",
          equipmentSlots: {
            "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "130" }
          }
        },
        "character_2": {
          itemId: "thief",
          equipmentSlots: {
            "weapon_1": { itemId: "120", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "167", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "130" }
          }
        },
        "character_3": {
          itemId: "dual_wield",
          equipmentSlots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_4": {
          itemId: "dual_wield",
          equipmentSlots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_5": {
          itemId: "dual_wield",
          equipmentSlots: {
            "weapon_1": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "weapon_2": { itemId: "103", slots: { "resource_ore_1": { itemId: null } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "127" }
          }
        },
        "character_6": {
          itemId: "dark_lord",
          equipmentSlots: {
            "weapon_1": { itemId: "99" },
            "accessory_1": { itemId: "100" },
            "accessory_2": { itemId: "129" },
            "accessory_3": { itemId: "130" }
          }
        }
      }
    },
    "mining": {
      name: "Mining",
      members: {
        "pet_1": { itemId: "chameleon" },
        "character_1": {
          itemId: "miner",
          equipmentSlots: {
            "weapon_1": { itemId: "102", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "154", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "129" }
          }
        },
        "character_2": {
          itemId: "miner",
          equipmentSlots: {
            "weapon_1": { itemId: "140", slots: { "resource_ore_1": { itemId: null } } },
            "shield_1": { itemId: "154", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "129" }
          }
        },
        "character_3": {
          itemId: "miner",
          equipmentSlots: {
            "weapon_1": { itemId: "170", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "shield_1": { itemId: "154", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "129" }
          }
        },
        "character_4": {
          itemId: "miner",
          equipmentSlots: {
            "weapon_1": { itemId: "170", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "166" } } },
            "shield_1": { itemId: "154", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "98" }
          }
        },
        "character_5": {
          itemId: "miner",
          equipmentSlots: {
            "weapon_1": { itemId: "170", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "shield_1": { itemId: "154", slots: { "resource_ore_1": { itemId: null }, "gem_1": { itemId: "164" } } },
            "armor_1": { itemId: "143", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "100" }
          }
        },
        "character_6": {
          itemId: "chef",
          equipmentSlots: {
            "weapon_1": { itemId: "178" },
            "armor_1": { itemId: "162", slots: { "resource_ore_1": { itemId: null } } },
            "accessory_1": { itemId: "129" }
          }
        }
      }
    }
  }
};