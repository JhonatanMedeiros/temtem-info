import styled from "styled-components";

export const Container = styled.div`
  background: #fdb260;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  min-height: 300px;
  width: 100%;
`;

export const Creature = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 15px;
  width: 14.28%;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;

  &:hover {
    background-color: #fcc56b;
  }
`;

export const CreatureImage = styled.img`
  width: 85px;
  height: 85px;
  background: #fdb260;
  padding: 4px;
  box-shadow: inset 0 0 0 4px #f99e3a;
  border: 2px solid #ff9017;
  border-radius: 100px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export const CreatureNumber = styled.h4`
  font-size: 14px;
  color: #f99324;
  text-align: center;
  margin-top: 15px;
  font-weight: bold;
`;

export const CreatureName = styled.h2`
  color: #e5ebef;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3em;
  margin: 5px 0 8px;
  text-align: center;
  transition: color 0.3s;
`;

export const CreatureTypes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  li + li {
    &:before {
      content: "·";
      margin: 0 5px;
    }
  }

  li {
    font-weight: bold;
    &.Digital {
      color: #a4c0c1;
    }
    &.Water {
      color: #45cbff;
    }
    &.Toxic {
      color: #5c565c;
    }
    &.Nature {
      color: #adde77;
    }
    &.Wind {
      color: #08fab3;
    }
    &.Neutral {
      color: #e6f7f7;
    }
    &.Earth {
      color: #ba795c;
    }
    &.Cristal {
      color: #ea4a68;
    }
    &.Melee {
      color: #fa9260;
    }
    &.Mental {
      color: #c369a3;
    }
    &.Fire {
      color: #e85c4e;
    }
    &.Electric {
      color: #ffe174;
    }
  }
`;
