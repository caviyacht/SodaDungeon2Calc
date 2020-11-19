/* eslint-disable no-undef, no-unused-vars */
import { app } from "hyperapp";
import h from './hyperappjsx';
import data from './data2';

const TeamCharacterHeader = ({character, ...props}) =>
  <div class="card-header bg-dark">
    <ul class="nav nav-tabs nav-justified card-header-tabs">
      <TeamCharacterHeaderNavItem 
        itemId={character.itemId}
        href={`#${character.id}`}
        isActive={true} 
        {...props}/>

      {getSlots(character).map(slot =>
        <TeamCharacterHeaderNavItem 
          itemId={slot.itemId}
          href={`#${character.id}-${slot.id}`} 
          isActive={false} 
          {...props}/>
      )}

      <TeamCharacterHeaderNavItem 
        itemId="allsight"
        href={`#${character.id}-allsight`}
        isActive={false} 
        {...props}/>
    </ul>
  </div>

const TeamCharacterHeaderNavItem = ({itemId, href, isActive, ...props}) =>
  <li class="nav-item">
    <a class={["nav-link", "px-0", {active: isActive}]} data-toggle="tab" href={href}>
      <img class="rounded" src={getItemImage(itemId, props)} alt="" height="40" />
    </a>
  </li>;

const TeamCharacterBody = ({character, ...props}) =>
  <div class="card-body">
    <div class="tab-content">
      <TeamCharacterBodyTabPane
        id={`${character.id}`}
        slot={character}
        isActive={true}
        hasSlots={false}
        {...props}/>

      {getSlots(character).map(slot =>
        <TeamCharacterBodyTabPane
          id={`${character.id}-${slot.id}`}
          slot={slot}
          isActive={false}
          hasSlots={true}
          {...props}/>
      )}

      <TeamCharacterBodyTabPaneAllsight
        id={`${character.id}-allsight`}
        itemData={getItem(character.itemId, props)}
        {...props}/>
    </div>
  </div>;

const TeamCharacterBodyTabPane = ({id, slot, isActive, hasSlots, ...props}) =>
  <div class={["tab-pane", "fade", {show: isActive, active: isActive}]} id={id}>
    <TeamCharacterBodyTabPaneInputGroup
      icon={getIconForType(slot.type, props)} 
      itemData={getItemsForSlot(slot.id, props)} 
      class={["mb-3"]} 
      {...props}/>

    {hasSlots && getSlots(slot).map(slot =>
      <TeamCharacterBodyTabPaneInputGroup 
        icon={getIconForType(slot.type, props)} 
        itemData={getItemsForSlot(slot.id, props)} 
        class={["mb-3"]} 
        {...props}/>
    )}
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
        {itemData.map(item =>
          <option value={item.id}>{item.name}</option>
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

const getSlots = (item) =>
  Object
    .keys(item.slots)
    .map(id => ({id, ...item.slots[id]}));

const getItemsForSlot = (id, state) => {
  let itemType = state.slotTypes[id].itemType;

  if(!Array.isArray(itemType)) {
    itemType = [itemType];
  }

  let itemTypeLookup = itemType.reduce((o, value) => {
    o[value] = true;
    
    return o;
  }, { });

  return Object
    .keys(state.items)
    .map(id => ({id, ...state.items[id]}))
    .filter(item => itemTypeLookup[item.type]);
};

const getIconForType = (type, state) => {
  switch (type) {
    case "character":
    case "character_special":
      return state.images.portraits["mystery"];

    case "weapon":
    case "weapon_special":
      return state.images.icons["craft_weapon"];

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