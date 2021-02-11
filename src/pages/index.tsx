import React from "react";
import styled from "styled-components";

import { Container } from "../styles/pages/Home";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Temtem Info</Title>
      <p>Em breve</p>
    </Container>
  );
};

export default Home;
