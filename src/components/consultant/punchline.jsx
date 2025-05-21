import React from "react";
import { Link } from "react-router-dom";

const Punchline = () => {
    return(
        // <!--consultant-section-->
        <section className="ttm-row consultant-section bg-img2 ttm-bgcolor-dark ttm-textcolor-white ttm-bg ttm-bgimage-yes clearfix">
            <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div className="container">
                <div className="row row-title">
                    <div className="col-lg-12 m-auto">
                        {/* <!-- section title --> */}
                        <div className="section-title title-style-center_text style2">
                            <div className="title-header">
                                <h3>Expert Healthcare Staffing Solutions</h3>
                                <h2 className="title">
                                  We Connect <span>Top Medical Professionals</span> With <span>Your Facility</span>
                                </h2>
                            </div>
                        </div>
                        {/* <!-- section title end --> */}
                        <div className="consultant-doc-info d-sm-flex justify-content-center align-items-center">
                            <div className="pr-30 res-575-pr-0 text-center">
                                <Link 
                                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mt-10" 
                                  to="/contact-us"
                                  tabIndex={0}
                                >
                                  Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!--consultant-section-->
    );
};
export default Punchline;
