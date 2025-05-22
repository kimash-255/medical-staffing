import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    //  <!--welcome-section-->
    <section class="ttm-row welcome-section ttm-bgcolor-grey clearfix">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            {/* <!-- featured-iconbox --> */}
            <div class="featured-icon-box icon-align-before-content style19">
              <div class="featured-icon">
                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                  <i class="flaticon flaticon-heart-5"></i>
                </div>
              </div>
              <div class="featured-content">
                <div class="featured-title">
                  <h3>
                    <Link to="/careers" tabindex="0">
                      Opportunities for Healthcare Careers
                    </Link>
                  </h3>
                </div>
                <div class="featured-desc">
                  <p>
                    Access a variety of per diem, local, and travel long-term
                    assignments across skilled care environments.
                  </p>
                </div>
              </div>
              <div class="featured-bottom">
                <Link class="" to="/careers" tabindex="0">
                  <i class="ti ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="featured-icon-box icon-align-before-content style19">
              <div class="featured-icon">
                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                  <i class="flaticon flaticon-doctor-1"></i>
                </div>
              </div>
              <div class="featured-content">
                <div class="featured-title">
                  <h3>
                    <Link to="/about" tabindex="0">
                      Staffing Solutions for Care Facilities
                    </Link>
                  </h3>
                </div>
                <div class="featured-desc">
                  <p>
                    Adaptable workforce options tailored to support continuity
                    of care and meet operational demands.
                  </p>
                </div>
              </div>
              <div class="featured-bottom">
                <Link class="" to="/about" tabindex="0">
                  <i class="ti ti-arrow-top-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="featured-icon-box icon-align-before-content style19">
              <div class="featured-icon">
                <div class="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor">
                  <i class="flaticon flaticon-defribillator"></i>
                </div>
              </div>
              <div className="featured-content">
  <div className="featured-title">
    <h3>
      <Link to="/about" tabIndex={0}>
        Collaborate for Success
      </Link>
    </h3>
  </div>
  <div className="featured-desc">
    <p>
      Impacting the Healthcare Staffing Industry Together
    </p>
  </div>
</div>

              <div class="featured-bottom">
                <Link class="" to="/about" tabindex="0">
                  <i class="ti ti-arrow-top-right"></i>
                </Link>
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
