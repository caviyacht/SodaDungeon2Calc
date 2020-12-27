export default {
  "accessory-heal_stone": {
    type: "accessory",
    name: "heal_stone",
    internalId: "97",
    displayName: "Heal Stone",
    skills: ["heal"]
  },
  "accessory-rock": { 
    type: "accessory", 
    name: "rock",
    internalId: "98",
    displayName: "Rock", 
    skills: ["rock_toss"]
  },
  "accessory-phantasmal_claw": { 
    type: "accessory", 
    name: "phantasmal_claw",
    internalId: "100",
    displayName: "Phantasmal Claw", 
    skills: ["phantasmal_claw"] 
  },
  "accessory-dark_amulet": { 
    type: "accessory", 
    name: "dark_amulet",
    internalId: "127",
    displayName: "Dark Amulet", 
    stats: { "prevents_burn": true, "prevents_stone": true } 
  },
  "accessory-silver_necklace": { 
    type: "accessory",
    name: "silver_necklace", 
    internalId: "129",
    displayName: "Silver Necklace", 
    stats: { "dmg_reduction": 0.10, "item_find": 10 } 
  },
  "accessory-back_protector": { 
    type: "accessory",
    name: "back_protector", 
    internalId: "130",
    displayName: "Back Protector", 
    stats: { "hp_boost": 0.10, "prevents_back_atk_bonus": true } 
  },
  "accessory-slow_stone": {
    type: "accessory",
    name: "slow_stone",
    internalId: "179",
    displayName: "Slow Stone",
    stats: { "spd": -50 }
  }
};