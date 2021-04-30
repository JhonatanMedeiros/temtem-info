import React from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Container } from "react-bootstrap";

import api from "../../services/api";

import { Temtem } from "../../models/temtem";

import Header from "../../components/Header";

type TemtemPageProps = {
  creature: Temtem;
};

const TemtemPage: React.FC<TemtemPageProps> = ({ creature }) => {
  return (
    <>
      <Head>
        <title>{creature.name} | Stats - Location - Evolution</title>
        <meta name="description" content={creature.gameDescription} />
      </Head>
      <Header />
      <Container>
        <h1>{creature.name}</h1>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await api.get(`temtems/${params.id}`);
  return {
    props: {
      creature: data
    }
  };
};

export default TemtemPage;
