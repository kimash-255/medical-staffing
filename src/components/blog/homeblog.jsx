import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import blogData from "../../data/blog";

const HomeBlog = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="ttm-row about-section ttm-bgcolor-grey clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title title-style-center_text">
              <div className="title-header">
                <h3>READ OUR BLOG</h3>
                <h2 className="title mb-0">We Provide Special Service For Patients</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <Slider {...settings} className="slick_slider w-100">
            {blogData.map((post) => (
              <div className="p-3" key={post.id}>
                <div className="featured-imagebox featured-imagebox-blog style2 m-15">
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid"
                      src={post.image}
                      width="740"
                      height="568"
                      alt={post.title}
                    />
                    <div className="post-meta">
                      <span className="ttm-meta-line">{post.date}</span>
                    </div>
                  </div>
                  <div className="featured-content featured-content-blog align-self-center">
                    <div className="featured-title">
                      <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                    </div>
                    <div className="post-meta">
                      <span className="ttm-meta-line byline">
                        <i className="fa fa-user-o"></i>&nbsp;&nbsp;{post.author}
                      </span>
                      <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                      <span className="ttm-meta-line byline">
                        <i className="fa fa-folder-open-o"></i>&nbsp;&nbsp;{post.category}
                      </span>
                    </div>
                    <div className="post-footer">
                      <div className="post-footer-link">
                        <Link
                          className="ttm-btn btn-inline d-block ttm-btn-size-md ttm-icon-btn-right"
                          to={`/blog/${post.slug}`}
                        >
                          Read More<i className="icon-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
