import { useState } from "react";
import "../styles/SideNav.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { departmentFilter } from "../Redux/Slice";


const SideNav = () => {
  const [isOpenDepartmentDiv, setIsOpenDepartmentDiv] = useState(false);

  const [arrowDepartment, setArrowDepartment] = useState("right");

  const handleOpenDepartmentDiv = () => {
    setIsOpenDepartmentDiv(!isOpenDepartmentDiv);
    setArrowDepartment(isOpenDepartmentDiv ? "right" : "down");
  };

  const dispatch = useDispatch();



  const handleSelectDepartment = (d)=>{
    dispatch(departmentFilter(d))
    // console.log(d)
  }

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
              <p onClick={() => handleSelectDepartment('ECE')} >ECE</p>
              <p onClick={() => handleSelectDepartment('EEE')} >EEE</p>
              <p onClick={() => handleSelectDepartment('CSE')} >CSE</p>
              <p onClick={() => handleSelectDepartment('Civil')} >Civil</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
