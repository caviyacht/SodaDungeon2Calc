export default {
  ui: {
      icons: {
          "accessory": "./images/icons/icon_accessory.png",
          "armor": "./images/icons/icon_armor.png",
          "gem": "./images/icons/icon_gem.png",
          "shield": "./images/icons/icon_shield.png",
          "weapon": "./images/icons/icon_weapon.png",
      }
  },
  items: {
      shields: {
          "142": { name: "Power Shield", hasGemSlot: true, stats: { health: 62, attack: 33 } },
          "150": { name: "Stoplight Shield", hasGemSlot: true, stats: { health: 62, healthRegen: 15 } },
          "154": { name: "Cosmic Shield", hasGemSlot: true, stats: { health: 67, magicBoost: 0.33, essenceFind: 0.03 } },
          "167": { name: "Shield of the Divine", stats: { health: 57, damageReduction: 0.19 } }
      },
      weapons: {
          "99": { name: "Aphotic Blade", isCharacterSpecific: true, stats: { attack: 5, critChance: 0.40, critBonus: 0.50 } },
          "103": { name: "Saber", stats: { attack: 26, critChance: 0.39, critBonus: 0.59, evade: 0.29 } },
          "120": { name: "Skull Blade", stats: { attack: 33, critChance: 0.34, critBonus: 0.84, damageReduction: 0.19 } },
          "178": { name: "Iron Skillet", isCharacterSpecific: true, stats: { attack: 20 } }
      },
      armors: {
          "143": { name: "Karuta", stats: { health: 54, evade: 0.34 } },
          "162": { name: "Platinum Armor", stats: { health: 227, healthBoost: 0.14, damageReduction: 0.24 } }
      },
      accessories: {
          "100": { name: "Phantasmal Claw", stats: { } },
          "127": { name: "Dark Amulet", stats: { stoneReduction: 1.00, burnReduction: 1.00 } },
          "129": { name: "Silver Necklace", stats: { damageReduction: 0.10, itemFind: 10 } },
          "130": { name: "Back Protector", stats: { healthBoost: 0.10, backAttackReduction: 1.00 } }
      },
      gems: {
          "153": { name: "Pearl Gem", stats: { healthBoost: 0.10, attackBoost: 0.10, magicBoost: 0.05 } }
      }
  },
  characters: {
      "soda_junkie": {
          name: "Soda Junkie",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 62,
              healthBoost: 0.09,
              attack: 19,
              attackBoost: 0.09,
              mana: 16,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.08,
              damageReduction: 0.02,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_soda_junkie_1.png"
              }
          }
      },
      "carpenter": {
          name: "Carpenter",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 63,
              healthBoost: 0.09,
              attack: 23,
              attackBoost: 0.12,
              mana: 23,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.04,
              damageReduction: 0.04,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_carpenter_1.png"
              }
          }
      },
      "miner": {
          name: "Miner",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 61,
              healthBoost: 0.09,
              attack: 20,
              attackBoost: 0.09,
              mana: 33,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.02,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 27,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_miner_1.png"
              }
          }
      },
      "nurse": {
          name: "Nurse",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 63,
              healthBoost: 0.09,
              attack: 19,
              attackBoost: 0.09,
              mana: 43,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.02,
              damageReflection: 0.00,
              statusResist: 0.14,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_nurse_1.png"
              }
          }
      },
      "psychic": {
          name: "Mystic",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 65,
              healthBoost: 0.09,
              attack: 21,
              attackBoost: 0.09,
              mana: 41,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.34,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.02,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 9,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_psychic_1.png"
              }
          }
      },
      "thief": {
          name: "Thief",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 67,
              healthBoost: 0.09,
              attack: 20,
              attackBoost: 0.09,
              mana: 18,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.06,
              damageReduction: 0.02,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_thief_1.png"
              }
          }
      },
      "huntress": {
          name: "Huntress",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" },
              { type: "accessory" }
          ],
          stats: {
              health: 67,
              healthBoost: 0.09,
              attack: 20,
              attackBoost: 0.09,
              mana: 18,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.02,
              damageReflection: 0.16,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_huntress_1.png"
              }
          }
      },
      "darkmage": {
          name: "Darkmage",
          equipmentSlots: [
              { type: "weapon" },
              { type: "shield" },
              { type: "armor" },
              { type: "accessory" },
              { type: "accessory" }
          ],
          stats: {
              health: 69,
              healthBoost: 0.09,
              attack: 21,
              attackBoost: 0.09,
              mana: 43,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.25,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.07,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_darkmage_1.png"
              }
          }
      },
      "dual_wield": {
          name: "Blademaster",
          equipmentSlots: [
              { type: "weapon" },
              { type: "weapon" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 70,
              healthBoost: 0.09,
              attack: 36,
              attackBoost: 0.09,
              mana: 0,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.07,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_dual_wield_1.png"
              }
          }
      },
      "dark_lord": {
          name: "Dark Lord",
          equipmentSlots: [
              { type: "weapon", itemId: "99" },
              { type: "accessory" },
              { type: "accessory" },
              { type: "accessory" }
          ],
          stats: {
              health: 100,
              healthBoost: 0.09,
              attack: 38,
              attackBoost: 0.09,
              mana: 43,
              manaBoost: 0.00,
              critChance: 0.02,
              critBonus: 0.07,
              magicBoost: 0.00,
              physicalBoost: 0.05,
              evade: 0.00,
              damageReduction: 0.07,
              damageReflection: 0.00,
              statusResist: 0.02,
              healthRegen: 6,
              manaRegen: 0,
              essenceFind: 0.03,
              goldFind: 0.02,
              itemFind: 1,
              keyFind: 0.00,
              oreFind: 0,
              xpBoost: 0.00
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_dark_lord_1.png"
              }
          }
      },
      "chef": {
          name: "Chef",
          equipmentSlots: [
              { type: "weapon", itemId: "178" },
              { type: "armor" },
              { type: "accessory" }
          ],
          stats: {
              health: 43,
              healthBoost: 0.02,
              attack: 14,
              attackBoost: 0.02,
              mana: 0,
              manaBoost: 0.00,
              critChance: 0.00,
              critBonus: 0.00,
              magicBoost: 0.00,
              physicalBoost: 0.00,
              evade: 0.00,
              damageReduction: 0.05,
              damageReflection: 0.00,
              statusResist: 0.00,
              healthRegen: 0,
              manaRegen: 0,
              essenceFind: 0.08,
              goldFind: 0.20,
              itemFind: 10,
              keyFind: 0.02,
              oreFind: 4,
              xpBoost: 0.07
          },
          images: {
              portraits: {
                  primary: "./images/portraits/char_portrait_chef_1.png"
              }
          }
      }
  },
  pets: {
      "whale": {
          name: "Finn", 
          stats: { healthBoost: 0.08 },
          images: {
              primary: "./images/pets/pet_whale_1.png"
          }
      },
      "platypus": {
          name: "Patty", 
          stats: { statusResist: 0.08 },
          images: {
              primary: "./images/pets/pet_platypus_1.png"
          }
      },
      "hedgehog": {
          name: "Spike", 
          stats: { damageReflection: 0.08 },
          images: {
              primary: "./images/pets/pet_hedgehog_1.png"
          }
      },
      "pug": {
          name: "Bandit", 
          stats: { goldFind: 0.16 },
          images: {
              primary: "./images/pets/pet_pug_1.png"
          }
      },
      "rock": {
          name: "Cliff", 
          stats: { damageReduction: 0.08 },
          images: {
              primary: "./images/pets/pet_rock_1.png"
          }
      },
      "chameleon": {
          name: "Sly", 
          stats: { evade: 0.08 },
          images: {
              primary: "./images/pets/pet_chameleon_1.png"
          }
      },
      "mosquito": {
          name: "Culex", 
          stats: { physicalBoost: 0.08 },
          images: {
              primary: "./images/pets/pet_mosquito_1.png"
          }
      },
      "cat": {
          name: "Neko", 
          stats: { itemFind: 8 },
          images: {
              primary: "./images/pets/pet_cat_1.png"
          }
      },
      "fairy": {
          name: "Aurora", 
          stats: { essenceFind: 0.08 },
          images: {
              primary: "./images/pets/pet_fairy_1.png"
          }
      },
      "angel": {
          name: "Cassiel", 
          stats: { magicBoost: 0.08 },
          images: {
              primary: "./images/pets/pet_angel_1.png"
          }
      }
  },
  teams: [
      {
          name: "Default",
          characters: [
              {
                  characterId: "nurse",
                  equipmentSlots: [
                      { type: "weapon", itemId: "120", gemId: null },
                      { type: "shield", itemId: "167", gemId: null },
                      { type: "armor", itemId: "162", gemId: null },
                      { type: "accessory", itemId: "130", gemId: null }
                  ]
              },
              {
                  characterId: "thief",
                  equipmentSlots: [
                      { type: "weapon", itemId: "120", gemId: null },
                      { type: "shield", itemId: "167", gemId: null },
                      { type: "armor", itemId: "162", gemId: null },
                      { type: "accessory", itemId: "130", gemId: null }
                  ]
              },
              {
                  characterId: "dual_wield",
                  equipmentSlots: [
                      { type: "weapon", itemId: "103", gemId: null },
                      { type: "weapon", itemId: "103", gemId: null },
                      { type: "armor", itemId: "143", gemId: null },
                      { type: "accessory", itemId: "127", gemId: null }
                  ]
              },
              {
                  characterId: "dual_wield",
                  equipmentSlots: [
                      { type: "weapon", itemId: "103", gemId: null },
                      { type: "weapon", itemId: "103", gemId: null },
                      { type: "armor", itemId: "143", gemId: null },
                      { type: "accessory", itemId: "127", gemId: null }
                  ]
              },
              {
                  characterId: "dual_wield",
                  equipmentSlots: [
                      { type: "weapon", itemId: "103", gemId: null },
                      { type: "weapon", itemId: "103", gemId: null },
                      { type: "armor", itemId: "143", gemId: null },
                      { type: "accessory", itemId: "127", gemId: null }
                  ]
              },
              {
                  characterId: "dark_lord",
                  equipmentSlots: [
                      { type: "weapon", itemId: "99", gemId: null },
                      { type: "accessory", itemId: "100", gemId: null },
                      { type: "accessory", itemId: "129", gemId: null },
                      { type: "accessory", itemId: "130", gemId: null }
                  ]
              }
          ],
          petId: "rock"
      }
  ],
  equipmentSlotTypes: {
    "weapon": { canHaveGemId: true, itemsPath: "weapons" },
    "shield": { canHaveGemId: true, itemsPath: "shields" },
    "armor": { canHaveGemId: false, itemsPath: "armors" },
    "accessory": { canHaveGemId: false, itemsPath: "accessories" }
  },
  stats: {
    "health": { name: "HP", type: "number" },
    "healthBoost": { name: "HP Boost", type: "percentage", isOptional: true },
    "attack": { name: "ATK", type: "number" },
    "attackBoost": { name: "ATK Boost", type: "percentage", isOptional: true },
    "mana": { name: "MP", type: "number", isOptional: true },
    "manaBoost": { name: "MP Boost", type: "percentage", isOptional: true },
    "critChance": { name: "Crit Chance", type: "percentage", isOptional: true },
    "critBonus": { name: "Crit Bonus", type: "percentage", isOptional: true },
    "magicBoost": { name: "Magic Boost", type: "percentage" },
    "physicalBoost": { name: "Physical Boost", type: "percentage" },
    "evade": { name: "Evade", type: "percentage" },
    "damageReduction": { name: "DMG Reduction", type: "percentage" },
    "damageReflection": { name: "DMG Reflection", type: "percentage", isOptional: true },
    "statusResist": { name: "Status Resist", type: "percentage" },
    "healthRegen": { name: "HP Regen", type: "number", isOptional: true },
    "manaRegen": { name: "MP Regen", type: "number", isOptional: true },
    "essenceFind": { name: "Essence Find", type: "percentage", isOptional: true },
    "goldFind": { name: "Gold Find", type: "percentage", isOptional: true },
    "itemFind": { name: "Item Find", type: "number", isOptional: true },
    "keyFind": { name: "Key Find", type: "percentage", isOptional: true },
    "oreFind": { name: "Ore Find", type: "number", isOptional: true },
    "xpBoost": { name: "XP Boost", type: "percentage", isOptional: true }
  }
};