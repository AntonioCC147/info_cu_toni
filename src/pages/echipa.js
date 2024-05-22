import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../components/footer';

import Avatar from '../assets/images/Avatar.png';
import Matrix from '../assets/images/Matrix.png';
import GitHub from '../assets/icons/GitHub.png';

import '../css/echipa.css';

export default function Echipa() {
    return (
        <Layout>
            <Container fluid className="echipaBackground">
                <img src={Matrix} className="matrixImage" alt="Matrix"/>
                <p className="echipaText1">Echipă</p>
                <p className="echipaText2">Echipa Tehnologii Web a seriilor AA / AC din cadrul Facultății de Automatică și Calculatoare din București, 2024-2025</p>
                <Row>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-1 order-1">
                        <img src={Avatar} className="echipaImage" alt="Avatar"/>
                    </Col>
                    <Col lg={8} className="order-lg-2 order-2">
                        <p className="echipaTitle">Hossu Daniela</p>
                        <p className="echipaSubTitle">Profesor de Tehnologii Web la seriile AA și AC</p>
                        <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="order-lg-1 order-2">
                        <p className="echipaTitle">Ciuciulete Mihai</p>
                        <p className="echipaSubTitle">Mentor Web Scrapping & Student în anul IV</p>
                        <a class="echipaContainer" href="/">
                            <img src={GitHub} className="gitHubImage" alt="GitHub"/>
                            <span className="echipaLink">GitHub</span>
                        </a>
                        <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Col>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-2 order-1">
                        <img src={Avatar} className="echipaImage" alt="Avatar"/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-1 order-1">
                        <img src={Avatar} className="echipaImage" alt="Avatar"/>
                    </Col>
                    <Col lg={8} className="order-lg-2 order-2">
                        <p className="echipaTitle">Crantea Antonio-Cristian</p>
                        <p className="echipaSubTitle">Mentor FrontEnd Developer cu React & Student în anul III</p>
                        <a class="echipaContainer" href="/">
                            <img src={GitHub} className="gitHubImage" alt="GitHub"/>
                            <span className="echipaLink">GitHub</span>
                        </a>
                        <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="order-lg-1 order-2">
                        <p className="echipaTitle">Hampi Rareș-Marian</p>
                        <p className="echipaSubTitle">Mentor BackEnd Developer cu React & Student în anul III</p>
                        <a class="echipaContainer" href="/">
                            <img src={GitHub} className="gitHubImage" alt="GitHub"/>
                            <span className="echipaLink">GitHub</span>
                        </a>
                        <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </Col>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-2 order-1">
                        <img src={Avatar} className="echipaImage" alt="Avatar"/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Layout>
    );
}