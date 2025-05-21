import React from "react";
import { Link } from "react-router-dom";
import serviceDetailData from "../services/serviceDetailData";

const Header = () => {
    return (
        <header id="masthead" className="header ttm-header-style-01">
            <div id="site-header-menu" className="site-header-menu">
                <div className="site-header-menu-inner ttm-stickable-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="site-branding">
                                            <Link className="home-link" to="/" title="HOPE MEDICAL STAFFING" rel="home">
                                                <img
                                                    id="logo-img"
                                                    width="150"
                                                    height="250"
                                                    className="img-fluid"
                                                    src="/images/logo-homemedical.jpeg"
                                                    alt="logo"
                                                />
                                            </Link>
                                        </div>

                                        <div className="site-menubar">
                                            <div className="btn-show-menu-mobile menubar menubar--squeeze">
                                                <span className="menubar-box">
                                                    <span className="menubar-inner"></span>
                                                </span>
                                            </div>

                                            <nav className="main-menu menu-mobile" id="menu">
                                                <ul className="menu">
                                                    <li className="mega-menu-item">
                                                        <Link to="/" className="mega-menu-link">Home</Link>
                                                    </li>
                                                    <li className="mega-menu-item">
                                                        <Link to="/about" className="mega-menu-link">About</Link>
                                                    </li>

                                                    <li className="mega-menu-item">
                                                        <Link to="/services" className="mega-menu-link">Services</Link>
                                                        <ul className="mega-submenu">
                                                            {serviceDetailData.map((s) => (
                                                                <li key={s.slug}>
                                                                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>

                                                    <li className="mega-menu-item">
                                                        <Link to="/careers" className="mega-menu-link">Careers</Link>
                                                    </li>
                                                    
                                                    <li className="mega-menu-item">
                                                        <Link to="/contact" className="mega-menu-link">Contact</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>

                                    <div className="header_extra d-flex flex-row align-items-center justify-content-end">
                                        <div className="widget_info d-flex flex-row align-items-center">
                                            <div className="widget_icon align-self-center">
                                                <i className="flaticon-phone-call-1"></i>
                                            </div>
                                            <div className="widget_content align-self-center">
                                                <h3 className="widget_title">Call Us Now!</h3>
                                                <p className="widget_desc">
                                                    <a href="tel:+1822223555">+18 - 2222 - 3555</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="widget_info d-flex flex-row align-items-center">
                                            <div className="widget_icon align-self-center">
                                                <i className="flaticon-bubble-chat"></i>
                                            </div>
                                            <div className="widget_content align-self-center">
                                                <h3 className="widget_title">Talk to us</h3>
                                                <p className="widget_desc">
                                                    <a href="mailto:examplle@gmail.com">examplle@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* site-navigation end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
