import React from "react";
import Main from "../../components/layout/Main";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import { DashboardContainer } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Main />
      <Sidebar />
    </DashboardContainer>
  );
};

export default Dashboard;
