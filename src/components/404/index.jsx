import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    // <!--site-main start-->
    <div className="site-main">
      {/* <!--error-404 start--> */}
      <section className="error-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <header className="page-header">
                  <div className="title-with-img d-flex justify-content-center align-items-center">
                    <div>
                      <h2 className="page-title">4</h2>
                    </div>
                    <div>
                      <img
                        className="img-fluid"
                        src="/images/error-404.png"
                        width="412"
                        height="423"
                        alt="error-404"
                      />
                    </div>
                    <div>
                      <h2 className="page-title">4</h2>
                    </div>
                  </div>
                  <h3>Page Not Found</h3>
                </header>
                <div className="page-content">
                  <p>
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                  </p>
                </div>
                <Link
                  to="/"
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-darkgrey"
                >
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--error-404 end--> */}
    </div>
    // <!--site-main end-->
  );
};

export default NotFound;
