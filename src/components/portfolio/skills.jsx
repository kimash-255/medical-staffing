const Skills = () => {
  return (
    <section className="ttm-row portfolio-experience-section ttm-bgcolor-darkgrey mt_50 res-991-mt-0 pb-65 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6">
                {/* <!-- section title --> */}
                <div className="section-title mb-0">
                  <div className="title-header">
                    <h3 className="ttm-textcolor-skincolor">OUR EXPERTISE</h3>
                    <h2 className="title">
                      What Our Clients Say About Our Healthcare Staffing
                      Services
                    </h2>
                  </div>
                </div>
                {/* <!-- section title end --> */}
              </div>
              <div className="col-lg-6 col-md-6 align-self-center">
                <div className="d-flex justify-content-start justify-content-md-center">
                  <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-boxed-view ttm-fid-view-lefticon style4 ttm-textcolor-white">
                    <div className="ttm-fid-icon-wrapper ttm-icon_element-color-skincolor">
                      <i className="flaticon flaticon-heart-7"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="420"
                          data-interval="50"
                          data-before=""
                          data-before-style="sup"
                          data-after="+"
                          data-after-style="sub"
                          className="numinate"
                        >
                          420
                        </span>
                        <span className="ml_2">+</span>
                      </h4>
                      <h3 className="ttm-fid-title">
                        Satisfied Healthcare Professionals & Clients
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <div>
              {/* <!-- progress-bar --> */}
              <div className="pb-20 pt-15 res-991-pb-0">
                <div
                  className="ttm-progress-bar style3 mb-35 res-991-mb-30"
                  data-percent="100%"
                >
                  <div className="progress-bar-title">
                    Staffing Placement Success Rate
                  </div>
                  <div className="progress-bar-inner">
                    <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                  </div>
                  <div
                    className="progress-bar-percent"
                    data-percentage="100"
                  ></div>
                </div>
                <div className="ttm-progress-bar style3" data-percent="100%">
                  <div className="progress-bar-title">
                    Client Satisfaction Rate
                  </div>
                  <div className="progress-bar-inner">
                    <div className="progress-bar progress-bar-color-bar_skincolor"></div>
                  </div>
                  <div
                    className="progress-bar-percent"
                    data-percentage="100"
                  ></div>
                </div>
              </div>
              {/* <!-- progress-bar END --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
