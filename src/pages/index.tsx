import React from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

import { ContainerHome } from "../styles/pages/Home";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Temtem Info</title>
      </Head>
      <Header />
      <Container>
        <Row>
          <Col>
            <ContainerHome>
              <h1>Index</h1>
              <Footer />
            </ContainerHome>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
