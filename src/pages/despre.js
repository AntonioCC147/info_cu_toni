import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Timeline from './timeline';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Matrix from '../assets/images/Matrix.png';
import Toni from '../assets/images/Toni.png';
import Website from '../assets/icons/Web.png';

import '../css/despre.css';

export default function despre() {
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

    const animationTextLeft = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0%)' : 'translateX(-10%)',
        config: { duration: 750 },
    });

    return (
        <Layout>
            <Container className="despreBackground font">
                <img src={Matrix} className="matrixImage" alt="Matrix"/>
                <animated.div style={animationText}>
                    <p className="despreText1">Despre</p>
                    <p className="despreText2">Află mai multe despre mine și despre tot parcursul meu academic</p>
                </animated.div>
                <Row>
                    <Col lg={4} className="text-center d-flex align-items-center justify-content-center order-lg-1 order-1">
                        <img src={Toni} className="despreImage" alt="Avatar"/>
                    </Col>
                    <Col lg={8} className="order-lg-2 order-2">
                        <animated.div ref={ref} style={animationTextRight}>
                            <p className="despreTitle">Crantea Antonio-Cristian</p>
                            <p className="despreSubTitle">Autor, Programator și Profesor de Informatică & TIC</p>
                            <a class="despreContainer" href="https://antoniocrantea.ro/" target="_blank">
                                <img src={Website} className="websiteImage" alt="Website"/>
                                <span className="despreLink">Website Personal</span>
                            </a>
                            <p className="despreDescription">
                                Salut! Eu sunt Toni și sunt un tânăr pasionat de Informatică, Tehnologie, dar și de Educație.
                                De-a lungul anilor, am lucrat la mine pentru a ajunge la cea mai bună și posibilă versiune a mea,
                                ajungând să obțin note precum 9.90 la Matematică și 10 la Informatică în cadrul examenului de
                                Bacalaureat.
                            </p>
                            <p className="despreDescription">
                                În iarna anului 2021 am început să ofer meditații / pregătiri individuale copiilor pentru
                                pregătirea școlară sau pentru examenul de Bacalaureat, ulterior înființând și o agendă educațională
                                la disciplina Informatică, iar mai apoi, în toamna anului 2024 am devenit oficial profesor de
                                Informatică & TIC.
                            </p>
                        </animated.div>
                    </Col>
                </Row>
                <Row>
                    <animated.div style={animationTextLeft}>
                        <Timeline/>
                    </animated.div>
                </Row>
            </Container>
        </Layout>
    );
}