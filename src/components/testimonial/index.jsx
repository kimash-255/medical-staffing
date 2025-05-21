import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import testimonialsData from '../../data/testimonial';

const Testimonial = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000, // Change every 5 seconds
    infinite: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    // <!--testimonial-section-->
    <section className="ttm-row zero_padding-section testimonial-section-homepage clearfix">
      <div className="container">
        <div className="row g-0">
          <div className="col-xl-5 col-lg-12">
            <div className="box-shadow ttm-bg ttm-col-bgcolor-yes ttm-left-span ttm-bgcolor-skincolor spacing-21">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
              <div className="layer-content">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <!-- section title --> */}
                    <div className="section-title mb-18">
                      <div className="title-header">
                        <h3 className="ttm-textcolor-white">PATIENTS TESTIMONIALS</h3>
                        <h2 className="title">What Are They Saying</h2>
                      </div>
                    </div>
                    {/* <!-- section title end --> */}
                  </div>
                </div>
                <div className="ttm-horizontal_sep mt-5"></div>
                <div className="featured-icon-box icon-align-before-content style20">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-white">
                      <i className="flaticon flaticon-support"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-desc">
                      <p>If you have any questions or need help contact with our team, or call<Link to="contact-us"><span> (003) 123 456 7890 </span></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 pt-60 res-1199-pt-0">
            <div className="box-shadow ttm-bg ttm-col-bgimage-yes ttm-right-span col-bg-img-eleven spacing-22">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer ttm-bgcolor-darkgrey"></div>
              <div className="layer-content">
                <div className="row">
                  <Slider {...settings} className="slick_slider g-0">
                    {testimonialsData.map((testimonial) => (
                      <div className="testimonials style5" key={testimonial.id}>
                        <div className="testimonial-content">
                          <div className="row">
                            <div className="col-md-3 align-self-center">
                              <div className="testimonial-bottom">
                                <div className="testimonial-avatar">
                                  <div className="testimonial-img">
                                    <img className="img-fluid" src={testimonial.image} alt="testimonial-img" width="80" height="80"/>
                                  </div>
                                </div>
                                <div className="testimonial-caption">
                                  <h3>{testimonial.name}</h3>
                                  <label>{testimonial.role}</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-9 res-767-pt-20 res-767-pr-15">
                              <div className="testimonial-desc">
                                <blockquote className="testimonial-text">
                                  {testimonial.quote}
                                </blockquote>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!--testimonial-section-end--> */}
  );
};

export default Testimonial;