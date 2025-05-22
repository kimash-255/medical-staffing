import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div
      className="top-instruction ttm-textcolor-white clearfix"
      style={{ backgroundColor: 'rgb(42, 51, 78)' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <p className="mb-0 text-center flex-grow-1">
              Reach us via{" "}
              <a href="tel:+17122038160" className="text-white">
                +1 (712) 203-8160
              </a>,{" "}
              <a href="mailto:hopemedicalstaffing@gmail.com" className="text-white">
                hopemedicalstaffing@gmail.com
              </a>{" "}
              &nbsp;|&nbsp; Office Hours: Monday - Friday: 10:00 - 18:00{" "}
              &nbsp;|&nbsp; Address: 11604 SW 35th Ave, Portland, OR 97219
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
