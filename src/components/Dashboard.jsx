import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import Departments from "./Departments";
import List from "./List";

import { useMediaQuery } from "react-responsive";

import "../styles/Dashboard.scss";

const Dashboard = () => {
  const isMobileScreen = useMediaQuery({ minWidth: 700 });
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      {isMobileScreen ? (
        <div className="dashboard-departments">
          <Departments
            title={"ECE"}
            content={3}
            color={"#4e73df"}
            symbol={<i className="fa-brands fa-elementor"></i>}
          />
          <Departments
            title={"EEE"}
            content={1}
            color={"#1cc88a"}
            symbol={<i className="fa-solid fa-plug"></i>}
          />
          <Departments
            title={"CSE"}
            content={4}
            color={"#36b9cc"}
            symbol={<i className="fa-solid fa-computer"></i>}
          />
          <Departments
            title={"Civil"}
            content={2}
            color={"#7FB3D5"}
            symbol={<i className="fa-solid fa-helmet-safety"></i>}
          />
        </div>
      ) : (
        <div className="dashboard-responsive">
          <List />
        </div>
      )}

      <h3>Present Count</h3>
      <div className="dashboard-pieChart">
        <div className="pieChart">
          <PieChart />
        </div>
      </div>
      <h3>Last year total strength</h3>
      <div className="dashboard-lineChart">
        {/* <div className="lineChart"> */}
        <LineChart />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
