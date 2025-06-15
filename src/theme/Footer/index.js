import React from 'react';
import Footer from '@theme-original/Footer';

import { useLocation } from 'react-router-dom';

export default function FooterWrapper(props) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const backgroundClass = isHomePage ? 'backgroundFooterHome' : 'backgroundFooterNoHome';

    return (
        <>
            <Footer {...props}/>
            <div className={backgroundClass}>
                <footer className="site-footer text-center font">
                    <div className="container m-auto">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6 className="site-footerText font">Despre Website</h6>
                                <p className="text-justify">
                                    Website-ul își propune două mari scopuri, anume acela de a ajuta elevii cu informații și materie
                                    relevantă la informatică, atât pentru școală, cât și pentru examene naționale, dar și pentru
                                    admitere, dar și scopul de a promova pregătirea individuală pe care o realizez de câțiva ani
                                    buni. Pentru mai multe informații, recomand urmărirea paginilor de pe site.
                                </p>
                            </div>
                            <div className="col-xs-6 col-md-3 text-center">
                                <h6 className="site-footerText font">Harta Site-ului</h6>
                                <div className="footer-links-container">
                                    <ul className="footer-links">
                                        <li><a href="/">Acasă</a></li>
                                        <li><a href="/despre">Despre</a></li>
                                        <li><a href="/meditatii">Meditații</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                    <ul className="footer-links">
                                        <li><a href="/docs/Clasa-IX/cuprins">Clasa a IX-a</a></li>
                                        <li><a href="/docs/Clasa-X/cuprins">Clasa a X-a</a></li>
                                        <li><a href="/docs/Clasa-XI/cuprins">Clasa a XI-a</a></li>
                                        <li><a href="/docs/Subiecte">Subiecte</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-3 text-center">
                                <h6 className="site-footerText font">Contact</h6>
                                <ul className="footer-links">
                                    <b>Email</b><li><a href="mailto:antoniocrantea@gmail.com">antoniocrantea@gmail.com</a></li>
                                    <b>Instagram</b><li><a href="https://www.instagram.com/info_cu_toni/" target="_blank">@info_cu_toni</a></li>
                                    <b>LinkedIn</b><li><a href="https://www.linkedin.com/in/antonio-crantea/">antonio-crantea</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div>
                                <p className="copyright-text">Copyright © {new Date().getFullYear()}
                                    {' '}| Website creat de{' '}
                                    <a href="https://antoniocrantea.ro/" target="_blank">
                                        <span className="footerName">Crantea Antonio-Cristian</span>
                                    </a>
                                    {' '}| Toate drepturile sunt rezervate
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}