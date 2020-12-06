import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playerEntityLevelSelector } from "../selectors/playerEntityLevelSelector";
import { playerEntitySelector } from "../selectors/playerEntitySelector";
import FormGroupImage from "./FormGroupImage";

// TODO: This feels wrong to accept two arguments like this.
export default ({ id, value, controlType = "text" }) => {
  const entity = value || useRecoilValue(playerEntitySelector(id));
  const setLevel = useSetRecoilState(playerEntityLevelSelector(id || value.id));

  const handleSetLevel = ({ target: { value } }) => setLevel(value);

  const control = controlType === "select"
    ? <EntityLevelSelect entity={entity} onChange={handleSetLevel} />
    : <EntityLevelInput entity={entity} onChange={handleSetLevel} />

  return (
    <div className="d-flex">
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={entity.image}/>
      </div>

      <Form.Group controlId={entity.id} className="w-100">
        <Form.Label>
          {entity.displayName}
        </Form.Label>
        
        <InputGroup>
          {control}
          
          {entity.hasOwnProperty("maxLevel") &&
            <InputGroup.Append>
              <InputGroup.Text className="bg-dark text-light">{"/" + entity.maxLevel}</InputGroup.Text>
            </InputGroup.Append>
          }
        </InputGroup>
      </Form.Group>
    </div>
  );
};

const EntityLevelInput = ({ entity, onChange }) => {
  return (
    <Form.Control  
      type="number" 
      min="1" 
      max={entity.maxLevel || 1000000}
      value={entity.level} 
      onChange={onChange} />
  );
};

const EntityLevelSelect = ({ entity, onChange }) => {
  return (
    <Form.Control as="select" defaultValue={entity.level} onChange={onChange}>
      {[...Array(entity.maxLevel + 1).keys()].map(level =>
        <option key={level} value={level}>{level}</option>
      )}
    </Form.Control>
  );
};
