export default {
  "strike": {
    type: "skill", 
    name: "Strike", 
    category: "physical", 
    stats: { "atk_multiplier": 1, "gives_back_atk_bonus": true } 
  },
  "defend": { 
    type: "skill", 
    name: "Defend", 
    category: "physical", 
    stats: { } 
  },
  "burp": { 
    type: "skill", 
    name: "Big Burp", 
    category: "physical", 
    stats: { "atk_multiplier": 1.8, "chance_to_psn": 0.25 } 
  },
  "sharpen": {
    type: "skill",
    name: "Sharpen",
    category: "magic",
    // TODO: Figure out how to handle effects
    stats: { "crit_chance": { value: 1.00, scope: "target", turns: 3 } }
  },
  "swift_metal": {
    type: "skill",
    name: "Nailed It",
    category: "physical",
    // TODO: The default is `2`, assume the upgrade
    stats: { "atk_multiplier": 4 }
  },
  "transmute": {
    type: "skill",
    name: "Transmute",
    category: "magic",
    stats: { "transmutes_target": true }
  },
  "pickaxe": {
    type: "skill",
    name: "Pickaxe",
    category: "physical",
    stats: { "atk_multiplier": 0.75, "ore_bust": 5 }
  },
  "group_heal": {
    type: "skill",
    name: "Group Heal",
    category: "magic",
    // TODO: Figure out how to handle the group heal (max 50%)
    stats: { "hp_multiplier": 0.2 }
  },
  "biohazard": {
    type: "skill",
    name: "Biohazard",
    category: "magic",
    stats: { "atk_multiplier": 1.2, "chance_to_psn": 1.00 }
  },
  "first_aid": {
    type: "skill",
    name: "First Aid",
    category: "magic",
    // TODO: Figure out how to handle the 100% heal
    stats: { }
  },
  "recharge": {
    type: "skill",
    name: "Recharge",
    category: "magic",
    stats: { "mp_regen": 8 }
  },
  "torment": {
    type: "skill",
    name: "Torment",
    category: "magic",
    stats: { "atk_multiplier": 0.6 }
  },
  "ransack": {
    type: "skill",
    name: "Ransack",
    category: "physical",
    stats: { 
      "atk_multiplier": 1.2, 
      "steals_items_from_target": true,
      "steals_gold_from_target": true,
      "steals_essence_from_target": true
    }
  },
  "pilfer": {
    type: "skill",
    name: "Pilfer",
    category: "physical",
    // TODO: Figure out how to make the stats either or
    stats: {
      "steals_items_from_target": true,
      "steals_gold_from_target": true
    }
  },
  "mark": {
    type: "skill",
    name: "Mark",
    category: "magic",
    // TODO: 
    stats: { "atk_multiplier": { value: 1.5, scope: "target", turns: 2 } }
  },
  "curse": {
    type: "skill",
    name: "Curse",
    category: "magic",
    stats: { "turns_target_to_stone": { value: true, scope: "target", turns: 2 } }
  },
  "noxin": {
    type: "skill",
    name: "Noxin",
    category: "magic",
    stats: { "atk_multiplier": 0.75, "chance_to_psn": 0.75 }
  },
  "stun": {
    type: "skill",
    name: "Stun",
    category: "physical",
    stats: { "stuns_target": { value: true, scope: "target", turns: 2 } }
  },
  "dual_strike": {
    type: "skill",
    name: "Double Strike",
    category: "physical",
    stats: { "strikes_target_twice": true }
  },
  "shadow_slicer_2": {
    type: "skill",
    name: "Shadow Slicer",
    category: "physical",
    // TODO: The base multiplier is `0.5`, affected by number of team members
    stats: { "atk_multiplier": 3 }
  },
  "cook": {
    type: "skill",
    name: "Order Up",
    category: "physical",
    // TODO: Figure out how to handle the meals
    stats: { }
  },
  "rock_toss": {
    type: "skill",
    name: "Rock Toss",
    category: "physical",
    stats: { "atk_multiplier": 1.1 }
  },
  "heal": {
    type: "skill",
    name: "Heal",
    category: "magic",
    // TODO: Figure out how to handle the heal `+20HP`
    stats: { }
  },
  "phantasmal_claw": { 
    type: "skill", 
    name: "Phantasmal Claw", 
    category: "magic", 
    stats: { "atk_multiplier": 0.55 } 
  },
  "tech_laser": { 
    type: "skill", 
    name: "Laser", 
    category: "magic", 
    stats: { "atk_multiplier": 2.2, "gives_back_atk_bonus": true } 
  },
  "skull_bash": { 
    type: "skill", 
    name: "Skull Bash", 
    category: "magic", 
    stats: { "atk_multiplier": 2, "gives_back_atk_bonus": true, "chance_to_burn": 1.00 } 
  },
  "judgement": {
    type: "skill",
    name: "Judgement",
    category: "magic",
    stats: { "chance_to_halve_target_hp": true }
  },
  "dark_flame": {
    type: "skill",
    name: "Dark Flame",
    category: "magic",
    stats: { "atk_multiplier": 0.8, "chance_to_burn": 1.00 }
  }
};