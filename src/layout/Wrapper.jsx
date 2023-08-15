import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { fetchData } from "../store/helper";
// import

const Wrapper = () => {
  const machine = useLoaderData();

  return (
    <>
      <Navbar machineTypes={machine} />
      <Sidebar machineTypes={machine} />
      <Outlet />
    </>
  );
};

export default Wrapper;

export const loaderData = () => {
  const machine = fetchData("machineTypes");
  // console.log(machine);
  return machine;
};
