import React from 'react';
import Footer from '@theme-original/Footer';

import { useLocation } from 'react-router-dom';

export default function FooterWrapper(props) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const backgroundClass = isHomePage ? 'backgroundFooterHome' : 'backgroundFooterNoHome';

    return (
        <>
            <Footer {...props} />
            <div className={backgroundClass}>
                <footer className="site-footer text-center">
                    <div className="container m-auto">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6 className="site-footerText">Despre Noi</h6>
                                <p className="text-justify">Tehnologii Web reprezintă o disciplină care a apărut prima dată în planul de învățământ al studenților de la Ingineria Sistemelor abia în anul 2022. Această disciplină are ca scop punerea bazelor studenților și pregătirea acestora pentru dezvoltarea de aplicații web atât pe partea de Frontend, cu HTML și CSS, dar și pe partea de Backend cu JavaScript. Tehnologii Web se află în continuă dezvoltare și încearcă să vină de la an la an cu diferite îmbunătățiri, precum cursuri secundare de Web Scrapping sau chiar React.</p>
                            </div>
                            <div className="col-xs-6 col-md-3 text-center">
                                <h6 className="site-footerText">Contact</h6>
                                <ul className="footer-links">
                                    <li><a href="mailto:daniela.hossu@upb.ro">daniela.hossu@upb.ro</a></li>
                                    <li><a href="mailto:">mail mihai</a></li>
                                    <li><a href="mailto:antoniocrantea@gmail.com">antoniocrantea@gmail.com</a></li>
                                    <li><a href="mailto:">mail hampi</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-6 col-md-3 text-center">
                                <h6 className="site-footerText">Harta Site-ului</h6>
                                <div className="footer-links-container">
                                    <ul className="footer-links">
                                        <li><a href="/">Acasă</a></li>
                                        <li><a href="/echipa">Echipă</a></li>
                                        <li><a href="/zebrahack">ZebraHack</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                    </ul>
                                    <ul className="footer-links">
                                        <li><a href="/">Git & GitHub</a></li>
                                        <li><a href="/">HTML & CSS</a></li>
                                        <li><a href="/">JavaScript</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div>
                                <p className="copyright-text">Copyright © {new Date().getFullYear()} | Website creat de către echipa Tehnologii Web, Facultatea de Automatică și Calculatoare din București</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}