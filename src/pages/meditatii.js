import React from 'react';
import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import ZebraHackImg from '../assets/images/ZebraHack.png';
import ZebraHack1 from '../assets/images/ZebraHack1.jpg'

import '../css/zebraHack.css';

export default function ZebraHack() {
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

    const animationText = useSpring({
        from: { opacity: 0, transform: 'translateX(-50%)' },
        to: { opacity: 1, transform: 'translateX(0%)' },
        config: { duration: 750 },
    });

    const animationImage = useSpring({
        from: { opacity: 0, transform: 'translateY(10%)' },
        to: { opacity: 1, transform: 'translateY(0%)' },
        config: { duration: 750 },
    });

    const animationTitleRight = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateX(0%)' : 'translateX(10%)',
        config: { duration: 750 },
    });

    const animationContent11 = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateY(0%)' : 'translateY(10%)',
        config: { duration: 750 },
    });

    const animationContent12 = useSpring({
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'translateY(0%)' : 'translateY(10%)',
        config: { duration: 750 },
    });

    const animationContent13 = useSpring({
        opacity: inView5 ? 1 : 0,
        transform: inView5 ? 'translateY(0%)' : 'translateY(10%)',
        config: { duration: 750 },
    });

    return (
        <Layout>
            <Container fluid className="zebraHackBackground">
                <animated.div style={animationText}>
                    <p className="zebraHackText1">ZebraHack</p>
                    <p className="zebraHackText2">ZebraHack reprezintă un Hackathon organizat de către echipa Tehnologii Web ce a luat naștere în anul 2023</p>
                </animated.div>
                <animated.div style={animationImage}>
                    <div className="text-center d-flex align-items-center justify-content-center">
                        <img src={ZebraHackImg} className="zebraHackImage" alt="ZebraHack"/>
                    </div>
                </animated.div>
                <Row className="text-center">
                    <animated.div ref={ref1} style={animationTitleRight}>
                        <p className="zebraHackTitle">ZebraHack 2.0 - Va urma...</p>
                    </animated.div>
                </Row>
                <Row className="text-center" style={{marginBottom: "50px"}}>
                    <animated.div ref={ref2} style={animationContent11}>
                        <p className="zebraHackTitle ">ZebraHack 1.0</p>
                    </animated.div>
                    <Col lg={4}>
                        <animated.div ref={ref3} style={animationContent11}>
                            <p className="zebraHackSubTitle">Descriere</p>
                            <p className="zebraHackDescription"><b>Data: </b>16 decembrie 2023</p>
                            <p className="zebraHackDescription"><b>Locație: </b>Facultatea de Automatică și Calculatoare, Hol EC</p>
                            <p className="zebraHackDescription"><b>Despre: </b>ZebraHack 1.0 a luat naștere în decembrie 2023 unde a debutat cu prima sa ediție la care au participat peste 45 de echipe a câte doi, trei sau patru coechipieri. Evenimentul a fost un succes, studenții s-au distrat, iar de atunci s-a dorit crearea unei tradiții. Drept urmare, ZebraHack va continua să existe de la un an la altul, în apropierea sărbătorilor de iarnă și să aducă studenții împreună pentru a-și testa abilitățile tehnice de creare a aplicațiilor web în lupta pentru unul dintre premiile acordate. Pe lângă muncă, aceștia au avut parte și de momente de relaxare, precum pauza de masă, având la dispoziție pizza, snacks-uri, sucuri sau apă. Reamintim că ZebraHack este un eveniment intern creat de către echipa Tehnologii Web, destinat 100% studenților de anul II de la specializarea Ingineria Sistemelor.</p>
                        </animated.div>
                    </Col>
                    <Col lg={1}/>
                    <Col lg={7}>
                        <animated.div ref={ref4} style={animationContent12}>
                            <p className="zebraHackSubTitle">Câștigători</p>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Premiul</th>
                                    <th>Echipa Câștigătoare</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="alignMiddleTd">Locul I</td>
                                        <td className="alignLeftTd">
                                            <b>SegFault</b><br/>
                                            <i>Hampi Rareș Marian, Bolohan Marian Cristian, Dodi Mircea Ovidiu</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Locul II</td>
                                        <td className="alignLeftTd">
                                            <b>CCC</b><br/>
                                            <i>Crantea Antonio Cristian, Craia Bogdan Valentin, Croitoru Robert</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Locul III</td>
                                        <td className="alignLeftTd">
                                            <b>LupiiAlpha</b><br/>
                                            <i>Diaconiță Adrian, Rîpeanu Mihai Andrei, Ionescu Alexandru Mario  </i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Mențiune</td>
                                        <td className="alignLeftTd">
                                            <b>Looney Tunes</b><br/>
                                            <i>Enache Vlad Rareș, Gomoi Andreea Cătălina, Lungan Daniel, Stănescu Miruna Ioana</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Mențiune</td>
                                        <td className="alignLeftTd">
                                            <b>MAX Stability</b><br/>
                                            <i>Cozma Ivan Carol, Dan Nicholas Bogdan, Vaculenco Maxim, Berianu Leonard</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Mențiune</td>
                                        <td className="alignLeftTd">
                                            <b>Powerhack Girls</b><br/>
                                            <i>Rădulescu Alexandra, Fedeleș Ana Maria, Udățeanu Andreea Laura</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Premiul Tehnic</td>
                                        <td className="alignLeftTd">
                                            <b>CCC</b><br/>
                                            <i>Crantea Antonio Cristian, Craia Bogdan Valentin, Croitoru Robert</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Cel mai bun Design</td>
                                        <td className="alignLeftTd">
                                            <b>LupiiAlpha</b><br/>
                                            <i>Diaconiță Adrian, Rîpeanu Mihai Andrei, Ionescu Alexandru Mario</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="alignMiddleTd">Cea mai bună Prezentare</td>
                                        <td className="alignLeftTd">
                                            <b>Hacknslash</b><br/>
                                            <i>Şendrescu Vlad Mihai, Micu Paul Alexandru</i>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </animated.div>
                    </Col>
                    <Row className="text-center d-flex align-items-center justify-content-center">
                        <animated.div ref={ref5} style={animationContent13}>
                            <p className="zebraHackSubTitle">Galerie</p>
                            <img src={ZebraHack1} alt="ZebraHack"/>
                        </animated.div>
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
}