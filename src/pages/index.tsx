import React from "react";
import styled from "styled-components";

import { Container } from "../styles/pages/Home";
import Creatures from "../components/Creatures";
import Footer from "../components/Footer";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Temtem Info</Title>
      <Creatures />
      <Footer />
    </Container>
  );
};

export default Home;
