import React from "react";
// import Home_pg from "./Pages/Home/Home_pg";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add_products/Add";
import Update from "./Pages/Update/Update";
import List from "./Pages/List/List";
import Sidebar from "./Component/Sidebar/Sidebar";
// import Pannel from "./Component/main_pannel/Pannel";
import "./App.css";
import Nav from "./Component/Navbar/Nav";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="nav-wrapper">
      <ToastContainer />

      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="panel">
        <Nav />
        <Routes>
          {[
            { path: "/", elem: <Add /> },
            { path: "/update/:id", elem: <Update /> },
            { path: "/update", elem: <Update /> },
            { path: "/list", elem: <List /> },
          ].map((obj, index) => {
            return <Route key={index} element={obj.elem} path={obj.path} />;
          })}
        </Routes>
      </div>
    </div>
  );
}
