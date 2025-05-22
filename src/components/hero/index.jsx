import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Banner
    <div className="banner_slider banner_slider_1">
      {/* Slide 1 with video background */}
      <div className="slide s2 relative overflow-hidden h-screen">
        {/* Background Video */}
        <div className="slide_img absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(93, 156, 172, 0.5)",
            zIndex: 10,
          }}
        ></div>

        {/* Content */}
        <div className="container relative z-20 h-full flex items-end pb-16">
          <div className="row w-full">
            <div className="col-lg-8 col-md-12 col-sm-12">
             <div className="slide__content--headings text-white mt-20 sm:mt-6">
  <h2
    className="ttm-textcolor-white text-2xl sm:text-5xl font-bold mt-6 leading-tight !important"
    data-animation="fadeInLeft"
    data-delay="0.7s"
    data-duration="0.8s"
  >
    Medical Staffing Solutions
  </h2>
  <h6
    className="ttm-textcolor-white text-sm sm:text-xs mt-4 leading-relaxed !important"
    data-animation="fadeInLeft"
    data-delay="0.9s"
    data-duration="0.8s"
  >
    Trusted medical staffing connecting skilled nurses and allied health professionals with facilities for per diem to long-term, local and travel assignments—ensuring consistent, quality patient care.
  </h6>
  <div
    className="pt-6"
    data-animation="fadeInUp"
    data-delay="0.6s"
    data-duration="0.5s"
  >
    <Link
      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
      to="/contact"
    >
      Apply Today
    </Link>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
    // Banner end
  );
};

export default Hero;
