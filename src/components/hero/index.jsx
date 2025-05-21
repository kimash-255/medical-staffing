import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        // Banner
        <div className="banner_slider banner_slider_1">
            {/* Slide 1 with video background */}
            <div className="slide s2 relative overflow-hidden">
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
                <div className="slide__content relative z-10">
                    <div className="container g-0 position-relative">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-block d-xl-flex flex-row justify-content-between">
                                    <div className="slide__content--headings align-self-center">
                                        <div className="slide-icon-img" data-animation="fadeInLeft" data-delay="0.5s" data-duration="0.8s">
                                            <img className="img-fluid d-inline-block" src="images/slide-img.png" width="46" height="44" alt="slide-img" />
                                            <span>TRUSTED TALENT</span>
                                            <span>CLINICAL EXCELLENCE</span>
                                            <span>ON-DEMAND STAFFING</span>
                                        </div>
                                        <h2 className="ttm-textcolor-white" data-animation="fadeInLeft" data-delay="0.7s" data-duration="0.8s">Reliable Staffing for&nbsp;Healthcare Facilities</h2>
                                        <div className="d-inline-block pt-[30px]" data-animation="fadeInUp" data-delay="0.6s" data-duration="0.5s">
                                            <Link className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" to="/contact-us">Request Staff Today</Link>
                                        </div>
                                    </div>
                                    <div className="d-lg-none d-xl-block align-self-center spacing-24">
                                        <div className="testimonials style6" data-animation="fadeInRight" data-delay="0.8s" data-duration="0.6s">
                                            <div className="testimonial-content">
                                                <div className="testimonial-avatar">
                                                    <div className="testimonial-img">
                                                        <img className="img-fluid" src="images/testimonial/15.jpg" alt="testimonial-img" width="140" height="140" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-caption">
                                                    <h3><Link to="/our-team">Alex Sam Martin</Link></h3>
                                                    <label>Registered Nurse</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonials style6" data-animation="fadeInRight" data-delay="1s" data-duration="0.6s">
                                            <div className="testimonial-content">
                                                <div className="testimonial-avatar">
                                                    <div className="testimonial-img">
                                                        <img className="img-fluid" src="images/testimonial/16.jpg" alt="testimonial-img" width="140" height="140" />
                                                    </div>
                                                </div>
                                                <div className="testimonial-caption">
                                                    <h3><Link to="/our-team">Dr. Maria Mitchell</Link></h3>
                                                    <label>Staffing Coordinator</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
