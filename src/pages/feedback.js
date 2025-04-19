import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import '../css/feedback.css';

import StarsIcon from '../assets/icons/StarsIcon.png';

export default function Feedback() {
    const [view, setView] = useState("All");

    return (
        <Container className="bg-dark principalContainer text-center anta" style={{marginTop: "25px", color: "white"}}>
            <p className="titleFeedback">Impresii & Păreri</p>
            <p className="subTitle">Câteva gânduri de-ale elevilor mei la finalul pregătirilor</p>
            <Row>
                <Carousel>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Ștefan 1 | Clasa a XII-a - Informatică | Bacalaureat</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Îți multumesc mult pentru ajutor, Toni. Am luat cea mai mare
                            notă din bac din clasă.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <p className="feedbackNameText">Andrada | Clasa a XII-a - Informatică | Bacalaureat și Admitere</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            După un an de munca, alături de susținerea, explicațiile și
                            dedicarea ta, pot spune că nu cred că aș fi găsit un interes mai mare sau o voința mai puternica în
                            a ajuta elevii sa-și perpetueze drumul fie oricât de tumultuos. Experienta mea a fost excelenta,
                            având mereu înțelegerea și răbdarea ta, dând dovadă de seriozitate și implicare chiar și în momentele
                            limită ce-ți puneau răbdarea, timpul, la încercare. Ajutorul tău a fost de mare folos și-ți mulțumesc
                            că te oferi să dai mai departe informația pe care o deții, pentru că explici mai bine decat mulți
                            profesori cu calificare pentru acest lucru. Mulțumesc pt colaborarea frumoasă!
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Cristiana | Clasa a XI-a - Informatică | Pregătire Școlară</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Am vrut să îți zic că îți mulțumesc mult, mult pentru orele
                            făcute de pregătire, m-au ajutat foarte mult și mă bucur foarte mult că am găsit o astfel de
                            persoană, care a reușit să mă ajute să înțeleg informatica, în acest fel!
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Mihnea 1 | Clasa a X-a - Informatică și Matematică | Pregătire Școlară</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Mulțumesc mult pentru tot ajutorul! Ai fost cu adevărat un bun
                            povățuitor, iar lucrul cu tine m-a ajutat extrem de mult la școală.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Mama lui Mihnea 2 | Clasa a V-a - Matematică | Pregătire Școlară</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Mulțumim mult, Antonio pentru tot ajutorul oferit!
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Ștefan 2 | Clasa a XII-a - Informatică | Bacalaureat</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Am dat bacul inițial în 2022 în ambele sesiuni, dar nu am avut media necesară pentru a promova,
                            ulterior nici în iunie 2023 neavând media necesară pentru a promova. Dupa aproximativ o luna și câteva zile de muncă
                            la foc automat împreună cu Toni, am reușit împreună ca în sesiunea august 2023 să ajung de la nota
                            6.20 la nota 8.10 la Informatica. Îți mulțumesc mult de tot pentru tot ajutorul acordat și am rămas
                            uimit de modul tău de predare și de explicare a exercițiilor!
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Cristina | Clasa a XII-a - Matematică | Bacalaureat</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Vreau să îți mulțumesc că mi-ai fost alături ca profesor, chiar unul dintre cei mai deschisi și
                            mai "la obiect" pe care i-am avut, ceea ce m-a ajutat foarte tare dându-mi siguranța că acum,
                            față de astă-iarnă, știu la ce să mă aștept de la examen, iar tu te-ai pliat mult ca "ceea ce știe
                            eleva mea să facă" să fie în concordanță cu ce ni s-ar putea cere, nu te-ai culcat pe o ureche cum
                            fac alți profesori care vor doar să își predea materia de multe ori. În primul rand am reparat
                            lacunele acumulate în liceu, iar apoi prin exercitiu am inceput să observam "tiparele" de probleme,
                            la matrici, la integrale etc. Plus, programul de acasă a fost foarte lejer, că dacă era să plec
                            undeva la ora 8 dimineața duminica... mi-ar fi fost mai greu într-adevăr. Mulțumesc mult de tot!
                            Ajutorul tău mi-a făcut rezultatul de la bac posibil. 
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Luca | Clasa a XII-a - Matematică | Bacalaureat</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Deci îți mulțumesc enorm de mult pentru ajutorul pe care mi l-ai oferit. Este clar și meritul
                            tău nota mea din bac, fără tine nu aș fi ajuns la acest rezultat.
                        </p>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <p className="feedbackNameText">Radu | Clasa a XII-a - Informatică | Admitere</p>
                        <img src={StarsIcon} className="stars" alt="Stars"/>
                        <p className="feedbackDescriptionText">
                            Orele de pregătire au fost chiar relaxante, fără o presiune în a răspunde, s-au simțit de parcă
                            discutam cu un coleg în mare parte. Au fost de mare folos la împărtășirea diferitelor metode în
                            rezolvarea problemelor. Au ajutat la înțelegerea și deslușirea problemelor. Recomand cu căldură!
                        </p>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}