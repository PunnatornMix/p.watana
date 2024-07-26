import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/Aboutus";

const AppRouters = () => (
  <Fragment>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/aboutus" exact element={<AboutUs />} />

      {/* <Route path="/shareholding/:mainpage?" exact element={<Shareholding />} /> */}
      {/* <Route path="*" exact element={<NotFound />} /> */}
    </Routes>
  </Fragment>
);

export default AppRouters;
