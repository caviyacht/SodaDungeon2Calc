import React from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import { useDataContext } from "../contexts/DataContext";

export default ({player, ...props}) => {
  const dataContext = useDataContext();
  
  return (
    <Card>
      <Card.Body>
        <InputGroup className={["mb-3"]}>
          <InputGroup.Prepend>
            <span className="mr-2" style={{
              width: "38px",//"calc(1.5em + 1rem + 8px)",
              height: "38px",//"calc(1.5em + 1rem + 8px)",
              backgroundImage: `url(${dataContext.images.icons.stairs})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 50%"
            }}/>
          </InputGroup.Prepend>

          <FormControl type="number" min="1" value={player.floor} />
        </InputGroup>
      </Card.Body>
    </Card>
  );
}