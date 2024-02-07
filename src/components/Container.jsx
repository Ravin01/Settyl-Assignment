/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../../config";

import "../styles/Container.scss";
import { useSelector } from "react-redux";

const Container = ({ searchInput }) => {
  const [data, setData] = useState([]);

  const [emptyData, setEmptyData] = useState([]);

  const departmentFilter = useSelector(action => action.department)



  const getAllData = async () => {
    try {
      let data = await axios.get(`${backendUrl}`);
      setEmptyData(data.data);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    if (searchInput !== "" || departmentFilter !== undefined) {
      const filter = emptyData
      .filter((stu) => searchInput !== '' ?
        stu.name.toLowerCase().includes(searchInput.toLowerCase()) : true
      )
      .filter((stu) =>  departmentFilter!== '' ? stu.department === departmentFilter : true)
      setData(filter);
    }
    else {
      setData(emptyData);
    }
  }, [searchInput, departmentFilter]);

 
  return (
    <div className="container-con">
      {data.length === 0 ? (
        <div className="container-empty">
          <p>loading ...</p>
        </div>
      ) : (
        data.map((d, i) => (
          <div className="container-item" key={i}>
            <img src={d.photo} alt="" />
            <h4>{d.name}</h4>
            <h6>{d.department}</h6>
            <p>{d.attendance}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Container;
