export default {
  "skill-strike": {
    type: "skill", 
    name: "strike",
    displayName: "Strike", 
    category: "phys", 
    stats: { "atk_multiplier": 1, "gives_back_atk_bonus": true } 
  },
  "skill-defend": { 
    type: "skill", 
    name: "defend",
    displayName: "Defend", 
    category: "phys", 
    stats: { } 
  },
  "skill-burp": { 
    type: "skill", 
    name: "burp",
    displayName: "Big Burp", 
    category: "phys", 
    stats: { "atk_multiplier": 1.8, "chance_to_psn": 0.25 } 
  },
  "skill-sharpen": {
    type: "skill",
    name: "sharpen",
    displayName: "Sharpen",
    category: "magic",
    // TODO: Figure out how to handle effects
    stats: { "crit_chance": { value: 1.00, scope: "target", turns: 3 } }
  },
  "skill-swift_metal": {
    type: "skill",
    name: "swift_metal",
    displayName: "Nailed It",
    category: "phys",
    // TODO: The default is `2`, assume the upgrade
    stats: { "atk_multiplier": 4 }
  },
  "skill-transmute": {
    type: "skill",
    name: "transmute",
    displayName: "Transmute",
    category: "magic",
    stats: { "transmutes_target": true }
  },
  "skill-pickaxe": {
    type: "skill",
    name: "pickaxe",
    displayName: "Pickaxe",
    category: "phys",
    stats: { "atk_multiplier": 0.75, "ore_bust": 5 }
  },
  "skill-group_heal": {
    type: "skill",
    name: "group_heal",
    displayName: "Group Heal",
    category: "magic",
    // TODO: Figure out how to handle the group heal (max 50%)
    stats: { "hp_multiplier": 0.2 }
  },
  "skill-biohazard": {
    type: "skill",
    name: "biohazard",
    displayName: "Biohazard",
    category: "magic",
    stats: { "atk_multiplier": 1.2, "chance_to_psn": 1.00 }
  },
  "skill-first_aid": {
    type: "skill",
    name: "first_aid",
    displayName: "First Aid",
    category: "magic",
    // TODO: Figure out how to handle the 100% heal
    stats: { }
  },
  "skill-recharge": {
    type: "skill",
    name: "recharge",
    displayName: "Recharge",
    category: "magic",
    stats: { "mp_regen": 8 }
  },
  "skill-torment": {
    type: "skill",
    name: "torment",
    displayName: "Torment",
    category: "magic",
    stats: { "atk_multiplier": 0.6 }
  },
  "skill-ransack": {
    type: "skill",
    name: "ransack",
    displayName: "Ransack",
    category: "phys",
    stats: { 
      "atk_multiplier": 1.2, 
      "steals_items_from_target": true,
      "steals_gold_from_target": true,
      "steals_essence_from_target": true
    }
  },
  "skill-pilfer": {
    type: "skill",
    name: "pilfer",
    displayName: "Pilfer",
    category: "phys",
    // TODO: Figure out how to make the stats either or
    stats: {
      "steals_items_from_target": true,
      "steals_gold_from_target": true
    }
  },
  "skill-mark": {
    type: "skill",
    name: "mark",
    displayName: "Mark",
    category: "magic",
    // TODO: 
    stats: { "atk_multiplier": { value: 1.5, scope: "target", turns: 2 } }
  },
  "skill-curse": {
    type: "skill",
    name: "curse",
    displayName: "Curse",
    category: "magic",
    stats: { "turns_target_to_stone": { value: true, scope: "target", turns: 2 } }
  },
  "skill-noxin": {
    type: "skill",
    name: "noxin",
    displayName: "Noxin",
    category: "magic",
    stats: { "atk_multiplier": 0.75, "chance_to_psn": 0.75 }
  },
  "skill-stun": {
    type: "skill",
    name: "stun",
    displayName: "Stun",
    category: "phys",
    stats: { "stuns_target": { value: true, scope: "target", turns: 2 } }
  },
  "skill-dual_strike": {
    type: "skill",
    name: "dual_strike",
    displayName: "Double Strike",
    category: "phys",
    stats: { "strikes_target_twice": true }
  },
  "skill-shadow_slicer_2": {
    type: "skill",
    name: "shadow_slicer_2",
    displayName: "Shadow Slicer",
    category: "phys",
    // TODO: The base multiplier is `0.5`, affected by number of team members
    stats: { "atk_multiplier": 3 }
  },
  "skill-cook": {
    type: "skill",
    name: "cook",
    displayName: "Order Up",
    category: "phys",
    // TODO: Figure out how to handle the meals
    stats: { }
  },
  "skill-rock_toss": {
    type: "skill",
    name: "rock_toss",
    displayName: "Rock Toss",
    category: "phys",
    stats: { "atk_multiplier": 1.1 }
  },
  "skill-heal": {
    type: "skill",
    name: "heal",
    displayName: "Heal",
    category: "magic",
    // TODO: Figure out how to handle the heal `+20HP`
    stats: { }
  },
  "skill-phantasmal_claw": { 
    type: "skill", 
    name: "phantasmal_claw",
    displayName: "Phantasmal Claw", 
    category: "magic", 
    stats: { "atk_multiplier": 0.55 } 
  },
  "skill-tech_laser": { 
    type: "skill", 
    name: "tech_laser",
    displayName: "Laser", 
    category: "magic", 
    stats: { "atk_multiplier": 2.2, "gives_back_atk_bonus": true } 
  },
  "skill-skull_bash": { 
    type: "skill", 
    name: "skull_bash",
    displayName: "Skull Bash", 
    category: "magic", 
    stats: { "atk_multiplier": 2, "gives_back_atk_bonus": true, "chance_to_burn": 1.00 } 
  },
  "skill-judgement": {
    type: "skill",
    name: "judgement",
    displayName: "Judgement",
    category: "magic",
    stats: { "chance_to_halve_target_hp": true }
  },
  "skill-dark_flame": {
    type: "skill",
    name: "dark_flame",
    displayName: "Dark Flame",
    category: "magic",
    stats: { "atk_multiplier": 0.8, "chance_to_burn": 1.00 }
  },
  "skill-party_protection": {
    type: "skill",
    name: "party_protection",
    displayName: "Party Protection",
    category: "passive",
    stats: { }
  },
  "skill-eviscerate": {
    type: "skill",
    name: "eviscerate",
    displayName: "Eviscerate",
    category: "magic",
    stats: { }
  },
  "skill-foretell": {
    type: "skill",
    name: "foretell",
    displayName: "Foretell",
    category: "magic",
    stats: { }
  },
  "skill-precognition": {
    type: "skill",
    name: "precognition",
    displayName: "Precognition",
    category: "passive",
    stats: { }
  }
};