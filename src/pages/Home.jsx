import { Route, Routes, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";

import "../styles/Home.css";
import Dashboard from "../components/Dashboard";
import Page404 from "./Page404";
import { useEffect, useState } from "react";
import Program from "../components/program";
import Student from "../components/Student";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, []);

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="home-container">
      <SideNav />
      <div className="home-main">
        <Nav setSearchInput={setSearchInput} searchInput={searchInput} />

        <div className="home-content">
          <Routes>
            <Route index path="/dashboard" element={<Dashboard />} />
            <Route path="/program" element={<Program />} />
            <Route path="/student" element={<Student />} />
            <Route
              path="/students"
              element={<Container searchInput={searchInput} />}
            />

            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
