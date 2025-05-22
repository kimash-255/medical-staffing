import React from "react";
import { Link } from "react-router-dom";
import serviceDetailData from "../services/serviceDetailData"; // for dynamic links if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="widget-footer ttm-textcolor-white clearfix">
      <div className="ttm-bgcolor-darkgrey">
        {/* Footer Sections */}
        <div className="second-footer">
          <div className="container">
            <div className="row">
              {/* About */}
              <div className="col-lg-3 widget-area">
                <div className="widget widget-widget_contact clearfix">
                  <h3 className="widget-title">About Hope Medical Staffing</h3>
                  <div className="textwidget widget-text">
                    <p>
                      Hope Medical is a medical staffing agency located in
                      Portland, Oregon. We provide Oregon and Washington with
                      the best healthcare professionals and exceptional care to
                      all our clients.
                    </p>
                  </div>
                  <div className="social-icons pt-20">
                    <ul className="list-inline">
                      <li className="social-facebook">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <i className="ti ti-facebook"></i>
                        </a>
                      </li>
                      <li className="social-linkedin">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <i className="ti ti-linkedin"></i>
                        </a>
                      </li>
                      <li className="social-twitter">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <i className="ti ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li className="social-pinterest">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Pinterest"
                        >
                          <i className="ti ti-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Useful Links */}
              <div className="col-lg-4 widget-area">
                <div className="widget widget_nav_menu clearfix">
                  <h3 className="widget-title">Useful Links</h3>
                  <div className="d-flex">
                    <ul className="menu-footer-service-link menu">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/careers">Careers</Link>
                      </li>
                      {/* <li><Link to="/blog">Blog</Link></li> */}
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Popular Posts */}
              {/* <div className="col-lg-4 widget-area">
                <div className="widget widget-recent-post clearfix">
                  <h3 className="widget-title">Popular Posts</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <img
                        className="img-fluid"
                        src="/images/footer-post-01.jpg"
                        width="72"
                        height="80"
                        alt="post-img"
                      />
                      <div className="post-detail">
                        <span className="post-date">April 17, 2021</span>
                        <Link to="/">Benefits of Travel Nursing</Link>
                      </div>
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="/images/footer-post-02.jpg"
                        width="72"
                        height="80"
                        alt="post-img"
                      />
                      <div className="post-detail">
                        <span className="post-date">March 05, 2021</span>
                        <Link to="/">
                          How to Get Started in Healthcare Staffing
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}

              {/* Contact Info */}
              <div className="col-lg-4 widget-area">
                <div className="widget widget-widget_contact clearfix">
                  <h3 className="widget-title">Get In Touch</h3>
                  <ul className="widget_contact_wrapper">
                    <li>
                      Phone: <a href="tel:7122038160">712-203-8160</a>
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:hopemedicalstaffing@gmail.com">
                        hopemedicalstaffing@gmail.com
                      </a>
                    </li>
                    <li>Address: 11604 SW 35th Ave, Portland, OR 97219</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bottom-footer-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-lg-flex align-items-center justify-content-between">
                <div className="copyright">
                  <div className="d-sm-flex align-items-center justify-content-center">
                    <div>
                      © {currentYear}{" "}
                      <a
                        href="https://mslabdesigns.com/"
                        className="ttm-textcolor-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        | Designed with ❤️ by Mslabdesigns
                      </a>
                      . All rights reserved.
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="footer-nav-menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    {/* <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li> */}
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
