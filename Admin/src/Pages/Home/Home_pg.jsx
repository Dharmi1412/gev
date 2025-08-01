import React from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Pannel from "../../Component/main_pannel/Pannel";
import "./home.css";

export default function Home_pg() {
  return (
    <div className="home_pg">
      <Sidebar />
      <Pannel />
    </div>
  );
}
