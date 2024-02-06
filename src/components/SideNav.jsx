import { useState } from "react";
import "../styles/SideNav.scss";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpenDepartmentDiv, setIsOpenDepartmentDiv] = useState(false);

  const [arrowDepartment, setArrowDepartment] = useState("right");

  const handleOpenDepartmentDiv = () => {
    setIsOpenDepartmentDiv(!isOpenDepartmentDiv);
    setArrowDepartment(isOpenDepartmentDiv ? "right" : "down");
  };

  return (
    <div className="sideNav-container">
      <div className="sideNav-header">
        <h2>Administration</h2>
      </div>
      <div className="sideNav-body">
        <Link to="/dashboard" className="sideNav-body-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <p>Dashboard</p>
        </Link>

        <Link to="/students" className="sideNav-body-link">
          <i className="fa-solid fa-user"></i>
          <p>Students</p>
        </Link>

        <Link to="/program" className="sideNav-body-link">
          <i className="fa-solid fa-calendar"></i>
          <p>Program</p>
        </Link>

        <div className="sideNav-filter">
          <h3 onClick={handleOpenDepartmentDiv}>Department</h3>
          <i className={`fa-solid fa-angle-${arrowDepartment}`}></i>
          {isOpenDepartmentDiv && (
            <div className="sideNav-items">
              <p>ECE</p>
              <p>EEE</p>
              <p>CSE</p>
              <p>Civil</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
