import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Web from '../assets/images/Web.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';

export default function Home() {
  return (
    <Layout>
      <Container fluid className="indexBackground">
        <Row>
          <Col sm={12} lg={6}>
            <p className="indexText1">Bine ai venit la învățatul online...</p>
            <p className="indexText2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabo remagn ane aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <a href="/"><p className="indexButton">Read More &rarr;</p></a>
          </Col>
          <Col sm={12} lg={6} className="text-center">
            <img src={Web} className="indexImage" alt="Web"/>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
