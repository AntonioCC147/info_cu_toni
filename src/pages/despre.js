import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Toni from '../assets/images/Toni.png';
import Matrix from '../assets/images/Matrix.png';
import GitHub from '../assets/icons/GitHub.png';

import '../css/echipa.css';

export default function Echipa() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animationText = useSpring({
        from: { opacity: 0, transform: 'translateX(-50%)' },
        to: { opacity: 1, transform: 'translateX(0%)' },
        config: { duration: 750 },
    });

    const animationTextRight = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0%)' : 'translateX(10%)',
        config: { duration: 750 },
    });

    return (
        <Layout>
            <Container fluid className="echipaBackground">
                <img src={Matrix} className="matrixImage" alt="Matrix"/>
                <animated.div style={animationText}>
                    <p className="echipaText1">Despre</p>
                    <p className="echipaText2">Echipa Tehnologii Web a seriilor AA / AC din cadrul Facultății de Automatică și Calculatoare din București, 2024-2025</p>
                </animated.div>
                <Row>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-1 order-1">
                        <img src={Toni} className="echipaImage" alt="Avatar"/>
                    </Col>
                    <Col lg={8} className="order-lg-2 order-2">
                        <animated.div ref={ref} style={animationTextRight}>
                            <p className="echipaTitle">Crantea Antonio-Cristian</p>
                            <p className="echipaSubTitle">Profesor de Informatică & TIC</p>
                            <a class="echipaContainer" href="https://antoniocrantea.ro/">
                                <img src={GitHub} className="websiteImage" alt="Website"/>
                                <span className="echipaLink">Website</span>
                            </a>
                            <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p className="echipaDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </animated.div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}