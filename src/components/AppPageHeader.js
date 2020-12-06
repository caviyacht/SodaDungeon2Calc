import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const data = {
  "home": { 
    title: "Yet Another Soda Dungeon 2 Calculator", 
    subtitle: "I couldn't think of a longer name." 
  },
  "player": { title: "Player", subtitle: "This is you." },
  "teams": { title: "Teams", subtitle: "Where you're going, you're going to need some help." },
  "relics": { title: "Relics", subtitle: "You won't make it far without these." },
  "characters": { title: "Characters", subtitle: "You're not here to make friends." },
  "pets": { title: "Pets", subtitle: "Don't get too close, they might bite." },
  "items": { title: "Items", subtitle: "Weapons, shields, armor, oh my! (Coming Soon!)" }
};

export default ({ name }) => {
  const { title, subtitle } = data[name];

  return (
    <Jumbotron fluid className="py-1">
      <Container>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Container>
    </Jumbotron>
  );
};
