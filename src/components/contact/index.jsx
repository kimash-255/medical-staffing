import React from "react";

const Contact = () => {
  return (
    <div className="site-main">
      {/* contact-form-section */}
      <section className="ttm-row contact-form-section ttm-bgcolor-grey clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                  <h3>Send Message</h3>
                  <h2 className="title">Drop Your Links To Our Experts</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-20 res-991-pt-10">
            <div className="col-lg-8">
              <div className="ttm-bgcolor-white spacing-15">
                <form id="contact_form" className="contact_form wrap-form clearfix" method="post" action="#">
                  <div className="row ttm-boxes-spacing-20px">
                    <div className="col-md-6">
                      <label>
                        <span className="text-input">
                          <input name="name" type="text" placeholder="Your Name*" required />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <span className="text-input">
                          <input name="email" type="email" placeholder="Your Email*" required />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <span className="text-input">
                          <input name="phone" type="text" placeholder="Phone Number*" required />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-6">
                      <label>
                        <span className="text-input">
                          <input name="subject" type="text" placeholder="Subject*" required />
                        </span>
                      </label>
                    </div>
                    <div className="col-md-12">
                      <label>
                        <span className="text-input">
                          <textarea name="message" rows="5" placeholder="Message*" required></textarea>
                        </span>
                      </label>
                    </div>
                    <div className="col-lg-12 mt_10">
                      <button type="submit" className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor">
                        Send Now!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 res-991-pt-50">
              <div className="ttm-bgcolor-white w-100 spacing-18">
                <div className="featured-icon-box icon-align-top-content style16">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor style2">
                      <i className="flaticon flaticon-support"></i>
                    </div>
                  </div>
                  <div className="featured-content pt-0">
                    <div className="featured-title">
                      <h3>Let’s Call or Email</h3>
                    </div>
                    <div className="featured-desc">
                      <p>info@careprostaffing.com</p>
                      <p>+1 (347) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="ttm-horizontal_sep style1"></div>

                <div className="featured-icon-box icon-align-top-content style16">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor style2">
                      <i className="ti ti-user"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>Join Our Staffing Team</h3>
                    </div>
                    <div className="featured-desc">
                      <p>recruitment@careprostaffing.com</p>
                      <p>+1 (646) 987-6543</p>
                    </div>
                  </div>
                </div>
                <div className="ttm-horizontal_sep style1"></div>

                <div className="featured-icon-box icon-align-top-content style16">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-size-lg ttm-icon_element-onlytxt ttm-icon_element-color-skincolor style3">
                      <i className="fa fa-skype"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>Chat or Video Call</h3>
                    </div>
                    <div className="featured-desc">
                      <p>carepro.staffing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map-section */}
      <section className="ttm-row map-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="addres-info ttm-bgcolor-skincolor">
                <ul className="ttm-list style2">
                  <li>
                    <h3>Office Location</h3>
                    <p>CarePro Staffing HQ</p>
                  </li>
                  <li className="mt-15">
                    <h3>Address</h3>
                    <p>1356 Broadway, Suite 1201, New York, NY 10018</p>
                  </li>
                </ul>
                <div className="pt-20">
                  <a href="https://www.google.com/maps" className="ttm-underline-strong" target="_blank" rel="noopener noreferrer">
                    Get Directions!
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="res-991-pt-30">
                <div id="google_map" className="google_map">
                  <div className="map_container">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8335115792354!2d-73.98755008459674!3d40.7519849793275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18a5ef5f%3A0x3a9b3f9eabf5c837!2s1356%20Broadway%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sus!4v1629115262628!5m2!1sen!2sus"
                        height="365"
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional images below the map */}
          <div className="row mt-30">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="ttm_single_image-wrapper">
                <img className="img-fluid" src="/images/single-img-15.jpg" width="572" height="330" alt="Office" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 res-575-mt-30">
              <div className="ttm_single_image-wrapper">
                <img className="img-fluid" src="/images/single-img-16.jpg" width="572" height="330" alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;
