/* eslint-disable no-undef, no-unused-vars */
import { app } from "hyperapp";
import h from './hyperappjsx';
import data from './data';
import Team from './components/Team';

const getCharacterData = (characterId, props) => props.characters[characterId];
const getCharacterPortrait = (characterId, props) => getCharacterData(characterId, props).images.portraits.primary;

const getIcon = (id, props) => props.ui.icons[id];

const TeamCharacterHeaderNavItem = ({href, isActive, icon, ...props}) =>
  <li class="nav-item">
    <a class={["nav-link", "px-0", {active: isActive}]} data-toggle="tab" href={href}>
      <img class="rounded" src={icon} alt="" height="40" />
    </a>
  </li>;

const getItemImageOrDefault = (itemId, defaultImage, props) => itemId ? props.images.items[itemId] : defaultImage;

const TeamCharacterHeader = ({id, character, ...props}) =>
  <div class="card-header bg-dark">
    <ul class="nav nav-tabs nav-fill card-header-tabs">
      <TeamCharacterHeaderNavItem 
        href={`#${id}-character`}
        isActive={true} 
        icon={getCharacterPortrait(character.characterId, props)}
        {...props}/>

      {character.equipmentSlots.map((slot, slotNumber) =>
        <TeamCharacterHeaderNavItem 
          href={`#${id}-${slot.type}-${slotNumber}`} 
          isActive={false} 
          icon={getItemImageOrDefault(slot.itemId, getIcon(`craft_${slot.type}`, props), props)}
          {...props}/>
      )}
    </ul>
  </div>

const getItemDataForSlot = (slot, props) => props.items[props.equipmentSlotTypes[slot.type].itemsPath];

const TeamCharacterBody = ({id, character, ...props}) =>
  <div class="card-body">
    <div class="tab-content">
      <TeamCharacterBodyTabPane
        id={`${id}-character`}
        isActive={true}
        type="character"
        itemData={props.characters}
        {...props}/>

      {character.equipmentSlots.map((slot, slotNumber) =>
        <TeamCharacterBodyTabPane
          id={`${id}-${slot.type}-${slotNumber}`}
          isActive={false}
          type={slot.type}
          itemData={getItemDataForSlot(slot, props)}
          {...props}/>
      )}

      <TeamCharacterBodyTabPaneStats
        id={`${id}-stats`}
        character={character}
        characterData={props.characters[character.characterId]}
        {...props}/>
    </div>
  </div>;

const TeamCharacterBodyTabPaneStats = ({id, character, characterData, ...props}) =>
  <div class="tab-pane fade" id={id}>
    <table class="table table-striped table-sm">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Stat</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(characterData.stats).filter(statId => {
          return !props.stats[statId].isOptional;
        }).map(statId =>
          <tr>
            <th class="table-secondary">{props.stats[statId].name}</th>
            <td>{props.stats[statId].type === "number"
              ? characterData.stats[statId]
              : `${(characterData.stats[statId] * 100).toFixed(2)}%`
            }</td>
          </tr>
        )}
      </tbody>
    </table>
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

const TeamCharacterBodyTabPane = ({id, isActive, type, itemData, ...props}) =>
  <div class={["tab-pane", "fade", {show: isActive, active: isActive}]} id={id}>
    <TeamCharacterBodyTabPaneInputGroup icon={getInputGroupIconForType(type, props)} itemData={itemData} class={["mb-3"]} {...props}/>
    
    {!/character|accessory/.test(type) && <TeamCharacterBodyTabPaneInputGroup icon={getIcon("craft_resource", props)} itemData={props.items.ores} class={["mb-3"]} {...props}/>}
    {!/character|accessory/.test(type) && <TeamCharacterBodyTabPaneInputGroup icon={getIcon("craft_gem", props)} itemData={props.items.gems} {...props}/>}
  </div>;

const TeamCharacterFooter = ({id, character, props}) =>
  <div class="card-footer px-2">
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a class="nav-link active px-0" data-toggle="pill" href={`#${id}-equipment`}>Equipment</a>
      </li>

      <li class="nav-item">
        <a class="nav-link px-0" data-toggle="pill" href={`#${id}-stats`}>Stats</a>
      </li>

      <li class="nav-item">
        <a class="nav-link px-0" data-toggle="pill" href={`#${id}-survivability`}>Survivability</a>
      </li>
    </ul>
  </div>;

const TeamCharacter = ({id, character, ...props}) =>
  <div class="card">
    <TeamCharacterHeader id={id} character={character} {...props}/>
    <TeamCharacterBody id={id} character={character} {...props}/>
    <TeamCharacterFooter id={id} character={character} {...props}/>
  </div>;

app({
  init: data,
  view: (state, actions) =>
    <main>
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2">
          {state.teams[0].characters.map((character, characterNumber) =>
            <div class="col mb-4">
              <TeamCharacter 
                id={`${character.characterId}-${characterNumber}`} 
                character={character} 
                {...state}/>
            </div>
          )}
        </div>
      </div>
    </main>,
  node: document.getElementById("app")
});
