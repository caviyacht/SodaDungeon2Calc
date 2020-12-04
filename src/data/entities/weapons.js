export default {
  "weapon-aphotic_blade": { 
    type: "weapon", 
    subtype: "special",
    id: "aphotic_blade",
    internalId: "99",
    name: "Aphotic Blade", 
    stats: { "atk": 5, "crit_chance": 0.40, "crit_bonus": 0.50 }
  },
  "weapon-iron_skillet": { 
    type: "weapon", 
    subtype: "special",
    id: "iron_skillet",
    internalId: "178",
    name: "Iron Skillet", 
    stats: { "atk": 20 }
  },

  "weapon-frying_pan": { 
    type: "weapon", 
    id: "frying_pan",
    internalId: "102",
    name: "Frying Pan", 
    stats: { "atk": 28, "chance_for_food": 0.25, "chance_to_burn": 0.10 }, 
    slots: ["resource_ore_1"] 
  },
  "weapon-saber": { 
    type: "weapon", 
    id: "saber",
    internalId: "103",
    name: "Saber", 
    stats: { "atk": 26, "crit_chance": 0.39, "crit_bonus": 0.59, "evade": 0.29 }, 
    slots: ["resource_ore_1"] 
  },
  "weapon-skull_blade": { 
    type: "weapon", 
    id: "skull_blade",
    internalId: "120",
    name: "Skull Blade", 
    stats: { "atk": 33, "crit_chance": 0.34, "crit_bonus": 0.84, "dmg_reduction": 0.19 }, 
    slots: ["resource_ore_1"], 
    skills: ["skull_bash"] 
  },
  "weapon-staff_of_awareness": { 
    type: "weapon", 
    id: "staff_of_awareness",
    internalId: "140",
    name: "Staff of Awareness", 
    stats: { "atk": 33, "magic_boost": 0.28, "item_find": 28 }, 
    slots: ["resource_ore_1"] 
  },
  "weapon-grand_sceptor": { 
    type: "weapon", 
    id: "grand_sceptor",
    internalId: "156",
    name: "Grand Scepter", 
    stats: { "atk": 68, "magic_boost": 0.48 }, 
    slots: ["resource_ore_1", "gem_1"] 
  },
  "weapon-glass_warden": {
    type: "weapon",
    id: "glass_warden",
    internalId: "168",
    name: "Glass Warden",
    stats: { "atk": 28, "crit_chance": 0.10, "crit_bonus": 2.09 },
    slots: ["resource_ore_1"],
    skills: ["judgement"]
  },
  "weapon-essence_reaver": { 
    type: "weapon", 
    id: "essence_reaver",
    internalId: "170",
    name: "Essence Reaver", 
    stats: { "atk": 118, "crit_chance": 0.24, "crit_bonus": 1.34 }, 
    slots: ["resource_ore_1", "gem_1"] 
  }
};