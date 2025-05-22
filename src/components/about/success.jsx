import React from "react";

const Success = () => {
  return (
    //  <!-- success-section -->
    <section className="ttm-row success-section clearfix">
      <div className="container">
        <div className="row">
          <div className="row">
            {/* <!-- section title --> */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>NOTABLE ACHIEVEMENTS</h3>
                <h2 className="title">
                  Recognized for Excellence in Medical Staffing
                </h2>
              </div>
            </div>
            {/* <!-- section title end --> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="featured-imagebox featured-imagebox-achivements">
              <div className="featured-thumbnail">
                <img
                  width="3000"
                  height="2000"
                  className="img-fluid"
                  src="/images/achivement/01.png"
                  alt="image"
                />
              </div>
              <div className="featured-content">
                <div className="featured-title">
                  <h3>
                    <a href="/about" tabIndex="0">
                      ISO 9001 Certified
                    </a>
                  </h3>
                </div>
                <div className="featured-desc">
                  <p>Excellence in Healthcare Staffing Standards</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-imagebox featured-imagebox-achivements">
              <div className="featured-thumbnail">
                <img
                  width="3000"
                  height="2000"
                  className="img-fluid"
                  src="/images/achivement/02.png"
                  alt="image"
                />
              </div>
              <div className="featured-content">
                <div className="featured-title">
                  <h3>
                    <a href="/about" tabIndex="0">
                      Best Staffing Agency 2024
                    </a>
                  </h3>
                </div>
                <div className="featured-desc">
                  <p>Awarded for Outstanding Placement in Medical Facilities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="featured-imagebox featured-imagebox-achivements">
              <div className="featured-thumbnail">
                <img
                  width="3000"
                  height="2000"
                  className="img-fluid"
                  src="/images/achivement/03.png"
                  alt="image"
                />
              </div>
              <div className="featured-content">
                <div className="featured-title">
                  <h3>
                    <a href="/about" tabIndex="0">
                      Top Talent Provider
                    </a>
                  </h3>
                </div>
                <div className="featured-desc">
                  <p>
                    Recognized for Supplying Skilled Healthcare Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- success-section-end --> */}
  );
};

export default Success;
