import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return(
        //  <!--welcome-section-->
        <section class="ttm-row welcome-section ttm-bgcolor-grey clearfix">
            <div class="container-fluid">
                <div class="row plr15 res-1199-pl-0 res-1199-pr-0">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        {/* <!-- featured-iconbox --> */}
                        <div class="featured-icon-box icon-align-before-content style19">
                            <div class="featured-icon">
                                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                                    <i class="flaticon flaticon-heart-5"></i>
                                </div>
                            </div>
                            <div class="featured-content">
                                <div class="featured-title">
                                    <h3><Link href="about-us.html" tabindex="0">Tailored Staffing Solutions</Link></h3>
                                </div>
                                <div class="featured-desc">
                                    <p>We match healthcare facilities with qualified professionals—when and where you need them.</p>
                                </div>
                            </div>
                            <div class="featured-bottom">
                                <Link class="" href="about-us.html" tabindex="0"><i class="ti ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="featured-icon-box icon-align-before-content style19">
                            <div class="featured-icon">
                                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                                    <i class="flaticon flaticon-doctor-1"></i>
                                </div>
                            </div>
                            <div class="featured-content">
                                <div class="featured-title">
                                    <h3><Link href="about-us.html" tabindex="0">Trusted Healthcare Professionals</Link></h3>
                                </div>
                                <div class="featured-desc">
                                    <p>Our nurses, clinicians, and support staff are vetted and ready to deliver top-tier care.</p>
                                </div>
                            </div>
                            <div class="featured-bottom">
                                <Link class="" href="about-us.html" tabindex="0"><i class="ti ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="featured-icon-box icon-align-before-content style19">
                            <div class="featured-icon">
                                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                                    <i class="flaticon flaticon-defribillator"></i>
                                </div>
                            </div>
                            <div class="featured-content">
                                <div class="featured-title">
                                    <h3><Link href="about-us.html" tabindex="0">24/7 Availability</Link></h3>
                                </div>
                                <div class="featured-desc">
                                    <p>Our staffing team is available around the clock for urgent or short-notice placements.</p>
                                </div>
                            </div>
                            <div class="featured-bottom">
                                <Link class="" href="about-us.html" tabindex="0"><i class="ti ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="featured-icon-box icon-align-before-content style19">
                            <div class="featured-icon">
                                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                                    <i class="flaticon flaticon-cardiology-2"></i>
                                </div>
                            </div>
                            <div class="featured-content">
                                <div class="featured-title">
                                    <h3><Link href="about-us.html" tabindex="0">Compliance & Credentialing</Link></h3>
                                </div>
                                <div class="featured-desc">
                                    <p>We handle all credential checks and ensure every placement meets regulatory standards.</p>
                                </div>
                            </div>
                            <div class="featured-bottom">
                                <Link class="" href="about-us.html" tabindex="0"><i class="ti ti-arrow-top-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!--welcome-section end-->
    );
};

export default Welcome;
