export default {
  floor: 6438221,
  entities: {
    "pet-rock": { level: 8 },
    "character-darkmage": { level: 50 },
    "character-miner": { level: 50 },
    "character-thief": { level: 50 },
    "character-dark_lord": { level: 50 },
    "character-carpenter": { level: 50 },
    "character-nurse": { level: 50 },
    "character-dual_wield": { level: 50 },
    "upgrade-kitchen": { level: 10 },
    "relic-hp": { level: 270700, isFavorite: true },
    "relic-gold_find": { level: 660900, isFavorite: true },
    "relic-mp": { level: 4000 },
    "relic-atk": { level: 40000, isFavorite: true },
    "relic-crit_chance": { level: 250 },
    "relic-essence_find": { level: 100 },
    "relic-hp_regen": { level: 100 },
    "relic-crit_bonus": { level: 250 },
    "relic-phys_boost": { level: 16000, isFavorite: true },
    "relic-magic_boost": { level: 50000, isFavorite: true },
    "relic-chance_for_dungeon_keys": { level: 300 },
    "relic-mastery_xp_boost": { level: 100 },
    "relic-ore_find": { level: 100 },
    "relic-status_resist": { level: 50 },
    "relic-dmg_reflection": { level: 100 },
    "relic-darkmage": { level: 11000 },
    "relic-miner": { level: 1000 },
    "relic-thief": { level: 100000, isFavorite: true },
    "relic-dark_lord": { level: 200000, isFavorite: true },
    "relic-carpenter": { level: 1000 },
    "relic-nurse": { level: 100000, isFavorite: true },
    "relic-dual_wield": { level: 141600, isFavorite: true }
  },
  teams: {
    "default": {
      name: "Default",
      members: {
        "pet_1": { value: "rock" },
        "character_1": {
          value: "nurse",
          equipmentSlots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_ore_1": { value: null } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_ore_1": { value: null } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_ore_1": { value: null } } },
            "accessory_1": { value: "back_protector" }
          }
        },
        "character_2": {
          value: "thief",
          equipmentSlots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_ore_1": { value: null } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_ore_1": { value: null } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_ore_1": { value: null } } },
            "accessory_1": { value: "phantasmal_claw" }
          }
        },
        "character_3": {
          value: "dual_wield",
          equipmentSlots: {
            "weapon_1": { value: "saber", slots: { "resource_ore_1": { value: null } } },
            "weapon_2": { value: "saber", slots: { "resource_ore_1": { value: null } } },
            "armor_1": { value: "karuta", slots: { "resource_ore_1": { value: null } } },
            "accessory_1": { value: "dark_amulet" }
          }
        },
        "character_4": {
          value: "dual_wield",
          equipmentSlots: {
            "weapon_1": { value: "saber", slots: { "resource_ore_1": { value: null } } },
            "weapon_2": { value: "saber", slots: { "resource_ore_1": { value: null } } },
            "armor_1": { value: "karuta", slots: { "resource_ore_1": { value: null } } },
            "accessory_1": { value: "dark_amulet" }
          }
        },
        "character_5": {
          value: "dual_wield",
          equipmentSlots: {
            "weapon_1": { value: "saber", slots: { "resource_ore_1": { value: null } } },
            "weapon_2": { value: "saber", slots: { "resource_ore_1": { value: null } } },
            "armor_1": { value: "karuta", slots: { "resource_ore_1": { value: null } } },
            "accessory_1": { value: "dark_amulet" }
          }
        },
        "character_6": {
          value: "dark_lord",
          equipmentSlots: {
            "weapon_1": { value: "aphotic_blade" },
            "accessory_1": { value: "phantasmal_claw" },
            "accessory_2": { value: "back_protector" },
            "accessory_3": { value: "silver_necklace" }
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