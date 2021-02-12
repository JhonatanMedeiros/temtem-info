import React from "react";

import { Temtem } from "../../models/temtem";
import { useFetch } from "../../hooks/useFetch";

import {
  Container,
  Creature,
  CreatureImage,
  CreatureNumber,
  CreatureName,
  CreatureTypes
} from "./styles";

const Creatures: React.FC = () => {
  const { data } = useFetch<Temtem[]>("temtems");

  if (!data) {
    return (
      <Container>
        <p>Carregando...</p>
      </Container>
    );
  }

  return (
    <Container>
      {data.map(creature => (
        <Creature key={creature.number} href={creature.wikiUrl} target="_blank">
          <CreatureImage src={creature.wikiPortraitUrlLarge} />
          <CreatureNumber>{creature.number}</CreatureNumber>
          <CreatureName>{creature.name}</CreatureName>
          <CreatureTypes>
            {creature.types.map(type => (
              <li className={type} key={type}>
                {type}
              </li>
            ))}
          </CreatureTypes>
        </Creature>
      ))}
    </Container>
  );
};

export default Creatures;
