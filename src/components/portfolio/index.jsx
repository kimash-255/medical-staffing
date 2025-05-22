import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import portfolioData from "../../data/portfolio";

const Portfolio = () => {
 const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,  // faster autoplay
  speed: 800,           // smoother, quicker slide transition
  centerMode: true,
  centerPadding: "262px",
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
        centerMode: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
        centerMode: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        centerPadding: "0px",
        centerMode: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        centerPadding: "0px",
        centerMode: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
        centerMode: false,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
        centerMode: false,
      },
    },
  ],
};


  return (
    // <!-- portfolio-section-->
    <section className="ttm-row bottom_zero_padding-section clearfix">
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-5 m-auto">
            {/* <!--section-title --> */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>OUR CAREER OPPORTUNITIES</h3>
                <h2 className="title">
                  Your Bridge to Healthcare Careers
                </h2>
              </div>
            </div>
            {/* <!--section-title-end --> */}
          </div>
        </div>
        <div className="row pt-20 res-991-pt-10">
          <Slider
            {...settings}
            className="slick_slider slick-arrows-style1 w-100"
          >
            {portfolioData.map((item) => (
              <div key={item.id} className="px-2">
                {/* <!-- featured-imagebox-portfolio --> */}
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  <div className="ttm-portfolio-featured-wrapper">
                    {/* <!-- ttm-box-view-overlay --> */}
                    <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                      {/* <!-- featured-thumbnail --> */}
                      <div className="featured-thumbnail">
                        <img
                          className="img-fluid"
                          src={item.image}
                          width={item.width}
                          height={item.height}
                          alt={item.alt}
                        />
                      </div>
                      {/* <!-- featured-thumbnail end--> */}
                      <div className="ttm-media-link">
                        <Link to="/about" className="ttm_link">
                          <i className="ti ti-plus"></i>
                        </Link>
                      </div>
                    </div>
                    {/* <!-- ttm-box-view-overlay end--> */}
                  </div>
                </div>
                {/* <!-- featured-imagebox-portfolio --> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    // {/* <!-- portfolio-section end--> */}
  );
};

export default Portfolio;
