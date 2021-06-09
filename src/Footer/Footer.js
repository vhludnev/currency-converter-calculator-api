import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {

        return (
            <div className="footerblock">
                <div className="container" id="cookie_info">
                    <div className="site-content">
                    <div className="well"> We use cookies on our site. <br /> We use cookies on our site. &nbsp;
                        <button className="btn btn-primary btn-sm"> OK </button>
                    </div>
                    </div>  
                </div>
                <footer id="footer" className="footer">
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="flex-container">
                                <div className="flex-item">
                                    <h1 className="footer-title"><a href="https://test.info">2021 &copy; React Currency Converter</a></h1>
                                    <p>All Rights Reserved</p>
                                    
                                </div>
                                <div className="flex-item">
                                    <div className="module-body">
                                        <ul className="list-unstyled">
                                            <li><a href="/sitemap/" tooltip="Site map">Site map</a></li>
                                            <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex-item">
                                    <div className="module-body">
                                        <div className="list-unstyled">
                                            <NavLink to="/contact">Contact</NavLink>
                                            <NavLink to="/d">Warranty</NavLink>
                                            <NavLink to="/about">About us</NavLink>
                                            <NavLink to="/o">Return policy</NavLink>
                                            <NavLink to="/p">Rules</NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
}
    
export default Footer;