/* eslint-disable no-undef, no-unused-vars */
import { app } from "hyperapp";
import h from './hyperappjsx';
import data from './data2';

const TeamCharacterHeader = ({character, ...props}) =>
  <div class="card-header bg-dark">
    <ul class="nav nav-tabs nav-justified card-header-tabs">
      <TeamCharacterHeaderNavItem 
        href={`#${character.id}-character`}
        isActive={true} 
        icon={getItemImage(character.itemId, props)}
        {...props}/>

      {getTeamCharacterSlots(character).map(slot =>
        <TeamCharacterHeaderNavItem 
          href={`#${character.id}-${slot.id}`} 
          isActive={false} 
          icon={getItemImage(slot.itemId, props)}
          {...props}/>
      )}

      <TeamCharacterHeaderNavItem 
        href={`#${character.id}-allsight`}
        isActive={false} 
        icon={props.images.upgrades.allsight}
        {...props}/>
    </ul>
  </div>

const TeamCharacterHeaderNavItem = ({href, isActive, icon, ...props}) =>
  <li class="nav-item">
    <a class={["nav-link", "px-0", {active: isActive}]} data-toggle="tab" href={href}>
      <img class="rounded" src={icon} alt="" height="40" />
    </a>
  </li>;

const TeamCharacterBody = ({character, ...props}) =>
  <div class="card-body">
    <div class="tab-content">
      <TeamCharacterBodyTabPane
        id={`${character.id}-character`}
        isActive={true}
        type="character"
        itemData={getItemsForType("character", props)}
        {...props}/>

      {getTeamCharacterSlots(character).map(slot =>
        <TeamCharacterBodyTabPane
          id={`${character.id}-${slot.id}`}
          isActive={false}
          type={slot.type}
          itemData={getItemsForType(slot.type, props)}
          {...props}/>
      )}

      <TeamCharacterBodyTabPaneAllsight
        id={`${character.id}-allsight`}
        itemData={getItem(character.itemId, props)}
        {...props}/>
    </div>
  </div>;

const TeamCharacterBodyTabPane = ({id, isActive, type, itemData, ...props}) =>
  <div class={["tab-pane", "fade", {show: isActive, active: isActive}]} id={id}>
    <TeamCharacterBodyTabPaneInputGroup
      icon={getIconForType(type, props)} 
      itemData={itemData} 
      class={["mb-3"]} 
      {...props}/>
    
    {!/character|accessory/.test(type) && 
      <TeamCharacterBodyTabPaneInputGroup 
        icon={getIcon("craft_resource", props)} 
        itemData={getItemsForType("resource_ore", props)} 
        class={["mb-3"]} 
        {...props}/>}

    {!/character|accessory/.test(type) && 
      <TeamCharacterBodyTabPaneInputGroup 
        icon={getIcon("craft_gem", props)} 
        itemData={getItemsForType("gem", props)} 
        {...props}/>}
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

const TeamCharacterBodyTabPaneAllsight = ({id, itemData, ...props}) =>
  <div class="tab-pane fade" id={id}>
    <table class="table table-striped table-sm">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Stat</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {getStats(itemData)
          .filter(stat => !props.statTypes[stat.id].isOptional)
          .map(stat =>
            <tr>
              <th class="table-secondary">{props.statTypes[stat.id].name}</th>
              <td>{formatStat(stat, props)}</td>
            </tr>
          )
        }
      </tbody>
      <tbody>
        <tr class="table-dark clickable" data-toggle="collapse" data-target={`#${id}-stats-other`}>
          <th colspan="2">Other Stats</th>
        </tr>
      </tbody>
      <tbody class="collapse" id={`${id}-stats-other`}>
        {getStats(itemData)
          .filter(stat => props.statTypes[stat.id].isOptional)
          .map(stat =>
            <tr>
              <th class="table-secondary">{props.statTypes[stat.id].name}</th>
              <td>{formatStat(stat, props)}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>;

const TeamCharacter = ({character, ...props}) =>
  <div class="card">
    <TeamCharacterHeader character={character} {...props}/>
    <TeamCharacterBody character={character} {...props}/>
  </div>;

const Team = ({team, ...props}) =>
  <div class="row row-cols-1 row-cols-lg-2">
    {getTeamCharacters(team).map(character =>
      <div class="col mb-4">
        <TeamCharacter character={character} {...props}/>
      </div>
    )}
  </div>;


app({
  init: data,
  view: (state, actions) =>
    <main>
      <div class="container">
        <Team team={getTeam("default", state)} {...state}/>
      </div>
    </main>,
  node: document.getElementById("app")
});

const getIcon = (id, state) => state.images.icons[id];
const getItem = (id, state) => state.items[id];
const getItemImage = (id, state) => state.images.items[id];

const getTeam = (id, state) => ({id, ...state.teams[id]});

// TODO: Find a different way of doing this
const getTeamCharacters = (team) =>
  Object
    .keys(team.slots)
    .filter(id => /^character/.test(id))
    .map(id => ({id, ...team.slots[id]}));

const getTeamCharacterSlots = (character) =>
  Object
    .keys(character.slots)
    .map(id => ({id, ...character.slots[id]}));

const getItemsForType = (type, state) =>
  Object
    .keys(state.items)
    .map(id => ({id, ...state.items[id]}))
    .filter(item => item.type === type);

const getIconForType = (type, state) => {
  switch (type) {
    case "character": return state.images.portraits["mystery"];
    case "weapon": return state.images.icons["craft_weapon"];
    case "shield": return state.images.icons["craft_shield"];
    case "armor": return state.images.icons["craft_armor"];
    case "accessory": return state.images.icons["craft_accessory"];
    case "gem": return state.images.icons["craft_gem"];
    case "resource_ore": return state.images.icons["craft_resource"];
    default: return null;
  }
};

const formatStat = (stat, state) => {
  switch (state.statTypes[stat.id].valueType) {
    case "percentage": return `${(100 * stat.value).toFixed(2)}%`;
    default: return stat.value;
  }
};

const getStats = (item) =>
  Object
    .keys(item.stats)
    .map(id => ({id, value: item.stats[id]}));