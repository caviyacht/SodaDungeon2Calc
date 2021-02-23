export default {
  "weapon-aphotic_blade": { 
    type: "weapon", 
    subtype: "special",
    name: "aphotic_blade",
    internalId: "99",
    displayName: "Aphotic Blade", 
    stats: { "atk": 5, "crit_chance": 0.40, "crit_bonus": 0.50 }
  },
  "weapon-frying_pan": { 
    type: "weapon", 
    name: "frying_pan",
    internalId: "102",
    displayName: "Frying Pan", 
    stats: { "atk": 28, "chance_for_food": 0.25, "chance_to_burn": 0.10 }, 
    slots: ["resource_bar_1"] 
  },
  "weapon-saber": { 
    type: "weapon", 
    name: "saber",
    internalId: "103",
    displayName: "Saber", 
    stats: { "atk": 26, "crit_chance": 0.39, "crit_bonus": 0.59, "evade": 0.29 }, 
    slots: ["resource_bar_1"] 
  },
  "weapon-skull_blade": { 
    type: "weapon", 
    name: "skull_blade",
    internalId: "120",
    displayName: "Skull Blade", 
    stats: { "atk": 33, "crit_chance": 0.34, "crit_bonus": 0.84, "dmg_reduction": 0.19 }, 
    slots: ["resource_bar_1"], 
    skills: ["skull_bash"] 
  },
  "weapon-staff_of_awareness": { 
    type: "weapon", 
    name: "staff_of_awareness",
    internalId: "140",
    displayName: "Staff of Awareness", 
    stats: { "atk": 33, "magic_boost": 0.28, "item_find": 28 }, 
    slots: ["resource_bar_1"] 
  },
  "weapon-grand_sceptor": { 
    type: "weapon", 
    name: "grand_sceptor",
    internalId: "156",
    displayName: "Grand Scepter", 
    stats: { "atk": 68, "magic_boost": 0.48 }, 
    slots: ["resource_bar_1", "gem_1"] 
  },
  "weapon-glass_warden": {
    type: "weapon",
    name: "glass_warden",
    internalId: "168",
    displayName: "Glass Warden",
    stats: { "atk": 28, "crit_chance": 0.10, "crit_bonus": 2.09 },
    slots: ["resource_bar_1"],
    skills: ["judgement"]
  },
  "weapon-essence_reaver": { 
    type: "weapon", 
    name: "essence_reaver",
    internalId: "170",
    displayName: "Essence Reaver", 
    stats: { "atk": 118, "crit_chance": 0.24, "crit_bonus": 1.34 }, 
    slots: ["resource_bar_1", "gem_1"] 
  },
  "weapon-iron_skillet": { 
    type: "weapon", 
    subtype: "special",
    name: "iron_skillet",
    internalId: "178",
    displayName: "Iron Skillet", 
    stats: { "atk": 20 }
  },
  "weapon-ganalar": { 
    type: "weapon", 
    subtype: "special",
    name: "ganalar",
    internalId: "180",
    displayName: "Ganalar", 
    stats: { "atk": 53, "magic_boost": 0.78, "dmg_reduction": 0.19, "evade": 0.19  }
  },
};