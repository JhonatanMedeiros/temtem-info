import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

import { ContainerHome } from "../styles/pages/Home";
import Creatures from "../components/Creatures";
import Footer from "../components/Footer";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ContainerHome>
            <Title>Temtem Info</Title>
            <Creatures />
            <Footer />
          </ContainerHome>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
