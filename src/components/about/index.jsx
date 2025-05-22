import React from "react";

const About = () => {
  return (
    // <!--about-section-start-->
    <section className="ttm-row about-section-3 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-50 res-991-pt-0">
            <div>
              {/* <!-- section title --> */}
              <div className="section-title">
                <div className="title-header">
                  <h3>ABOUT US</h3>
                  <h2 className="title">
                    Connecting Healthcare Facilities with Top Talent
                  </h2>
                </div>
                <div className="featured-desc">
                  <p>
                    We provide reliable healthcare staffing solutions, matching
                    qualified nurses, doctors, and specialists with hospitals
                    and clinics to ensure quality patient care and operational
                    excellence.
                  </p>
                </div>
              </div>
              {/* <!-- section title end --> */}
              <div className="pt-10 res-991-pt-0">
                <a
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-icon-btn-right ttm-btn-color-skincolor"
                  href="/contact"
                  tabIndex="0"
                >
                  Contact Us
                </a>
              </div>
              <div>
                <div className="ttm-horizontal_sep mt-40 mb-40 res-991-mt-30 res-991-mb-15"></div>
              </div>
              <div className="row">
                <div className="col-sm-9">
                  <div className="featured-icon-box icon-align-before-content style8">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-size-md style1 ttm-icon_element-color-skincolor ttm-bgcolor-grey">
                        <i className="flaticon flaticon-healthcare"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Quality Staffing</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Carefully vetting and placing healthcare professionals
                          to meet your facility's unique needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-6">
                                    <div className="featured-icon-box icon-align-before-content style8">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-size-md style1 ttm-icon_element-color-skincolor ttm-bgcolor-grey">
                                                <i className="flaticon flaticon-teamwork"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Trusted Partnerships</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Building long-term relationships with healthcare providers for ongoing staffing success.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
              </div>
              <div className="about-image3 mt-30">
                <div className="ttm_single_image-wrapper">
                  <img
                    className="img-fluid"
                    src="/images/single-img-09.jpg"
                    width="589"
                    height="372"
                    alt="Healthcare staffing team"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="res-991-pt-50 text-end">
              <div className="ttm_single_image-wrapper">
                <img
                  className="img-fluid m-auto"
                  src="/images/single-img-10.jpg"
                  width="503"
                  height="793"
                  alt="Healthcare staffing support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!--about-section-end--> */}
  );
};

export default About;
