import React from "react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    //  <!--our-info-section-->
    <section class="ttm-row our-info-section clearfix">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="">
              <div class="ttm_single_image-wrapper">
                <img
                  class="img-fluid"
                  src="images/single-img-01.jpg"
                  width="1140"
                  height="1196"
                  alt="single-img-01"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="pl-30 pt-50 res-1199-pl-0">
              <div class="row">
                <div class="col-lg-12">
                  {/* <!--section-title --> */}
                  <div class="section-title">
                    <div class="title-header">
                      <h3>WHY CHOOSE US</h3>
                      <h2 class="title">Reliable Medical Staffing Solutions</h2>
                    </div>
                  </div>
                  {/* <!--section-title-end --> */}
                </div>
              </div>
              <div class="mt_5">
                <p>
                  Whether you need short-term, long-term, or emergency
                  coverage—our staffing experts ensure you're never understaffed
                  again.
                </p>
              </div>
              <div class="row">
                <div class="col-sm-9">
                  <div class="featured-icon-box icon-align-before-content style8">
                    <div class="featured-icon">
                      <div class="ttm-icon ttm-icon_element-size-md style1 ttm-icon_element-color-skincolor ttm-bgcolor-grey">
                        <i class="flaticon flaticon-heart-beat"></i>
                      </div>
                    </div>
                    <div class="featured-content">
                      <div class="featured-title">
                        <h3>HEALTHCARE OPPORTUNITIES</h3>
                      </div>
                      <div class="featured-desc">
                        <p>
                         Every candidate undergoes rigorous credential verification to ensure quality and compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-9">
                  <div class="featured-icon-box icon-align-before-content style8">
                    <div class="featured-icon">
                      <div class="ttm-icon ttm-icon_element-size-md style1  ttm-icon_element-color-skincolor ttm-bgcolor-grey">
                        <i class="flaticon flaticon-microsurgery"></i>
                      </div>
                    </div>
                    <div class="featured-content">
                      <div class="featured-title">
                        <h3>STAFFING SOLUTIONS</h3>
                      </div>
                      <div class="featured-desc">
                        <p>
                         We rapidly deploy qualified healthcare professionals within 24 to 48 hours to meet your urgent staffing needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ttm-horizontal_sep mt-40 mb-40 res-991-mt-30 res-991-mb-30"></div>
              {/* <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="ttm_single_image-wrapper">
                    <img
                      class="img-fluid"
                      src="images/single-img-24.jpg"
                      width="960"
                      height="528"
                      alt="single-img-24"
                    />
                  </div>
                </div>
                <div class="col-md-8 col-sm-8 align-self-center res-575-mt-20">
                  <h3 class="mb-0">
                    Serving Healthcare Facilities Nationwide Since 1996
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!--our-info-section end--> */}
  );
};

export default WhyChooseUs;
