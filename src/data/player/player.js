export default {
  floor: 13200000,
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
    "relic-hp": { level: 1000000, isFavorite: true },
    "relic-gold_find": { level: 2161000, isFavorite: true },
    "relic-mp": { level: 100000 },
    "relic-atk": { level: 100000, isFavorite: true },
    "relic-crit_chance": { level: 250 },
    "relic-essence_find": { level: 100 },
    "relic-hp_regen": { level: 100 },
    "relic-crit_bonus": { level: 250 },
    "relic-phys_boost": { level: 100000, isFavorite: true },
    "relic-magic_boost": { level: 100000, isFavorite: true },
    "relic-chance_for_dungeon_keys": { level: 300 },
    "relic-mastery_xp_boost": { level: 100 },
    "relic-ore_find": { level: 100 },
    "relic-status_resist": { level: 52 },
    "relic-dmg_reflection": { level: 100 },
    "relic-darkmage": { level: 11000 },
    "relic-miner": { level: 1000 },
    "relic-thief": { level: 300000, isFavorite: true },
    "relic-dark_lord": { level: 300000 },
    "relic-carpenter": { level: 1000 },
    "relic-nurse": { level: 300000, isFavorite: true },
    "relic-dual_wield": { level: 200000 },
    "relic-chef": { level: 1 },
    "relic-huntress": { level: 300000, isFavorite: true },
    "relic-wizard": { level: 700000, isFavorite: true }
  },
  teams: {
    "default": {
      name: "Default",
      slots: {
        "pet_1": { value: "rock" },
        "character_1": {
          value: "wizard",
          slots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "accessory_1": { value: "phantasmal_claw" },
            "accessory_2": { value: "rooster_head" }
          }
        },
        "character_2": {
          value: "nurse",
          slots: {
            "weapon_1": { value: "ganalar", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "armor_1": { value: "karuta", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "accessory_1": { value: "phantasmal_claw" }
          }
        },
        "character_3": {
          value: "huntress",
          slots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "accessory_1": { value: "phantasmal_claw" },
            "accessory_2": { value: "rooster_head" }
          }
        },
        "character_4": {
          value: "huntress",
          slots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "accessory_1": { value: "dark_amulet" },
            "accessory_2": { value: "copper_bracelet" }
          }
        },
        "character_5": {
          value: "huntress",
          slots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "accessory_1": { value: "dark_amulet" },
            "accessory_2": { value: "copper_bracelet" }
          }
        },
        "character_6": {
          value: "thief",
          slots: {
            "weapon_1": { value: "skull_blade", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "shield_1": { value: "shield_of_the_divine", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "armor_1": { value: "platinum_armor", slots: { "resource_bar_1": { value: "gold_bar" } } },
            "accessory_1": { value: "dark_amulet" }
          }
        }
      }
    },
    "mining": {
      name: "Mining",
      slots: {
        "pet_1": { value: "chameleon" },
        "character_1": {
          value: "miner",
          slots: {
            "weapon_1": { value: "frying_pan", slots: { "resource_bar_1": { value: null } } },
            "shield_1": { value: "cosmic_shield", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "armor_1": { value: "karuta", slots: { "resource_bar_1": { value: null } } },
            "accessory_1": { value: "silver_necklace" }
          }
        },
        "character_2": {
          value: "miner",
          slots: {
            "weapon_1": { value: "staff_of_awareness", slots: { "resource_bar_1": { value: null } } },
            "shield_1": { value: "cosmic_shield", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "armor_1": { value: "karuta", slots: { "resource_bar_1": { value: null } } },
            "accessory_1": { value: "silver_necklace" }
          }
        },
        "character_3": {
          value: "miner",
          slots: {
            "weapon_1": { value: "essence_reaver", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "shield_1": { value: "cosmic_shield", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "armor_1": { value: "karuta", slots: { "resource_bar_1": { value: null } } },
            "accessory_1": { value: "silver_necklace" }
          }
        },
        "character_4": {
          value: "miner",
          slots: {
            "weapon_1": { value: "essence_reaver", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "tech_gem" } } },
            "shield_1": { value: "cosmic_shield", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "armor_1": { value: "karuta", slots: { "resource_bar_1": { value: null } } },
            "accessory_1": { value: "rock" }
          }
        },
        "character_5": {
          value: "miner",
          slots: {
            "weapon_1": { value: "essence_reaver", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "shield_1": { value: "cosmic_shield", slots: { "resource_bar_1": { value: null }, "gem_1": { value: "space_gem" } } },
            "armor_1": { value: "karuta", slots: { "resource_bar_1": { value: null } } },
            "accessory_1": { value: "phantasmal_claw" }
          }
        },
        "character_6": {
          value: "chef",
          slots: {
            "weapon_1": { value: "iron_skillet" },
            "armor_1": { value: "platinum_armor", slots: { "resource_bar_1": { value: null } } },
            "accessory_1": { value: "silver_necklace" }
          }
        }
      }
    }
  }
};