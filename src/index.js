import { app } from "hyperapp";
import h from './hyperappjsx';

const CharacterSelect = ({currentCharacterId, currentCharacter, characters, ...props}) =>
  <select class="form-control form-control-sm">
    {Object.keys(characters).map(characterId => 
    {
      let character = characters[characterId];
      let isSelected = currentCharacterId === characterId;

      return <option value={characterId} selected={isSelected}>{character.name}</option>;
    })}
  </select>;

const EquipmentSelect = ({equipmentItems, defaultItemId, icon, ...props}) =>
  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <div style={{
          width: "20px",
          height: "20px",
          backgroundColor: "black",
            "-webkit-mask-box-image": `url(${icon})`
        }}/>
      </span>
    </div>

    <select class="form-control form-control-sm" disabled={!!defaultItemId}>
      <option value="">Empty</option>
      {Object.keys(equipmentItems).map(equipmentId => 
      {
        let equipment = equipmentItems[equipmentId];
        let isSelected = equipmentId === defaultItemId;

        return <option value={equipmentId} selected={isSelected} disabled={!!equipment.isCharacterSpecific}>
          {equipment.name}
        </option>;
      })}
    </select>
  </div>;

const CharacterEquipmentSelectItem = ({equipmentItems, defaultItemId, icon, ...props}) =>
  <li class="list-group-item py-0 px-0">
    <EquipmentSelect equipmentItems={equipmentItems} defaultItemId={defaultItemId} icon={icon} {...props}/>
  </li>;

const CharacterEquipmentSelect = ({characterId, character, ...props}) =>
  <ul class="list-group list-group-flush">
    {character.equipment.weaponSlots.number > 0 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.weapons} 
      defaultItemId={character.equipment.weaponSlots.default}
      icon={props.ui.icons.weapon} {...props}/>}

    {character.equipment.weaponSlots.number > 1 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.weapons} 
      defaultItemId={character.equipment.weaponSlots.default}
      icon={props.ui.icons.weapon} {...props}/>}

    {character.equipment.shieldSlots.number > 0 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.shields} 
      defaultItemId={character.equipment.shieldSlots.default}
      icon={props.ui.icons.shield} {...props}/>}

    {character.equipment.armorSlots.number > 0 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.armors} 
      defaultItemId={character.equipment.armorSlots.default}
      icon={props.ui.icons.armor} {...props}/>}

    {character.equipment.accessorySlots.number > 0 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.accessories} 
      defaultItemId={character.equipment.accessorySlots.default}
      icon={props.ui.icons.accessory} {...props}/>}

    {character.equipment.accessorySlots.number > 1 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.accessories} 
      defaultItemId={character.equipment.accessorySlots.default}
      icon={props.ui.icons.accessory} {...props}/>}

    {character.equipment.accessorySlots.number > 2 && 
    <CharacterEquipmentSelectItem 
      equipmentItems={props.items.accessories} 
      defaultItemId={character.equipment.accessorySlots.default}
      icon={props.ui.icons.accessory} {...props}/>}

  </ul>;

const Character = ({characterId, character, ...props}) =>
  <div class="card m-1">
    <div class="card-header py-1 bg-dark">
      <div class="row">
        <div class="col pl-0">
        <img src={character.portrait} alt={character.name} width="30" height="30"/>
        </div>
        <div class="float-right">
          <CharacterSelect currentCharacterId={characterId} currentCharacter={character} {...props}/>
        </div>
      </div>
    </div>

    <div class="card-body py-1 px-1">
      <div class="tab-content">
        <div class="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <CharacterEquipmentSelect characterId={characterId} character={character} {...props}/>
        </div>

        <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p class="card-text">
            DR: {100 * character.attributes.damageReduction}%
          </p>
          <p class="card-text">
            EVA: {100 * character.attributes.damageReduction}%
          </p>
        </div>

        <div class="tab-pane" id="contact" role="tabpanel" aria-labelledby="contact-tab">

        </div>
      </div>
    </div>

    <div class="card-footer py-1 px-1">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a class="nav-link active px-2 py-1" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Equipment</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Stats</a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 py-1" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Survivability</a>
        </li>
      </ul>
    </div>
  </div>;

const Characters = (props) =>
  <div class="row">
    {Object.keys(props.characters).map(characterId =>
      <Character characterId={characterId} character={props.characters[characterId]} {...props}/>
    )}
  </div>;

