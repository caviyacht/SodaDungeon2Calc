export default {
  "skill-strike": {
    type: "skill", 
    id: "strike",
    name: "Strike", 
    category: "phys", 
    stats: { "atk_multiplier": 1, "gives_back_atk_bonus": true } 
  },
  "skill-defend": { 
    type: "skill", 
    id: "defend",
    name: "Defend", 
    category: "phys", 
    stats: { } 
  },
  "skill-burp": { 
    type: "skill", 
    id: "burp",
    name: "Big Burp", 
    category: "phys", 
    stats: { "atk_multiplier": 1.8, "chance_to_psn": 0.25 } 
  },
  "skill-sharpen": {
    type: "skill",
    id: "sharpen",
    name: "Sharpen",
    category: "magic",
    // TODO: Figure out how to handle effects
    stats: { "crit_chance": { value: 1.00, scope: "target", turns: 3 } }
  },
  "skill-swift_metal": {
    type: "skill",
    id: "swift_metal",
    name: "Nailed It",
    category: "phys",
    // TODO: The default is `2`, assume the upgrade
    stats: { "atk_multiplier": 4 }
  },
  "skill-transmute": {
    type: "skill",
    id: "transmute",
    name: "Transmute",
    category: "magic",
    stats: { "transmutes_target": true }
  },
  "skill-pickaxe": {
    type: "skill",
    id: "pickaxe",
    name: "Pickaxe",
    category: "phys",
    stats: { "atk_multiplier": 0.75, "ore_bust": 5 }
  },
  "skill-group_heal": {
    type: "skill",
    id: "group_heal",
    name: "Group Heal",
    category: "magic",
    // TODO: Figure out how to handle the group heal (max 50%)
    stats: { "hp_multiplier": 0.2 }
  },
  "skill-biohazard": {
    type: "skill",
    id: "biohazard",
    name: "Biohazard",
    category: "magic",
    stats: { "atk_multiplier": 1.2, "chance_to_psn": 1.00 }
  },
  "skill-first_aid": {
    type: "skill",
    id: "first_aid",
    name: "First Aid",
    category: "magic",
    // TODO: Figure out how to handle the 100% heal
    stats: { }
  },
  "skill-recharge": {
    type: "skill",
    id: "recharge",
    name: "Recharge",
    category: "magic",
    stats: { "mp_regen": 8 }
  },
  "skill-torment": {
    type: "skill",
    id: "torment",
    name: "Torment",
    category: "magic",
    stats: { "atk_multiplier": 0.6 }
  },
  "skill-ransack": {
    type: "skill",
    id: "ransack",
    name: "Ransack",
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
    id: "pilfer",
    name: "Pilfer",
    category: "phys",
    // TODO: Figure out how to make the stats either or
    stats: {
      "steals_items_from_target": true,
      "steals_gold_from_target": true
    }
  },
  "skill-mark": {
    type: "skill",
    id: "mark",
    name: "Mark",
    category: "magic",
    // TODO: 
    stats: { "atk_multiplier": { value: 1.5, scope: "target", turns: 2 } }
  },
  "skill-curse": {
    type: "skill",
    id: "curse",
    name: "Curse",
    category: "magic",
    stats: { "turns_target_to_stone": { value: true, scope: "target", turns: 2 } }
  },
  "skill-noxin": {
    type: "skill",
    id: "noxin",
    name: "Noxin",
    category: "magic",
    stats: { "atk_multiplier": 0.75, "chance_to_psn": 0.75 }
  },
  "skill-stun": {
    type: "skill",
    id: "stun",
    name: "Stun",
    category: "phys",
    stats: { "stuns_target": { value: true, scope: "target", turns: 2 } }
  },
  "skill-dual_strike": {
    type: "skill",
    id: "dual_strike",
    name: "Double Strike",
    category: "phys",
    stats: { "strikes_target_twice": true }
  },
  "skill-shadow_slicer_2": {
    type: "skill",
    id: "shadow_slicer_2",
    name: "Shadow Slicer",
    category: "phys",
    // TODO: The base multiplier is `0.5`, affected by number of team members
    stats: { "atk_multiplier": 3 }
  },
  "skill-cook": {
    type: "skill",
    id: "cook",
    name: "Order Up",
    category: "phys",
    // TODO: Figure out how to handle the meals
    stats: { }
  },
  "skill-rock_toss": {
    type: "skill",
    id: "rock_toss",
    name: "Rock Toss",
    category: "phys",
    stats: { "atk_multiplier": 1.1 }
  },
  "skill-heal": {
    type: "skill",
    id: "heal",
    name: "Heal",
    category: "magic",
    // TODO: Figure out how to handle the heal `+20HP`
    stats: { }
  },
  "skill-phantasmal_claw": { 
    type: "skill", 
    id: "phantasmal_claw",
    name: "Phantasmal Claw", 
    category: "magic", 
    stats: { "atk_multiplier": 0.55 } 
  },
  "skill-tech_laser": { 
    type: "skill", 
    id: "tech_laser",
    name: "Laser", 
    category: "magic", 
    stats: { "atk_multiplier": 2.2, "gives_back_atk_bonus": true } 
  },
  "skill-skull_bash": { 
    type: "skill", 
    id: "skull_bash",
    name: "Skull Bash", 
    category: "magic", 
    stats: { "atk_multiplier": 2, "gives_back_atk_bonus": true, "chance_to_burn": 1.00 } 
  },
  "skill-judgement": {
    type: "skill",
    id: "judgement",
    name: "Judgement",
    category: "magic",
    stats: { "chance_to_halve_target_hp": true }
  },
  "skill-dark_flame": {
    type: "skill",
    id: "dark_flame",
    name: "Dark Flame",
    category: "magic",
    stats: { "atk_multiplier": 0.8, "chance_to_burn": 1.00 }
  }
};