import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

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
                            <p className="indexText1">Învață Tehnologii Web și creează-ți propria lume!</p>
                            <p className="indexText2">Cursul de Tehnologii Web este conceput special pentru studenții care doresc să își înceapă aventura în lumea dezvoltării aplicațiilor web și să creeze propriile proiecte folosind HTML, CSS și JavaScript. Pe acest site veți putea găsi resurse utile, dar și informații referitoare la ce veți învăța și cum vă veți putea folosi de aceste resurse pentru a vă transforma ideile în realitate.</p>
                            <a href="/echipa"><p className="indexButton">Află cine suntem noi &rarr;</p></a>
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
                    <p className="tehnologiiText1">Module</p>
                    <p className="tehnologiiText2">Cursul de împarte în 3 module menite să ajute la dezvoltarea și întreprinderea abilităților practice în ceea ce privește dezvoltarea de aplicații web</p>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <animated.div ref={ref1} style={animationCards1}>
                            <div className="tehnologiiCard">
                                <img src={HTML} className="cardTehnologiiImage" alt="HTML"/>
                                <p className="cardTehnologiiTitle">HyperText Markup Language<br/>(HTML)</p>
                                <p className="cardTehnologiiDescription">Învață structura paginilor web cu HTML: elemente, tag-uri și atribute esențiale pentru crearea conținutului online</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <animated.div ref={ref2} style={animationCards2}>
                            <div className="tehnologiiCard">
                                <img src={CSS} className="cardTehnologiiImage" alt="CSS"/>
                                <p className="cardTehnologiiTitle">Cascading Style Sheets<br/>(CSS)</p>
                                <p className="cardTehnologiiDescription">Descoperă stilizarea paginilor web cu CSS: culori, fonturi și tehnici avansate de design</p>
                            </div>
                        </animated.div>
                    </Col>
                    <Col lg={4} style={{marginBottom: "50px"}}>
                        <animated.div ref={ref3} style={animationCards3}>
                            <div className="tehnologiiCard">
                                <img src={JS} className="cardTehnologiiImage" alt="JS"/>
                                <p className="cardTehnologiiTitle">JavaScript<br/>(JS)</p>
                                <p className="cardTehnologiiDescription">Dezvoltă interactivitatea paginilor web cu JavaScript: variabile, funcții, evenimente și manipularea DOM-ului</p>
                            </div>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="skillBackground">
                <p className="skillText1">Skill-uri</p>
                <p className="skillText2">Cursul de Tehnologii Web ajută la dobândirea mai multor skill-uri, atât tehnice, cât și nu numai</p>
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
            <Footer/>
        </Layout>
    );
}