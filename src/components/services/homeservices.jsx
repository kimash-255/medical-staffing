import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import servicesData from "../../data/services";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    responsive: [
      { breakpoint: 1020, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    // <!--service-section-->
    <section className="ttm-row services-section ttm-bgcolor-grey clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            {/* <!-- section title --> */}
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>SERVICES WE PROVIDE</h3>
                <h2 className="title">Connecting You With Trusted Medical Talent</h2>
              </div>
            </div>
            {/* <!-- section title end --> */}
          </div>
        </div>

        <div className="row">
          <Slider {...settings} className="slick_slider">
            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="featured-icon-box icon-align-top-content style1">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src={service.icon}
                      width="85"
                      height="85"
                      alt=""
                    />
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>
                        <Link to={`/services/${service.slug}`}>{service.title}</Link>
                      </h3>
                    </div>
                    <div className="featured-desc">
                      <p>{service.desc}</p>
                    </div>
                  </div>
                  <div className="fetured-bottom">
                    <Link
                      to={`/services/${service.slug}`}
                      className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-lg"
                    >
                      <i className="flaticon flaticon-exit"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    // {/* <!--service-section end--> */}
  );
};

export default HomeServices;
