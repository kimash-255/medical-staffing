import { useState } from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="top-instruction ttm-bgcolor-skincolor ttm-textcolor-white clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <p className="mb-0 text-center flex-grow-1">
              Important info for patients and caregivers about{' '}
              <Link to="/contact">
                <span>Cardiology, Coronavirus, and COVID-19</span>
              </Link>
            </p>
            <button className="close-icon btn btn-link text-white" onClick={() => setVisible(false)} aria-label="Close notification">
              <i className="ti ti-close"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
