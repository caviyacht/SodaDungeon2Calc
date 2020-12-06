import React from "react";
import { FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { playerEntityLevelSelector } from "../selectors/playerEntityLevelSelector";
import FormGroupImage from "./FormGroupImage";

export default ({ value }) => {
  const setLevel = useSetRecoilState(playerEntityLevelSelector(value.id));

  const handleSetLevel = ({ target: { value } }) => setLevel(value);

  return (
    <div className="d-flex">
      <div className="mr-2" style={{flex: "0 0 70px"}}>
        <FormGroupImage src={value.image}/>
      </div>

      <FormGroup className="w-100">
        <FormLabel htmlFor={`relic-${value.id}`}>
          {value.displayName}
        </FormLabel>
        
        <InputGroup>
          <FormControl 
            id={`relic-${value.id}`} 
            type="number" 
            min="1" 
            max={value.maxLevel || 1000000}
            value={value.level} 
            onChange={handleSetLevel} />

          {value.hasOwnProperty("maxLevel") &&
            <InputGroup.Append>
              <InputGroup.Text className="bg-dark text-light">{"/" + value.maxLevel}</InputGroup.Text>
            </InputGroup.Append>
          }
        </InputGroup>
      </FormGroup>
    </div>
  );
};
