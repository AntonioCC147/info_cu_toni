import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Feedback from './feedback';

import Matrix from '../assets/images/Matrix.png';
import Info from '../assets/icons/Info.png';
import Mate from '../assets/icons/Mate.png';
import Tehn from '../assets/icons/Tehn.png';

import '../css/meditatii.css';

export default function Meditatii() {
    const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refImage, inViewImage] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refFeedback, inViewFeedback] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refButton, inViewButton] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationText = useSpring({
        opacity: inViewText ? 1 : 0,
        transform: inViewText ? 'translateX(0%)' : 'translateX(-50%)',
        config: { duration: 750 },
    });

    const animationImage = useSpring({
        opacity: inViewImage ? 1 : 0,
        transform: inViewImage ? 'translateY(0%)' : 'translateY(10%)',
        config: { duration: 750 },
    });

    const animationTitleRight = useSpring({
        opacity: inViewTitle ? 1 : 0,
        transform: inViewTitle ? 'translateX(0%)' : 'translateX(10%)',
        config: { duration: 750 },
    });

    const animationFeedback = useSpring({
        opacity: inViewFeedback ? 1 : 0,
        transform: inViewFeedback ? 'translateY(0%)' : 'translateY(10%)',
        config: { duration: 750 },
    });

    const animationButton = useSpring({
        opacity: inViewButton ? 1 : 0,
        transform: inViewButton ? 'translateY(0%)' : 'translateY(10%)',
        config: { duration: 750 },
    });

    return (
        <Layout>
            <Container fluid className="meditatiiBackground">
                <img src={Matrix} className="matrixImage" alt="Matrix"/>
                <animated.div ref={refText} style={animationText}>
                    <p className="meditatiiText1">Meditații</p>
                    <p className="meditatiiText2">Dorești să devii o persoană mai bună și să-ți întreci limitele? Eu sunt aici să te ajut!</p>
                </animated.div>
                <animated.div ref={refImage} style={animationImage}>
                <Row className="text-center d-flex align-items-center justify-content-center">
                        <Col md={12} lg={6} xl={4}>
                            <div className="meditatiiContainer meditatiiContainerDown">
                                <div className="text-center d-flex align-items-center justify-content-center">
                                    <img src={Mate} style={{marginTop: "10px", width: "25%"}} alt="Mate"/>
                                </div>
                                <p className="meditatiiTitle">Matematică</p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Ce vom învăța: </span>Algebră, Geometrie și Analiză Matematică.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Pentru ce ne vom pregăti? </span>Nivel de Școală sau Examenul de Bacalaureat.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                                    desfășura doar în mediul online pe platforma Google Meet.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Descriere: </span>Pregătirile la Matematică se susțin în cea mai mare parte
                                    pentru Examenul de Bacalaureat, dar nu numai. Dacă îți dorești să iei o notă cât mai mare în examen,
                                    sau să îți îmbunătățești cunoștințele, acesta este momentul.
                                </p>
                                <br/>
                            </div>
                        </Col>
                        <Col md={12} lg={6} xl={4}>
                            <div className="meditatiiContainer">
                                <div className="text-center d-flex align-items-center justify-content-center">
                                    <img src={Info} style={{marginTop: "10px", width: "25%"}} alt="Info"/>
                                </div>
                                <p className="meditatiiTitle">Informatică</p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Ce vom învăța: </span>Limbajele de programare C / C++.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Pentru ce ne vom pregăti? </span>Nivel de Școală, Examenul
                                    de Bacalaureat sau Admiterea la Facultate.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                                    desfășura doar în mediul online pe platforma Google Meet.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Descriere: </span>Informatica reprezintă mai mult decât niște cod scris pe o
                                    foaie. Dacă dorești să-ți dezvolți și mai mult cunoștințele la Informatică, să iei Examenul de
                                    Bacalaureat sau pur și simplu să te descurci mai bine la școală, acesta este momentul perfect pentru
                                    a începe o colaborare.
                                </p>
                                <br/>
                            </div>
                        </Col>
                        <Col md={12} lg={6} xl={4}>
                            <div className="meditatiiContainer meditatiiContainerDown">
                                <div className="text-center d-flex align-items-center justify-content-center">
                                    <img src={Tehn} style={{marginTop: "10px", width: "25%"}} alt="Tehn"/>
                                </div>
                                <p className="meditatiiTitle">Programare</p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Ce vom învăța: </span>Bazele React, JavaScript, Bootstrap, HTML și CSS.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Pentru ce ne vom pregăti? </span>Începători, Nivel de Școală sau diverse Teme
                                    / Proiecte pentru Școală / Facultate.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Unde se vor desfășura sesiunile de pregătire? </span>Pregătirile se vor
                                    desfășura doar în mediul online pe platforma Google Meet.
                                </p>
                                <p className="meditatiiDescription">
                                    <span className="bold">Descriere: </span>Dacă dorești să înveți cât mai multe despre cele mai utilizate
                                    Tehnologii Web, ai o temă sau pur și simplu ești pasionat de domeniu și nu știi de unde să începi,
                                    acesta este momentul.
                                </p>
                                <br/>
                            </div>
                        </Col>
                    </Row>
                </animated.div>
                <Row className="text-center">
                    <animated.div ref={refTitle} style={animationTitleRight}>
                        <p className="meditatiiSubTitle">Pachete & Prețuri</p>
                        <div className="table-responsive">
                            <Table striped bordered hover className="centered-table">
                                <thead>
                                    <tr>
                                        <th className="centered-cell">Denumire</th>
                                        <th className="centered-cell">Discipline</th>
                                        <th className="centered-cell">Descriere</th>
                                        <th className="centered-cell">Nr. Persoane</th>
                                        <th className="centered-cell">Nr. Ore</th>
                                        <th className="centered-cell">Preț</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="centered-cell">Pregătire Individuală</td>
                                        <td className="centered-cell">Informatică, Matematică</td>
                                        <td className="centered-cell">Parcurgerea materiei de la 0, rezolvarea exercițiilor specifice, teme la fiecare ședință</td>
                                        <td className="centered-cell">1</td>
                                        <td className="centered-cell">1 oră și jumătate</td>
                                        <td className="centered-cell">100 RON</td>
                                    </tr>
                                    <tr>
                                        <td className="centered-cell">Pregătire Individuală</td>
                                        <td className="centered-cell">Programare</td>
                                        <td className="centered-cell">Explicarea conceptelor de bază și învățarea prin practică</td>
                                        <td className="centered-cell">1</td>
                                        <td className="centered-cell">1 oră și jumătate</td>
                                        <td className="centered-cell">100 RON</td>
                                    </tr>
                                    <tr>
                                        <td className="centered-cell">Pregătire în Grup</td>
                                        <td className="centered-cell">Informatică, Matematică</td>
                                        <td className="centered-cell">Parcurgerea materiei de la 0, rezolvarea exercițiilor specifice, teme la fiecare ședință</td>
                                        <td className="centered-cell">2-5</td>
                                        <td className="centered-cell">1 oră și jumătate</td>
                                        <td className="centered-cell">85 RON</td>
                                    </tr>
                                    <tr>
                                        <td className="centered-cell">Pregătire în Grup</td>
                                        <td className="centered-cell">Programare</td>
                                        <td className="centered-cell">Explicarea conceptelor de bază și învățarea prin practică</td>
                                        <td className="centered-cell">2-5</td>
                                        <td className="centered-cell">1 oră</td>
                                        <td className="centered-cell">75 RON</td>
                                    </tr>
                                    <tr>
                                        <td className="centered-cell">Simulare Bacalaureat</td>
                                        <td className="centered-cell">Informatică, Matematică</td>
                                        <td className="centered-cell">Oferirea unui subiect de bacalaureat cu feedback la final</td>
                                        <td className="centered-cell">1-5</td>
                                        <td className="centered-cell">30-45 minute</td>
                                        <td className="centered-cell">50 RON</td>
                                    </tr>
                                    <tr>
                                        <td className="centered-cell">Consultanță Bacalaureat / Facultate</td>
                                        <td className="centered-cell">Informatică, Matematică, Programare</td>
                                        <td className="centered-cell">Discuție despre examenul de bacalaureat / facultate, tips & tricks, experiențe, opinii, păreri</td>
                                        <td className="centered-cell">1-5</td>
                                        <td className="centered-cell">30-45 minute</td>
                                        <td className="centered-cell">50 RON</td>
                                    </tr>
                                    <tr>
                                        <td className="centered-cell">Pachet Personalizat</td>
                                        <td className="centered-cell">Informatică, Matematică, Programare</td>
                                        <td className="centered-cell">Se poate personaliza un pachet în funcție de nevoile, cerințele sau dorințele elevului</td>
                                        <td className="centered-cell">1-5</td>
                                        <td className="centered-cell">30 minute - 1 oră și jumătate</td>
                                        <td className="centered-cell">50-100 RON</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </animated.div>
                </Row>
                <Row className="text-center" style={{ marginBottom: "50px" }}>
                    <animated.div ref={refFeedback} style={animationFeedback}>
                        <p className="meditatiiSubTitle">Feedback</p>
                        <Feedback />
                    </animated.div>
                </Row>
                <Row className="text-center d-flex align-items-center justify-content-center">
                    <animated.div ref={refButton} style={animationButton}>
                        <div className="buttonContainer">
                            <Button variant="dark" className="d-flex align-items-center justify-content-center meditatiiButton" href="/">
                                Contactează-mă aici
                            </Button>
                        </div>
                    </animated.div>
                </Row>
            </Container>
        </Layout>
    );
}