import React from "react";
import { Card, FormControl, InputGroup, Nav, Tab } from "react-bootstrap";
import ItemStats from "./ItemStats";

export default (props) => {
  return (
    <Card>
      <Tab.Container defaultActiveKey={props.slot.id}>
        <Card.Header className={["bg-dark"]}>
          <Nav justify variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey={props.slot.id} className={["px-0"]}>
                <img class="rounded" src={getItemImage(props.slot.itemId, props.data)} alt={props.slot.itemId} height="40"/>
              </Nav.Link>
            </Nav.Item>

            {getSlots(props.slot).map(slot =>
              <Nav.Item>
                <Nav.Link eventKey={`${props.slot.id}-${slot.id}`} className={["px-0"]}>
                  <img class="rounded" src={getItemImage(slot.itemId, props.data)} alt={slot.itemId} height="40"/>
                </Nav.Link>
              </Nav.Item>
            )}

            <Nav.Item>
              <Nav.Link eventKey={`${props.slot.id}-allsight`} className={["px-0"]}>
                <img class="rounded" src={getItemImage("allsight", props.data)} alt="allsight" height="40"/>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={props.slot.id}>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className={["bg-dark"]}>
                    <img src={getIconForType(props.slot.type, props.data)} style={{width: "20px", height: "20px"}} alt=""/>
                  </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl as="select">
                  <option value="">{`<Empty>`}</option>

                  {getItemsForSlot(props.slot.id, props.data).map(item =>
                    <option value={item.id}>{item.name}</option>
                  )}
                </FormControl>
              </InputGroup>
            </Tab.Pane>

            {getSlots(props.slot).map(slot =>
              <Tab.Pane eventKey={`${props.slot.id}-${slot.id}`}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text className={["bg-dark"]}>
                      <img src={getIconForType(slot.type, props.data)} style={{width: "20px", height: "20px"}} alt=""/>
                    </InputGroup.Text>
                  </InputGroup.Prepend>

                  <FormControl as="select">
                    <option value="">{`<Empty>`}</option>

                    {getItemsForSlot(slot.id, props.data).map(item =>
                      <option value={item.id}>{item.name}</option>
                    )}
                  </FormControl>
                </InputGroup>

                {getSlots(slot).map(slot =>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text className={["bg-dark"]}>
                        <img src={getIconForType(slot.type, props.data)} style={{width: "20px", height: "20px"}} alt=""/>
                      </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl as="select">
                      <option value="">{`<Empty>`}</option>

                      {getItemsForSlot(slot.id, props.data).map(item =>
                        <option value={item.id}>{item.name}</option>
                      )}
                    </FormControl>
                  </InputGroup>
                )}
              </Tab.Pane>
            )}

            <Tab.Pane eventKey={`${props.slot.id}-allsight`}>
              <ItemStats item={getItem(props.slot.itemId, props.data)} data={props.data}/>
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

const getItem = (id, state) => state.items[id];
const getItemImage = (id, state) => state.images.items[id];

const getSlots = (item) =>
  Object
    .keys(item.slots)
    .map(id => ({id, ...item.slots[id]}));

const getIconForType = (type, state) => {
  switch (type) {
    case "pet":
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
