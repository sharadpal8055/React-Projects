import React from "react";
import {Link} from "react-router-dom"
// const Sidebar = ({selectedtab,setselectedtab}) => {
  const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "153px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-white $`}
         
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/createpost" className={`nav-link text-white `}
          >
            CreatePost
          </Link>
        </li>
      </ul>

      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src="https://github.com/mdo.png"
            alt="user"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>

        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
