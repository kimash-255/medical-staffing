import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean);
  const currentPage =
    currentPath.length > 0 ? currentPath[currentPath.length - 1] : "home";

  const pageName = currentPage
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="ttm-page-title-row">
      <div className="ttm-page-title-row-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-title-heading">
                <h2 className="title">{pageName}</h2>
              </div>
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-wrapper-inner">
                    <span>
                      <Link title="Home" to="/" className="home">
                        Home
                      </Link>
                    </span>
                    {currentPage !== "home" && (
                      <>
                        <span className="ttm-bread-sep">&nbsp; / &nbsp;</span>
                        <span>{pageName}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
