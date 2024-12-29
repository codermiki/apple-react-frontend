import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Alert from "../../Components/Alert/Alert";

function AppLayOut() {
  return (
    <>
      <Header />
      <Alert />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayOut;
