import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import Layout from '@theme/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import Matrix from '../assets/images/Matrix.png';
import Mail from '../assets/icons/Mail.png';
import Website from '../assets/icons/Website.png';
import LinkedIn from '../assets/icons/LinkedIn.png';

import '../css/contact.css';

const styles = {
    error: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
};

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required(<span style={styles.error}>Numele este obligatoriu</span>),
    email: Yup.string().email(<span style={styles.error}>Email invalid</span>).required(<span style={styles.error}>Emailul este obligatoriu</span>),
    class: Yup.string().required(<span style={styles.error}>Clasa este obligatorie</span>),
    message: Yup.string().required(<span style={styles.error}>Mesajul este obligatoriu</span>),
});  

export default function Contact() {
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

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (values) => {
        const templateParams = {
            user_name: values.first_name,
            user_email: values.email,
            user_phone: values.phone,
            user_class: values.class,
            message: values.message,
        };
    
        emailjs
            .send('service_aew514f', 'template_o21xcg4', templateParams, 'wgJFpA_4E1G_XA6V-')
            .then(() => {
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };    

    return (
        <Layout>
            <Container className="echipaBackground">
                <img src={Matrix} className="matrixImage" alt="Matrix" />
                <animated.div style={animationText}>
                    <p className="echipaText1">Contact</p>
                    <p className="echipaText2">Dacă vrei să lucrăm împreună sau ai o curiozitate, nu ezita să mă contactezi!</p>
                </animated.div>
                <animated.div ref={ref} style={animationTextRight}>
                    <Row className="contactPrincipalCard">
                        <Col lg={4} className="contactSecondaryCard">
                            <p className="contactTitleCard">Informații de contact:</p>
                            <p className="contactSubTitleCard">
                                Completează formularul, iar eu îți voi răspunde în cel mai scurt timp posibil. Dacă dorești
                                pregătire individuală, cel mai bine lasă și un număr de telefon pentru a te contacta mai ușor.
                            </p>
                            <img src={Mail} className="contactIcon" alt="Mail" />
                            <a href="mailto:antoniocrantea@gmail.com" className="contactLink">antoniocrantea@gmail.com</a>
                            <br/><br/>
                            <img src={Website} className="contactIcon" alt="Website" />
                            <a href="https://antoniocrantea.ro/" className="contactLink">antoniocrantea.ro</a>
                            <br/><br/>
                            <img src={LinkedIn} className="contactIcon" alt="LinkedIn" />
                            <a href="https://www.linkedin.com/in/antonio-crantea/" className="contactLink">antonio-crantea</a>
                        </Col>
                        <Col lg={8}>
                            <Formik
                                initialValues={{
                                first_name: '',
                                email: '',
                                phone: '',
                                message: '',
                                class: '',
                            }}
                                validationSchema={validationSchema}
                                onSubmit={(values, { setSubmitting, resetForm }) => {
                                    sendEmail(values);
                                    resetForm();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Mesajul a fost trimis cu succes!',
                                        showConfirmButton: false,
                                        timer: 3000,
                                    });
                                    setSubmitting(false);
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="contactContainer">
                                        <Row>
                                            <Col sm={6}>
                                                <label className="form-label"><b>Nume:</b></label>
                                                <Field
                                                    type="text"
                                                    name="first_name"
                                                    className="form-control styled-input"
                                                    placeholder="Numele tău"
                                                />
                                                <ErrorMessage name="first_name" component="div" className="error-message" />
                                            </Col>
                                            <Col sm={6}>
                                                <label className="form-label"><b>Clasa:</b></label>
                                                <Field as="select" name="class" className="form-control styled-input">
                                                    <option value="">Selectează clasa</option>
                                                    <option value="gimnaziu">Gimnaziu</option>
                                                    <option value="9">Clasa a 9-a</option>
                                                    <option value="10">Clasa a 10-a</option>
                                                    <option value="11">Clasa a 11-a</option>
                                                    <option value="12">Clasa a 12-a</option>
                                                    <option value="facultate">Facultate</option>
                                                </Field>
                                                <ErrorMessage name="class" component="div" className="error-message" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <label className="form-label"><b>Email:</b></label>
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    className="form-control styled-input"
                                                    placeholder="Email-ul tău"
                                                />
                                                <ErrorMessage name="email" component="div" className="error-message" />
                                            </Col>
                                            <Col sm={6}>
                                                <label className="form-label"><b>Telefon (Opțional):</b></label>
                                                <Field
                                                    type="text"
                                                    name="phone"
                                                    className="form-control styled-input"
                                                    placeholder="Telefonul tău"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <label className="form-label"><b>Mesaj:</b></label>
                                                <Field
                                                    as="textarea"
                                                    name="message"
                                                    className="form-control styled-input"
                                                    placeholder="Scrie mesajul tău aici"
                                                    rows="5"
                                                />
                                                <ErrorMessage name="message" component="div" className="error-message" />
                                            </Col>
                                        </Row>
                                        <Row className="text-center">
                                            <div className="buttonContainer mt-4">
                                                <Button
                                                    variant="dark"
                                                    type="submit"
                                                    className="d-flex align-items-center justify-content-center contactButton"
                                                    disabled={isSubmitting || isFormSubmitted}
                                                >
                                                    {isFormSubmitted ? 'Trimis' : 'Trimite'}
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </animated.div>
            </Container>
        </Layout>
    );
}