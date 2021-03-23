export default {
  "character-soda_junkie": {
    type: "character",
    name: "soda_junkie",
    displayName: "Soda Junkie",
    maxLevel: 50,
    stats: {
      "hp": 10,
      "atk": 1,
      "mp": 5
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike"],
    masteryRewards: {
      "4": { stats: { "hp": 2 } },
      "9": { stats: { "evade": 0.01 } },
      "15": { stats: { "evade": 0.03 } },
      "18": { stats: { "evade": 0.01 } },
      "19": { stats: { "evade": 0.01 } },
      "24": { stats: { "evade": 0.02 } },
      "25": { stats: { }, skills: ["burp"] },
      "50": { stats: { }, relics: ["soda_junkie"] }
    }
  },
  "character-carpenter": {
    type: "character",
    name: "carpenter",
    displayName: "Carpenter",
    maxLevel: 50,
    stats: {
      "hp": 13,
      "atk": 1,
      "mp": 10
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "sharpen", "swift_metal", "defend"],
    masteryRewards: {
      "15": { stats: { "atk_boost": 0.03 } },
      "18": { stats: { "atk": 2 } },
      "19": { stats: { "atk": 2 } },
      "23": { stats: { "mp": 5 } },
      "25": { stats: { }, skills: ["sharpen"] },
      "50": { stats: { }, relics: ["carpenter"] }
    }
  },
  "character-miner": {
    type: "character",
    name: "miner",
    displayName: "Miner",
    maxLevel: 50,
    stats: {
      "hp": 11,
      "atk": 2,
      "mp": 20
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "transmute", "pickaxe", "defend"],
    masteryRewards: {
      "9": { stats: { "ore_find": 2 } },
      "15": { stats: { "ore_find": 5 } },
      "18": { stats: { "ore_find": 2 } },
      "19": { stats: { "ore_find": 2 } },
      "24": { stats: { "ore_find": 2 } },
      "25": { stats: { }, skills: ["transmute"] },
      "50": { stats: { }, relics: ["miner"] }
    }
  },
  "character-nurse": { 
    type: "character",
    name: "nurse",
    displayName: "Nurse", 
    maxLevel: 50,
    stats: {
      "hp": 13,
      "atk": 1,
      "mp": 30
    }, 
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "group_heal", "biohazard", "first_aid", "defend"],
    masteryRewards: {
      "9": { stats: { "status_resist": 0.02 } },
      "15": { stats: { "status_resist": 0.05 } },
      "18": { stats: { "status_resist": 0.02 } },
      "19": { stats: { "status_resist": 0.02 } },
      "24": { stats: { "status_resist": 0.02 } },
      "25": { stats: { }, skills: ["group_heal"] },
      "50": { stats: { }, relics: ["nurse"] }
    }
  },
  "character-psychic": {
    type: "character",
    name: "psychic",
    displayName: "Mystic",
    maxLevel: 50,
    stats: {
      "hp": 15,
      "atk": 3,
      "mp": 30
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "recharge", "torment", "defend"],
    masteryRewards: {
      "9": { stats: { "mp_regen": 2 } },
      "15": { stats: { "mp_regen": 5 } },
      "17": { stats: { "magic_boost": 0.03 } },
      "18": { stats: { "mp_regen": 2 } },
      "19": { stats: { "magic_boost": 0.03 } },
      "24": { stats: { "magic_boost": 0.03 } },
      "25": { stats: { }, skills: ["recharge"] },
      "50": { stats: { }, relics: ["psychic"] }
    }
  },
  "character-thief": {
    type: "character",
    name: "thief",
    displayName: "Thief",
    maxLevel: 50,
    stats: {
      "hp": 17,
      "atk": 2,
      "mp": 20
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "ransack", "pilfer", "defend"],
    masteryRewards: {
      "9": { stats: { "crit_chance": 0.01 } },
      "15": { stats: { "crit_chance": 0.03 } },
      "18": { stats: { "evade": 0.03 } },
      "19": { stats: { "crit_chance": 0.01 } },
      "24": { stats: { "evade": 0.03 } },
      "25": { stats: { }, skills: ["ransack"] },
      "50": { stats: { }, relics: ["thief"] }
    }
  },
  "character-huntress": {
    type: "character",
    name: "huntress",
    displayName: "Huntress",
    maxLevel: 50,
    stats: {
      "hp": 17,
      "atk": 2,
      "mp": 5
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["strike", "mark", "defend"],
    masteryRewards: {
      "9": { stats: { "dmg_reflection": 0.02 } },
      "15": { stats: { "dmg_reflection": 0.05 } },
      "18": { stats: { "dmg_reflection": 0.03 } },
      "19": { stats: { "dmg_reflection": 0.03 } },
      "24": { stats: { "dmg_reflection": 0.03 } },
      "25": { stats: { }, skills: ["mark"] },
      "50": { stats: { }, relics: ["huntress"] }
    }
  },
  "character-darkmage": {
    type: "character",
    name: "darkmage",
    displayName: "Darkmage",
    maxLevel: 50,
    stats: {
      "hp": 19,
      "atk": 3,
      "mp": 30
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["strike", "curse", "noxin", "defend"],
    masteryRewards: {
      "25": { stats: { }, skills: ["curse"] },
      "50": { stats: { }, relics: ["darkmage"] }
    }
  },
  "character-dual_wield": {
    type: "character",
    name: "dual_wield",
    displayName: "Blademaster",
    maxLevel: 50,
    stats: {
      "hp": 20,
      "atk": 5
    },
    slots: ["weapon_1", "weapon_2", "armor_1", "accessory_1"],
    skills: ["strike", "stun", "dual_strike"],
    masteryRewards: {
      "4": { stats: { "atk": 2 } },
      "8": { stats: { "atk": 2 } },
      "13": { stats: { "atk": 2 } },
      "17": { stats: { "atk": 2 } },
      "25": { stats: { }, skills: ["stun"] },
      "29": { stats: { "atk": 5 } },
      "50": { stats: { }, relics: ["dual_wield"] }
    }
  },
  "character-dark_lord": {
    type: "character",
    subtype: "special",
    name: "dark_lord",
    displayName: "Dark Lord", 
    maxLevel: 50,
    stats: {
      "hp": 50,
      "atk": 20,
      "mp": 30
    }, 
    slots: [{ name: "weapon_1", value: "aphotic_blade" }, "accessory_1", "accessory_2", "accessory_3"],
    skills: ["strike", "shadow_slicer_2", "defend"],
    masteryRewards: {
      "5": { stats: { "atk": 1 } },
      "10": { stats: { } },
      "25": { stats: { }, skills: ["dark_savior"] },
      "50": { stats: { }, relics: ["dark_lord"] }
    }
  },
  "character-chef": { 
    type: "character",
    subtype: "special",
    name: "chef",
    displayName: "Chef", 
    maxLevel: 50,
    stats: {
      "hp": 25
    }, 
    slots: [{ name: "weapon_1", value: "iron_skillet" }, "armor_1", "accessory_1"],
    skills: ["strike", "cook", "party_protection"]
  },
  "character-wizard": {
    type: "character",
    subtype: "special",
    name: "wizard",
    displayName: "Wizard",
    maxLevel: 50,
    stats: {
      "hp": 25,
      "atk": 5,
      "mp": 35
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1", "accessory_2"],
    skills: ["strike", "eviscerate", "foretell", "precognition", "defend"],
    masteryRewards: {
      "15": { stats: { "evade": 0.01 } },
      "19": { stats: { "evade": 0.01 } },
      "25": { stats: { }, skills: ["foretell"] },
      "44": { stats: { "evade": 0.02 } },
      "45": { stats: { "chance_for_dungeon_keys": 0.05 } },
      "50": { stats: { }, relics: ["wizard"] }
    }
  },
  "character-blacksmith": {
    type: "character",
    subtype: "special",
    name: "blacksmith",
    displayName: "Blacksmith",
    maxLevel: 50,
    stats: {
      "hp": 1,
      "atk": 1,
      "mp": 1
    },
    slots: ["weapon_1", "shield_1", "armor_1", "accessory_1"],
    skills: ["strike", "revenge", "defend"],
    masteryRewards: {
      "25": { stats: { }, skills: ["revenge"] },
      "50": { stats: { }, relics: ["blacksmith"] }
    }
  }
};