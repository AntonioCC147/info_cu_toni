import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Avatar from '../assets/images/Avatar.png';
import Matrix from '../assets/images/Matrix.png';
import GitHub from '../assets/icons/GitHub.png';

import '../css/echipa.css';

export default function Echipa() {
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

    const animationText = useSpring({
        from: { opacity: 0, transform: 'translateX(-50%)' },
        to: { opacity: 1, transform: 'translateX(0%)' },
        config: { duration: 750 },
    });

    const animationTextRight1 = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateX(0%)' : 'translateX(10%)',
        config: { duration: 750 },
    });

    const animationTextLeft1 = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateX(0%)' : 'translateX(-10%)',
        config: { duration: 750 },
    });

    const animationTextRight2 = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateX(0%)' : 'translateX(10%)',
        config: { duration: 750 },
    });

    const animationTextLeft2 = useSpring({
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'translateX(0%)' : 'translateX(-10%)',
        config: { duration: 750 },
    });

    return (
        <Layout>
            <Container fluid className="echipaBackground">
                <img src={Matrix} className="matrixImage" alt="Matrix"/>
                <animated.div style={animationText}>
                    <p className="echipaText1">Echipă</p>
                    <p className="echipaText2">Echipa Tehnologii Web a seriilor AA / AC din cadrul Facultății de Automatică și Calculatoare din București, 2024-2025</p>
                </animated.div>
                <Row>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-1 order-1">
                        <img src={Avatar} className="echipaImage" alt="Avatar"/>
                    </Col>
                    <Col lg={8} className="order-lg-2 order-2">
                        <animated.div ref={ref1} style={animationTextRight1}>
                            <p className="echipaTitle">Hossu Daniela</p>
                            <p className="echipaSubTitle">Profesor de Tehnologii Web la seriile AA și AC</p>
                            <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </animated.div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="order-lg-1 order-2">
                        <animated.div ref={ref2} style={animationTextLeft1}>
                            <p className="echipaTitle">Ciuciulete Mihai</p>
                            <p className="echipaSubTitle">Mentor Web Scrapping & Student în anul IV</p>
                            <a class="echipaContainer" href="/">
                                <img src={GitHub} className="gitHubImage" alt="GitHub"/>
                                <span className="echipaLink">GitHub</span>
                            </a>
                            <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </animated.div>
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
                        <animated.div ref={ref3} style={animationTextRight2}>
                            <p className="echipaTitle">Crantea Antonio-Cristian</p>
                            <p className="echipaSubTitle">Mentor FrontEnd Developer cu React & Student în anul III</p>
                            <a class="echipaContainer" href="/">
                                <img src={GitHub} className="gitHubImage" alt="GitHub"/>
                                <span className="echipaLink">GitHub</span>
                            </a>
                            <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </animated.div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className="order-lg-1 order-2">
                        <animated.div ref={ref4} style={animationTextLeft2}>
                            <p className="echipaTitle">Hampi Rareș-Marian</p>
                            <p className="echipaSubTitle">Mentor BackEnd Developer cu React & Student în anul III</p>
                            <a class="echipaContainer" href="/">
                                <img src={GitHub} className="gitHubImage" alt="GitHub"/>
                                <span className="echipaLink">GitHub</span>
                            </a>
                            <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </animated.div>
                    </Col>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-2 order-1">
                        <img src={Avatar} className="echipaImage" alt="Avatar"/>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}