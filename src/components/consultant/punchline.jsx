import React from "react";
import { Link } from "react-router-dom";

const Punchline = () => {
  return (
    <section
      className="ttm-row consultant-section bg-img2 ttm-bgcolor-dark ttm-textcolor-white ttm-bg ttm-bgimage-yes clearfix relative"
      style={{ marginBottom: "5rem" }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(93, 156, 172, 0.5)",
          zIndex: 10,
        }}
      ></div>

      <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>

      <div className="container relative" style={{ zIndex: 20 }}>
        <div className="row row-title">
          <div className="col-lg-12 m-auto text-center">
            <h3>Tell Us About Your Friends</h3>
            <h2>
              Refer your friends and get a bonus today
            </h2>
            <div className="consultant-doc-info d-sm-flex justify-content-center align-items-center">
              <div className="pr-30 res-575-pr-0 text-center">
                <Link
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                  to="/contact"
                  tabIndex={0}
                >
                  REFER A FRIEND
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Punchline;
