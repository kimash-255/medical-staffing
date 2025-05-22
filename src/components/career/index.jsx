import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Career = () => {
  const jobs = [
    // Nursing Jobs
    {
      title: "Certified Nursing Assistant (CNA)",
      description:
        "Assist residents with daily living activities, provide essential care, and support nursing teams.",
      link: "/contact",
    },
    {
      title: "Community-Based Residential Facility (CBRF) Caregiver",
      description:
        "Provide compassionate care and assistance to residents, ensuring their safety and well-being.",
      link: "/contact",
    },
    {
      title: "Medication Aide (CMA, TMA, QMA)",
      description:
        "Administer medications and maintain accurate documentation in long-term care settings.",
      link: "/contact",
    },
    {
      title: "Licensed Practical Nurse (LPN)",
      description:
        "Deliver direct patient care, manage medications, and collaborate with registered nurses.",
      link: "/contact",
    },
    {
      title: "Registered Nurse (RN)",
      description:
        "Lead patient care initiatives, oversee medical treatments, and support healthcare teams.",
      link: "/contact",
    },

    // Allied Therapy Jobs
    {
      title: "Physical Therapist (PT)",
      description:
        "Help patients improve movement, manage pain, and recover from injuries.",
      link: "/contact",
    },
    {
      title: "Occupational Therapist (OT)",
      description:
        "Assist patients in regaining independence through daily activity training and therapy.",
      link: "/contact",
    },
    {
      title: "Respiratory Therapist (RT)",
      description:
        "Provide critical care and treatment for patients with breathing disorders.",
      link: "/contact",
    },
    {
      title: "Speech-Language Pathologist (SLP)",
      description:
        "Diagnose and treat speech, communication, and swallowing disorders.",
      link: "/contact",
    },
    {
      title: "Physical Therapist Assistant (PTA)",
      description:
        "Support physical therapists by providing therapy treatments and exercises to patients.",
      link: "/contact",
    },
    {
      title: "Occupational Therapist Assistant (OTA/COTA)",
      description:
        "Work under occupational therapists to provide hands-on therapy and functional training.",
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
    autoplaySpeed: 4000,
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

          {/* Right Column: Job Slider */}
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

              {/* Static List */}
              <ul className="ttm-list style4">
                <li>
                  <h3>Location</h3>
                  <p>New York, United States</p>
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
                  Apply Now
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
