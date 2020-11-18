/* eslint-disable no-undef, no-unused-vars */
import { app } from "hyperapp";
import h from './hyperappjsx';
import data from './data';
import Team from './components/Team';

const getCharacterData = (characterId, props) => props.characters[characterId];
const getCharacterPortrait = (characterId, props) => getCharacterData(characterId, props).images.portraits.primary;

const getEquipment = (type, props) => 
  type === "weapon"
    ? props.items.weapons
    : type === "shield"
      ? props.items.shields
      : type === "armor"
        ? props.items.armors
        : props.items.accessories;

const getIcon = (id, props) => props.ui.icons[id];
const getPotrait = (id, props) => props.ui.portraits[id];

const TeamCharacterHeaderNavItem = ({href, isActive, icon, ...props}) =>
  <li class="nav-item">
    <a class={["nav-link", {active: isActive}]} data-toggle="tab" href={href}>
      <img src={icon} alt="" height="40" />
    </a>
  </li>;

const getEquipmentSlot = (character, type) => character.equipmentSlots.filter(slot => slot.type === type)[0];
const getEquippedWeaponId = (character) => getEquipmentSlot(character, "weapon").itemId;
const getEquippedShieldId = (character) => getEquipmentSlot(character, "shield").itemId;
const getEquippedArmorId = (character) => getEquipmentSlot(character, "armor").itemId;
const getEquippedAccessoryId = (character) => getEquipmentSlot(character, "accessory").itemId;

const getItemImageOrDefault = (itemId, defaultImage, props) => itemId ? props.images.items[itemId] : defaultImage;

const TeamCharacterHeader = ({character, ...props}) =>
  <div class="card-header bg-dark">
    <ul class="nav nav-tabs card-header-tabs">
      <TeamCharacterHeaderNavItem 
        href="#character" 
        isActive={true} 
        icon={getCharacterPortrait(character.characterId, props)}
        {...props}/>

      {character.equipmentSlots.map((slot, slotNumber) =>
        <TeamCharacterHeaderNavItem 
          href={`#${slot.type}`} 
          isActive={false} 
          icon={getItemImageOrDefault(slot.itemId, getIcon(`craft_${slot.type}`, props), props)}
          {...props}/>
      )}
    </ul>
  </div>

const TeamCharacterBody = ({character, ...props}) =>
  <div class="card-body">
    <div class="tab-content">
      <TeamCharacterBodyTabPane
        id="character"
        isActive={true}
        type="character"
        itemData={props.characters}
        groups={["default"]}
        {...props}/>

      <TeamCharacterBodyTabPane
        id="weapon"
        isActive={false}
        type="weapon"
        itemData={props.items.weapons}
        groups={["default", "resource", "gem"]}
        {...props}/>

      <TeamCharacterBodyTabPane
        id="shield"
        isActive={false}
        type="shield"
        itemData={props.items.shields}
        groups={["default", "resource", "gem"]}
        {...props}/>

      <TeamCharacterBodyTabPane
        id="armor"
        isActive={false}
        type="armor"
        itemData={props.items.armors}
        groups={["default", "resource"]}
        {...props}/>

      <TeamCharacterBodyTabPane
        id="accessory"
        isActive={false}
        type="accessory"
        itemData={props.items.accessories}
        groups={["default"]}
        {...props}/>
    </div>
  </div>;

const TeamCharacterBodyTabPaneInputGroup = ({icon, itemData, ...props}) =>
  <div class={["input-group", props.class]}>
    <div class="input-group-prepend">
      <span class="input-group-text bg-dark">
        <img src={icon} style={{width: "20px", height: "20px"}} alt="" width="20px" height="20px"/>
      </span>
    </div>
    <select class="form-control">
      <option value="">Empty</option>
      {Object.keys(itemData).map(key =>
        <option value={key}>{itemData[key].name}</option>
      )}
    </select>
  </div>;

const getInputGroupIconForType = (type, props) =>
  type === "character"
    ? props.ui.portraits["mystery"]
    : props.ui.icons[`craft_${type}`];

const getItemDataForType = (type, props) =>
  type === "character"
    ? props.characters
    : type === "weapon"
      ? props.items.weapons
      : type === "shield"
        ? props.items.shields
        : type === "armor"
          ? props.items.armors
          : type === "accessory"
            ? props.items.accessories
            : type === "gem"
              ? props.items.gems
              : type === "ore"
                ? props.items.ores
                : {};

const TeamCharacterBodyTabPane = ({id, isActive, type, itemData, groups, ...props}) =>
  <div class={["tab-pane", "fade", {show: isActive, active: isActive}]} id={id}>
    <TeamCharacterBodyTabPaneInputGroup icon={getInputGroupIconForType(type, props)} itemData={itemData} class={["mb-3"]} {...props}/>
    
    {!/character|accessory/.test(type) && <TeamCharacterBodyTabPaneInputGroup icon={getIcon("craft_resource", props)} itemData={props.items.ores} class={["mb-3"]} {...props}/>}
    {!/character|accessory/.test(type) && <TeamCharacterBodyTabPaneInputGroup icon={getIcon("craft_gem", props)} itemData={props.items.gems} {...props}/>}
  </div>;

const TeamCharacter = ({character, ...props}) =>
  <div class="card">
    <TeamCharacterHeader character={character} {...props}/>
    <TeamCharacterBody character={character} {...props}/>
  </div>;

app({
  init: data,
  view: (state, actions) =>
    <main>
      <div class="container">
        <div class="card-deck">
          {state.teams[0].characters.map(character =>
            <TeamCharacter character={character} {...state}/>
          )}
        </div>
      </div>
    </main>,
  node: document.getElementById("app")
});
