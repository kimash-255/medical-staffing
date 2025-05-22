import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Career = () => {
  const jobs = [
    {
      title: "Licensed Practical Nurse (LPN)",
      description:
        "Deliver basic medical care, monitor patient health, and support RNs and doctors in clinical settings.",
      link: "/contact",
    },
    {
      title: "Certified Nursing Assistant (CNA)",
      description:
        "Assist patients with daily activities, provide personal care, and report changes in patient conditions.",
      link: "/contact",
    },
    {
      title: "Registered Nurse (RN)",
      description:
        "Provide direct patient care, administer medication, and coordinate with interdisciplinary teams.",
      link: "/contact",
    },
    {
      title: "Patient Sitters",
      description:
        "Provide non-medical support and companionship to patients needing observation and comfort.",
      link: "/contact",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds per slide
  };

  return (
    <section className="ttm-row project-details-section clearfix">
      <div className="container">
        <div className="row">
          {/* Left Column: Static Images */}
          <div className="col-lg-6">
            <div className="ttm_single_image-wrapper">
              <img
                className="img-fluid"
                src="/images/single-img-18.jpg"
                width="544"
                height="332"
                alt="Healthcare staffing"
              />
            </div>
            <div className="ttm_single_image-wrapper mt-30">
              <img
                className="img-fluid"
                src="/images/single-img-19.jpg"
                width="544"
                height="321"
                alt="Caregiver job"
              />
            </div>
          </div>

          {/* Right Column: Job Slider replacing old Project Details */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="mb-30 res-991-mt-30">
                <h3 className="font-size-30">Open Positions</h3>
                <Slider {...sliderSettings}>
                  {jobs.map((job, index) => (
                    <div key={index} className="career-slide">
                      <h4>{job.title}</h4>
                      <p>{job.description}</p>
                      <a
                        href={job.link}
                        className="ttm-btn ttm-btn-size-sm ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                      >
                        Apply
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Static List: keep as-is for design consistency */}
              <ul className="ttm-list style4">
                <li>
                  <h3>Location</h3>
                  <p>New York United States</p>
                </li>
                <li>
                  <h3>Clients</h3>
                  <p>Envato Group, US</p>
                </li>
                <li>
                  <h3>Category</h3>
                  <p>Nursing & Support Staff</p>
                </li>
                <li>
                  <h3>Project Head</h3>
                  <p>Mr. John Meckency</p>
                </li>
              </ul>

              {/* Social Media Icons */}
              <div id="onclick-icon-share">
                <ul className="social-icons square style3">
                  <li className="social-twitter">
                    <a
                      href="https://twitter.com/themetechmount"
                      rel="noopener"
                      target="_blank"
                      aria-label="twitter"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="social-facebook">
                    <a
                      href="https://www.facebook.com/themetechMount18"
                      rel="noopener"
                      target="_blank"
                      aria-label="facebook"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="social-pinterest">
                    <a
                      href="https://in.pinterest.com/themetechmount/_created/"
                      rel="noopener"
                      target="_blank"
                      aria-label="pinterest"
                    >
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="social-linkedin">
                    <a
                      href="https://www.linkedin.com/company/themetech-mount/"
                      rel="noopener"
                      target="_blank"
                      aria-label="linkedin"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="d-sm-flex justify-content-between mt-30 res-991-mt-30">
                <a
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                  href="/contact"
                >
                  Contact Us
                </a>
                <button className="ttm-btn ttm-btn-size-lg ttm-btn-shape-square ttm-btn-style-border ttm-btn-style-fill ttm-btn-color-grey">
                  <i className="icon-share"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
