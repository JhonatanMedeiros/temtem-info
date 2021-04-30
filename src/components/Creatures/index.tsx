import React from "react";
import Link from "next/link";

import { Temtem } from "../../models/temtem";

import {
  Container,
  Creature,
  CreatureImage,
  CreatureNumber,
  CreatureName,
  CreatureTypes
} from "./styles";

type Props = {
  creatures: Temtem[];
};

const Creatures: React.FC<Props> = ({ creatures }) => {
  return (
    <Container>
      {creatures.map(creature => (
        <Link
          key={creature.number}
          href={`/temtems/${encodeURIComponent(creature.number)}`}
          passHref
        >
          <Creature>
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
        </Link>
      ))}
    </Container>
  );
};

export default Creatures;
