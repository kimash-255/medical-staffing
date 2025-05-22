import React from "react";
import { useParams } from "react-router-dom";
import serviceDetailData from "./serviceDetailData";
import Layout from "../layout";
import Breadcrumb from "../hero/breadcrump";

const Single = () => {
  const { slug } = useParams();
  const service = serviceDetailData.find((item) => item.slug === slug);

  if (!service) return <div>Service not found.</div>;

  return (
    <Layout>
      <Breadcrumb />
      <div className="ttm-row top_zero_padding-section sidebar ttm-sidebar-top clearfix mt-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 widget-area sidebar-top ttm-bgcolor-grey">
              <aside className="widget widget-nav-menu">
                <ul className="widget-menu">
                  {serviceDetailData.map((s) => (
                    <li
                      key={s.slug}
                      className={s.slug === slug ? "active" : ""}
                    >
                      <a href={`/services/${s.slug}`}>{s.title}</a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
            <div className="col-lg-12 content-area pt-90 res-991-pt-50">
              <article className="ttm-service-single-content-area">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="section-title">
                      <div className="title-header">
                        <h2 className="title">{service.mainHeading}</h2>
                      </div>
                    </div>
                    <div className="mt_5">
                      <p>{service.description}</p>
                    </div>
                    <div className="row mt-22">
                      {[0, 1].map((col) => (
                        <div className="col-md-6" key={col}>
                          <ul className="ttm-list ttm-list-style-icon style1">
                            {service.features
                              .slice(col * 3, col * 3 + 3)
                              .map((feat, idx) => (
                                <li key={idx}>
                                  <i className="icon-ok"></i>
                                  <span className="ttm-list-li-content">
                                    {feat}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6 res-991-pt-15">
                    <div className="ttm_single_image-wrapper">
                      <img
                        className="img-fluid"
                        src={service.images[0]}
                        alt="service-img-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="row pt-70 res-991-pt-0 res-991-mt-30">
                  <div className="row pt-70 res-991-pt-0 res-991-mt-30">
                    <div className="col-lg-6">
                      <div className="ttm_single_image-wrapper">
                        <img
                          className="img-fluid"
                          src={service.images[1]}
                          alt="apply-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 res-991-mt-30">
                      <div className="section-title">
                        <div className="title-header">
                          <h2 className="title">Ready to Join Our Team?</h2>
                        </div>
                      </div>
                      <div className="mt_5">
                        <p>
                          We’re always looking for passionate healthcare
                          professionals to join our growing network. Apply now
                          and take the next step in your career with flexible
                          shifts, competitive pay, and nationwide opportunities.
                        </p>
                      </div>
                      <div className="pt-50 res-991-pt-30 d-flex flex-wrap flex-column flex-sm-row">
                        <div className="res-991-mb-15">
                          <a
                            className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                            href="/apply"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Single;
