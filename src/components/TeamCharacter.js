import React from "react";
import { Card, FormControl, InputGroup, Nav, Tab } from "react-bootstrap";
import { DataContext } from "../contexts/DataContext";
import { TeamCharacterContext } from "../contexts/TeamCharacterContext";
import ItemStats from "./ItemStats";

const ItemNavItem = ({eventKey, itemId, ...props}) => {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey} className={["px-0"]}>
        <DataContext.Consumer>
          {context =>
            <img class="rounded" src={getItemImage(itemId, context)} alt={itemId} height="40"/>
          }
        </DataContext.Consumer>
      </Nav.Link>
    </Nav.Item>
  );
}

const SlotItemTabPane = ({eventKey, slotId, itemId, ...props}) => {
  return (
    <Tab.Pane eventKey={eventKey}>
      <SlotItemInputGroup slotId={slotId}/>

      {/* TODO: This seems wrong */}
      {props.children}

      <ItemStats id={eventKey} itemId={itemId}/>
    </Tab.Pane>
  );
}

const SlotItemInputGroup = ({slotId, ...props}) => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text className={["bg-dark"]}>
          <DataContext.Consumer>
            {dataContext =>
              <img src={getIconForSlot(slotId, dataContext)} style={{width: "20px", height: "20px"}} alt=""/>
            }
          </DataContext.Consumer>
        </InputGroup.Text>
      </InputGroup.Prepend>

      <SlotItemSelect slotId={slotId}/>
    </InputGroup>
  );
}

const SlotItemSelect = ({slotId, ...props}) => {
  return (
    <FormControl as="select">
      <option value="">{`<Empty>`}</option>

      <DataContext.Consumer>
        {dataContext =>
          getItemsForSlot(slotId, dataContext).map(item =>
            <option value={item.id}>{item.name}</option>
          )
        }
      </DataContext.Consumer>
    </FormControl>
  );
}

export default ({teamCharacter, ...props}) => {
  return (
    <TeamCharacterContext.Provider value={teamCharacter}>
      <Card>
        <Tab.Container defaultActiveKey={teamCharacter.id}>
          <Card.Header className={["bg-dark"]}>
            <Nav justify variant="tabs">
              <ItemNavItem eventKey={teamCharacter.id} itemId={teamCharacter.itemId}/>

              {getSlots(teamCharacter).map(slot =>
                <ItemNavItem eventKey={`${teamCharacter.id}-${slot.id}`} itemId={slot.itemId}/>
              )}

              <ItemNavItem eventKey={`${teamCharacter.id}-allsight`} itemId={"allsight"}/>
            </Nav>
          </Card.Header>

          <Card.Body>
            <Tab.Content>
              <SlotItemTabPane eventKey={teamCharacter.id} slotId={teamCharacter.id} itemId={teamCharacter.itemId}/>

              {getSlots(teamCharacter).map(slot =>
                <SlotItemTabPane eventKey={`${teamCharacter.id}-${slot.id}`} slotId={slot.id} itemId={slot.itemId}>
                  {getSlots(slot).map(slot =>
                    <SlotItemInputGroup slotId={slot.id}/>
                  )}
                </SlotItemTabPane>
              )}

              <Tab.Pane eventKey={`${teamCharacter.id}-allsight`}>
                <ItemStats id="" itemId={teamCharacter.itemId}/>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Tab.Container>
      </Card>
    </TeamCharacterContext.Provider>
  );
}

const getItemImage = (id, context) => context.images.items[id];

const getSlots = (item) =>
  Object
    .keys(item.slots)
    .map(id => ({id, ...item.slots[id]}));

// TODO: This is the worst; find another way.
const getIconForSlot = (id, context) => {
  if (/^(?:character|pet)/.test(id)) {
    return context.images.portraits["mystery"];
  }

  if (/^weapon/.test(id)) {
    return context.images.icons["craft_weapon"];
  }

  if (/^shield/.test(id)) {
    return context.images.icons["craft_shield"];
  }

  if (/^armor/.test(id)) {
    return context.images.icons["craft_armor"];
  }

  if (/^accessory/.test(id)) {
    return context.images.icons["craft_accessory"];
  }

  if (/^gem/.test(id)) {
    return context.images.icons["craft_gem"];
  }

  if (/^resource_ore/.test(id)) {
    return context.images.icons["craft_resource"];
  }

  return null;
};

const getIconForType = (type, context) => {
  switch (type) {
    case "pet":
    case "character":
    case "character_special":
      return context.images.portraits["mystery"];

    case "weapon":
    case "weapon_special":
      return context.images.icons["craft_weapon"];

    case "shield": return context.images.icons["craft_shield"];
    case "armor": return context.images.icons["craft_armor"];
    case "accessory": return context.images.icons["craft_accessory"];
    case "gem": return context.images.icons["craft_gem"];
    case "resource_ore": return context.images.icons["craft_resource"];

    default: return null;
  }
};

const getItemsForSlot = (id, context) => {
  let itemType = context.slotTypes[id].itemType;

  if(!Array.isArray(itemType)) {
    itemType = [itemType];
  }

  let itemTypeLookup = itemType.reduce((o, value) => {
    o[value] = true;
    
    return o;
  }, { });

  return Object
    .keys(context.items)
    .map(id => ({id, ...context.items[id]}))
    .filter(item => itemTypeLookup[item.type]);
};
