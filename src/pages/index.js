import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Web from '../assets/images/Web.png';
import Informatica from '../assets/images/Informatica.png';
import Programare from '../assets/images/Programare.png';
import Matematica from '../assets/images/Matematica.png';
import Matrix from '../assets/images/Matrix.png';

import WebDev from '../assets/icons/WebDev.png';
import Design from '../assets/icons/Design.png';
import SEO from '../assets/icons/SEO.png';
import Analiza from '../assets/icons/Analiza.png';
import Performanta from '../assets/icons/Performanta.png';
import TandD from '../assets/icons/TandD.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import '../css/tehnologii.css';
import '../css/skill.css';
import '../css/index.css';
import '../css/footer.css';

export default function Acasa() {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref5, inView5] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref6, inView6] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref7, inView7] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref8, inView8] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref9, inView9] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animationIndex = useSpring({
        from: { opacity: 0, transform: 'translateX(-50%)' },
        to: { opacity: 1, transform: 'translateX(0%)' },
        config: { duration: 750 },
    });

    const animationCards1 = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const animationCards2 = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1500 },
    });

    const animationCards3 = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 2000 },
    });

    const animationSkill1 = useSpring({
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 500 },
    });

    const animationSkill2 = useSpring({
        opacity: inView5 ? 1 : 0,
        transform: inView5 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 750 },
    });

    const animationSkill3 = useSpring({
        opacity: inView6 ? 1 : 0,
        transform: inView6 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const animationSkill4 = useSpring({
        opacity: inView7 ? 1 : 0,
        transform: inView7 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1250 },
    });

    const animationSkill5 = useSpring({
        opacity: inView8 ? 1 : 0,
        transform: inView8 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1500 },
    });

    const animationSkill6 = useSpring({
        opacity: inView9 ? 1 : 0,
        transform: inView9 ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1750 },
    });

    return (
        <Layout>
            <Container fluid className="indexBackground">
                <animated.div style={animationIndex}>
                    <Row>
                        <Col sm={12} lg={6}>
                            <p className="indexText1">Învață Informatică și creează-ți propriul cod!</p>
                            <p className="indexText2">
                                De cele mai multe ori, Informatica îți poate da adevărate bătăi de cap, însă hai să-ți arăt că
                                acest lucru se poate schimba ușor. Cu multă muncă, pasiune și devotament, poți ajunge ușor la unul
                                din rezultatele dorinte, într-un timp relativ scurt. Dacă nu crezi asta, îți recomand să-mi dai
                                o șansă și să-mi scrii la secțiunea Contact pentru a stabili o ședință împreună și pentru a-ți
                                face un plan de pregătire personalizat. Hai, ce mai aștepți?
                            </p>
                            <a href="/despre"><p className="indexButton">Află cine sunt &rarr;</p></a>
                        </Col>
                        <Col sm={12} lg={6} className="text-center d-flex align-items-center justify-content-center">
                            <img src={Web} className="indexImage" alt="Web"/>
                        </Col>
                    </Row>
                </animated.div>
            </Container>
            <Container fluid className="tehnologiiBackground">
                <Row>
                    <img src={Matrix} className="matrixImage" alt="Matrix"/>
                    <p className="tehnologiiText1">Pregătire Individuală</p>
                    <p className="tehnologiiText2">Informatică, Programare sau Matematică? Alege ce vrei tu, iar eu te pot ajuta!</p>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <animated.div ref={ref2} style={animationCards2}>
                            <div className="tehnologiiCard">
                                <img src={Matematica} className="cardTehnologiiImage" alt="Matematica"/>
                                <p className="cardTehnologiiTitle">Matematică<br/>(Algebră, Geometrie, Analiză)</p>
                                <p className="cardTehnologiiDescription">
                                    Matematica într-adevăr, îți poate da bătăi de cap, însă îți pot arăta că nu este chiar atât
                                    de grea, indiferent de nivelul la care susții examenul.
                                </p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <animated.div ref={ref1} style={animationCards1}>
                            <div className="tehnologiiCard">
                                <img src={Informatica} className="cardTehnologiiImage" alt="Informatica"/>
                                <p className="cardTehnologiiTitle">Informatică<br/>(C / C++)</p>
                                <p className="cardTehnologiiDescription">
                                    Învață Informatică într-un mod cât mai simplu, uror și distractiv, fie că te pregătești pentru
                                    școală, examenul de bacalaureat sau admiterea la facultate.
                                </p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <animated.div ref={ref3} style={animationCards3}>
                            <div className="tehnologiiCard">
                                <img src={Programare} className="cardTehnologiiImage" alt="Programare"/>
                                <p className="cardTehnologiiTitle">Programare<br/>(React, HTML, CSS, JavaScript)</p>
                                <p className="cardTehnologiiDescription">
                                    Dacă ai nevoie de ajutor la diferite materii de programare de la facultate sau dorești să înveți dezvoltare web,
                                    nu ezita să mă contactezi.
                                </p>
                            </div>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="skillBackground">
                <p className="skillText1">Ce mă recomandă?</p>
                <p className="skillText2">Află care sunt principalele lucruri care mă recomandă pe mine când vine vorba de pregătirea elevilor</p>
                <Row className="margin-auto">
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <animated.div ref={ref4} style={animationSkill1}>
                            <div className="skillCard">
                                <img src={WebDev} className="cardSkillImage" alt="WebDev"/>
                                <p className="cardSkillTitle">Web Development</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <animated.div ref={ref5} style={animationSkill2}>
                            <div className="skillCard">
                                <img src={Design} className="cardSkillImage" alt="WebDev"/>
                                <p className="cardSkillTitle">UI / UX</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <animated.div ref={ref6} style={animationSkill3}>
                            <div className="skillCard">
                                <img src={SEO} className="cardSkillImage" alt="WebDev"/>
                                <p className="cardSkillTitle">SEO</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <animated.div ref={ref7} style={animationSkill4}>
                            <div className="skillCard">
                                <img src={Analiza} className="cardSkillImage" alt="WebDev"/>
                                <p className="cardSkillTitle">Analiză</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={6} md={4} sm={6} xs={12}>
                        <animated.div ref={ref8} style={animationSkill5}>
                            <div className="skillCard">
                                <img src={Performanta} className="cardSkillImage" alt="WebDev"/>
                                <p className="cardSkillTitle">Performanță</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={6} md={4} sm={6} xs={12}>
                        <animated.div ref={ref9} style={animationSkill6}>
                            <div className="skillCard">
                                <img src={TandD} className="cardSkillImage" alt="WebDev"/>
                                <p className="cardSkillTitle">Testare & Depanare</p>
                            </div>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}