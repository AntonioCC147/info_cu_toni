import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Web from '../assets/images/Web.png';
import HTML from '../assets/images/HTML.png';
import CSS from '../assets/images/CSS.png';
import JS from '../assets/images/JS.png';
import Matrix from '../assets/images/Matrix.png';

import WebDev from '../assets/icons/WebDev.png';
import Design from '../assets/icons/Design.png';
import SEO from '../assets/icons/SEO.png';
import Analiza from '../assets/icons/Analiza.png';
import Performanta from '../assets/icons/Performanta.png';
import TandD from '../assets/icons/TandD.png';

import Footer from '../components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import '../css/tehnologii.css';
import '../css/skill.css';
import '../css/index.css';
import '../css/footer.css';

export default function Acasa() {
    return (
        <Layout>
            <Container fluid className="indexBackground">
                <Row>
                    <Col sm={12} lg={6}>
                        <p className="indexText1">Învață Tehnologii Web și creează-ți propria lume!</p>
                        <p className="indexText2">Cursul de Tehnologii Web este conceput special pentru studenții care doresc să își înceapă aventura în lumea dezvoltării aplicațiilor web și să creeze propriile proiecte folosind HTML, CSS și JavaScript. Pe acest site veți putea găsi resurse utile, dar și informații referitoare la ce veți învăța și cum vă veți putea folosi de aceste resurse pentru a vă transforma ideile în realitate.</p>
                        <a href="/echipa"><p className="indexButton">Află cine suntem noi &rarr;</p></a>
                    </Col>
                    <Col sm={12} lg={6} className="text-center d-flex align-items-center justify-content-center">
                        <img src={Web} className="indexImage" alt="Web"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="tehnologiiBackground">
                <Row>
                    <img src={Matrix} className="matrixImage" alt="Matrix"/>
                    <p className="tehnologiiText1">Module</p>
                    <p className="tehnologiiText2">Cursul de împarte în 3 module menite să ajute la dezvoltarea și întreprinderea abilităților practice în ceea ce privește dezvoltarea de aplicații web</p>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <div className="tehnologiiCard">
                        <img src={HTML} className="cardTehnologiiImage" alt="HTML"/>
                        <p className="cardTehnologiiTitle">HyperText Markup Language<br/>(HTML)</p>
                        <p className="cardTehnologiiDescription">Învață structura paginilor web cu HTML: elemente, tag-uri și atribute esențiale pentru crearea conținutului online</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <div className="tehnologiiCard">
                        <img src={CSS} className="cardTehnologiiImage" alt="CSS"/>
                        <p className="cardTehnologiiTitle">Cascading Style Sheets<br/>(CSS)</p>
                        <p className="cardTehnologiiDescription">Descoperă stilizarea paginilor web cu CSS: culori, fonturi și tehnici avansate de design</p>
                        </div>
                    </Col>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <div className="tehnologiiCard">
                        <img src={JS} className="cardTehnologiiImage" alt="JS"/>
                        <p className="cardTehnologiiTitle">JavaScript<br/>(JS)</p>
                        <p className="cardTehnologiiDescription">Dezvoltă interactivitatea paginilor web cu JavaScript: variabile, funcții, evenimente și manipularea DOM-ului</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="skillBackground">
                <p className="skillText1">Skill-uri</p>
                <p className="skillText2">Cursul de Tehnologii Web ajută la dobândirea mai multor skill-uri, atât tehnice, cât și nu numai</p>
                <Row className="margin-auto">
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="skillCard">
                            <img src={WebDev} className="cardSkillImage" alt="WebDev"/>
                            <p className="cardSkillTitle">Web Development</p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="skillCard">
                            <img src={Design} className="cardSkillImage" alt="WebDev"/>
                            <p className="cardSkillTitle">UI / UX</p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="skillCard">
                            <img src={SEO} className="cardSkillImage" alt="WebDev"/>
                            <p className="cardSkillTitle">SEO</p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="skillCard">
                            <img src={Analiza} className="cardSkillImage" alt="WebDev"/>
                            <p className="cardSkillTitle">Analiză</p>
                        </div>
                    </Col>
                    <Col lg={6} md={4} sm={6} xs={12}>
                        <div className="skillCard">
                            <img src={Performanta} className="cardSkillImage" alt="WebDev"/>
                            <p className="cardSkillTitle">Performanță</p>
                        </div>
                    </Col>
                    <Col lg={6} md={4} sm={6} xs={12}>
                        <div className="skillCard">
                            <img src={TandD} className="cardSkillImage" alt="WebDev"/>
                            <p className="cardSkillTitle">Testare & Depanare</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Layout>
    );
}