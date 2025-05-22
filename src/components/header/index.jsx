import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serviceDetailData from "../services/serviceDetailData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="masthead"
      className="header ttm-header-style-01"
      style={{
        transition: "none",
        position: isScrolled ? "fixed" : undefined,
        top: isScrolled ? 0 : undefined,
        left: isScrolled ? 0 : undefined,
        right: isScrolled ? 0 : undefined,
        zIndex: isScrolled ? 50 : undefined,
        width: isScrolled ? "100%" : undefined,
        backgroundColor: isScrolled ? "#2a334e" : undefined,
      }}
    >
      <div id="site-header-menu" className="site-header-menu w-full">
        <div className="site-header-menu-inner ttm-stickable-header w-full">
          {/* Remove container-fluid and use w-full instead */}
          <div className="container">
            <div className="row mx-0">
              {" "}
              {/* Added mx-0 to remove horizontal margins */}
              <div className="col-lg-12 px-0">
                {" "}
                {/* Added px-0 to remove padding */}
                <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                  {/* Rest of your header content remains the same */}
                  <div className="d-flex flex-row align-items-center">
                    <div className="site-branding">
                      <Link
                        className="home-link"
                        to="/"
                        title="HOPE MEDICAL STAFFING"
                        rel="home"
                      >
                        <img
                          id="logo-img"
                          width="150"
                          height="250"
                          className="img-fluid"
                          src="/images/logo-homemedical.png"
                          alt="logo"
                        />
                      </Link>
                    </div>

                    <div className="site-menubar">
                      <div
                        className={`btn-show-menu-mobile menubar menubar--squeeze  ${
                          isMobileMenuOpen && "is-active"
                        } `}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        <span className="menubar-box">
                          <span className="menubar-inner"></span>
                        </span>
                      </div>

                      <nav
                        className={`main-menu menu-mobile ${
                          isMobileMenuOpen && "show"
                        } `}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        id="menu"
                      >
                        <ul className="menu">
                          <li className="mega-menu-item">
                            <Link to="/" className="mega-menu-link">
                              Home
                            </Link>
                          </li>
                          <li className="mega-menu-item">
                            <Link to="/about" className="mega-menu-link">
                              About
                            </Link>
                          </li>

                          <li className="mega-menu-item">
                            <Link to="/services" className="mega-menu-link">
                              Services
                            </Link>
                            <ul className="mega-submenu">
                              {serviceDetailData.map((s) => (
                                <li key={s.slug}>
                                  <Link to={`/services/${s.slug}`}>
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <li className="mega-menu-item">
                            <Link to="/careers" className="mega-menu-link">
                              Careers
                            </Link>
                          </li>

                          <li className="mega-menu-item">
                            <Link to="/contact" className="mega-menu-link">
                              Contact
                            </Link>
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
                          <a href="tel:+17122038160">+1 (712) 203-8160</a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="widget_info d-flex flex-row align-items-center">
                      <div className="widget_icon align-self-center">
                        <i className="flaticon-bubble-chat"></i>
                      </div>
                      <div className="widget_content align-self-center">
                        <h3 className="widget_title">Talk to us</h3>
                        <p className="widget_desc">
                          <a href="mailto:hopemedicalstaffing@gmail.com">
                            hopemedicalstaffing@gmail.com
                          </a>
                        </p>
                        <p className="widget_hours text-sm">
                          Monday - Friday: 10:00 - 18:00
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