const data = {
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
      "154": { name: "Cosmic Shield", hasGemSlot: true, health: 67, attributes: { essenceFind: 0.03, magicBoost: 0.33 } },
      "142": { name: "Power Shield", hasGemSlot: true, health: 62, attack: 33, attributes: { } },
      "150": { name: "Stoplight Shield", hasGemSlot: true, health: 62, attributes: { healthRegen: 15 } },
      "167": { name: "Shield of the Divine", hasGemSlot: false, health: 57, attributes: { damageReduction: 0.19 } }
    },
    weapons: {
      "99": { name: "Aphotic Blade", isCharacterSpecific: true, hasGemSlot: false, attack: 5, attributes: { critChance: 0.40, critBonus: 0.50 } },
      "120": { name: "Skull Blade", hasGemSlot: false, attack: 33, attributes: { damageReduction: 0.19, critChance: 0.34, critBonus: 0.84 } },
      "103": { name: "Saber", hasGemSlot: false, attack: 26, attributes: { evade: 0.29, critChance: 0.39, critBonus: 0.59 } },
      "178": { name: "Iron Skillet", isCharacterSpecific: true, hasGemSlot: false, attack: 20, attributes: { } }
    },
    armors: {
      "143": { name: "Karuta", hasGemSlot: false, health: 54, attributes: { evade: 0.34 } },
      "162": { name: "Platinum Armor", hasGemSlot: false, health: 227, attributes: { damageReduction: 0.24, healthBonus: 0.14 } }
    },
    accessories: {
      "100": { name: "Phantasmal Claw", attributes: { } },
      "127": { name: "Dark Amulet", attributes: { stonReduction: 1.00, burnReduction: 1.00 } },
      "129": { name: "Silver Necklace", attributes: { damageReduction: 0.10, itemFind: 10 } },
      "130": { name: "Back Protector", attributes: { healthBonus: 0.10, backAttackReduction: 1.00 } }
    },
    gems: {
      "153": { name: "Pearl Gem", attributes: { healthBonus: 0.10, attackBonus: 0.10, magicBoost: 0.05 }, imageUrl: "https://static.wikia.nocookie.net/soda-dungeon-2/images/0/0e/Pearl_Gem.png" }
    }
  },
  relics: {
    Gold: { name: "Gold", level: 0, value: 1, type: "default" },
    HP: { name: "Health", level: 0, value: 5, type: "default" },
    MP: { name: "Mana", level: 0, value: 5, type: "default" },
    ATK: { name: "Attack", level: 0, value: 5, type: "default" },
    DarkLord: { name: "Dark Lord", level: 0, values: { HP: 2, MP: 2, ATK: 2 }, type: "class" }
  },
  pets: {
    "Cliff": { name: "Cliff", attributes: { damageReduction: 0.01 } }
  },
  characters: {
    "Nurse": {
      name: "Nurse", 
      equipment: {
        weaponSlots: { number: 1 },
        shieldSlots: { number: 1 },
        armorSlots: { number: 1 },
        accessorySlots: { number: 1 }
      },
      portrait: "./images/portraits/char_portrait_nurse_1.png",
      attributes: { damageReduction: 0.02 } 
    },
    "Thief": {
      name: "Thief",
      equipment: {
        weaponSlots: { number: 1 },
        shieldSlots: { number: 1 },
        armorSlots: { number: 1 },
        accessorySlots: { number: 1 }
      },
      portrait: "./images/portraits/char_portrait_thief_1.png",
      attributes: { }
    },
    "Blademaster": {
      name: "Blademaster",
      equipment: {
        weaponSlots: { number: 2 },
        shieldSlots: { number: 0 },
        armorSlots: { number: 1 },
        accessorySlots: { number: 1 }
      },
      portrait: "./images/portraits/char_portrait_dual_wield_1.png",
      attributes: { }
    },
    "DarkLord": {
      name: "Dark Lord",
      equipment: {
        weaponSlots: { number: 1, default: "99" },
        shieldSlots: { number: 0 },
        armorSlots: { number: 0 },
        accessorySlots: { number: 3 }
      },
      portrait: "./images/portraits/char_portrait_dark_lord_1.png",
      attributes: { } 
    },
    "Darkmage": {
      name: "Darkmage",
      equipment: {
        weaponSlots: { number: 1 },
        shieldSlots: { number: 1 },
        armorSlots: { number: 1 },
        accessorySlots: { number: 2 }
      },
      portrait: "./images/portraits/char_portrait_darkmage_1.png",
      attributes: { }
    },
    "Chef": {
      name: "Chef", 
      equipment: {
        weaponSlots: { number: 1, default: "178" },
        shieldSlots: { number: 0 },
        armorSlots: { number: 1 },
        accessorySlots: { number: 1 }
      },
      portrait: "./images/portraits/char_portrait_chef_1.png",
      attributes: { }
    }
  },
  team: {
    characters: {
      "1": { characterId: "Nurse", equipment: { weapons: [ ], armors: [ ], shields: [ ], accessories: [ ] } },
      "2": { characterId: "Thief", equipment: { weapons: [ ], armors: [ ], shields: [ ], accessories: [ ] } },
      "3": { characterId: "Blademaster", equipment: { weapons: [ ], armors: [ ], shields: [ ], accessories: [ ] } },
      "4": { characterId: "Blademaster", equipment: { weapons: [ ], armors: [ ], shields: [ ], accessories: [ ] } },
      "5": { characterId: "Blademaster", equipment: { weapons: [ ], armors: [ ], shields: [ ], accessories: [ ] } },
      "6": { characterId: "DarkLord", equipment: { weapons: [ ], armors: [ ], shields: [ ], accessories: [ ] } }
    },
    petId: 1
  }
};

app({
  init: data,
  view: state =>
    <main>
      <div class="container">
        <Characters {...state}/>
      </div>
    </main>,
  node: document.getElementById("app")
});
