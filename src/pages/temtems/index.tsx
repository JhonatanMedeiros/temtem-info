import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";

import api from "../../services/api";

import { Temtem } from "../../models/temtem";

import { ContainerHome } from "../../styles/pages/Home";

import Header from "../../components/Header";
import Creatures from "../../components/Creatures";
import Footer from "../../components/Footer";

type TemtemsPageProps = {
  creatures: Temtem[];
};

const TemtemsPage: React.FC<TemtemsPageProps> = props => {
  return (
    <>
      <Head>
        <title>List of all Creatures</title>
      </Head>
      <Header />
      <Container>
        <Row>
          <Col>
            <ContainerHome>
              <Creatures creatures={props.creatures} />
              <Footer />
            </ContainerHome>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("temtems");
  return {
    props: {
      creatures: data
    },
    revalidate: 60 * 60 * 6 // 6 hour
  };
};

export default TemtemsPage;
