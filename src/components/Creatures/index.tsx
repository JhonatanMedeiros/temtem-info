import React, { useEffect, useState } from "react";

import {
  Container,
  Creature,
  CreatureImage,
  CreatureNumber,
  CreatureName,
  CreatureTypes
} from "./styles";
import { Temtem } from "../../models/temtem";

const Creatures: React.FC = () => {
  const [creatures, setCreatures] = useState<Temtem[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/maael/temtem-api/master/data/knownTemtemSpecies.json"
    )
      .then(res => res.json())
      .then((response: Temtem[]) => {
        setCreatures(response.filter(c => c.wikiRenderStaticUrl));
      });
  }, []);

  return (
    <Container>
      {creatures.map(creature => (
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
