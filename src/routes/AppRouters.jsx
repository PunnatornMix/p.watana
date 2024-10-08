import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/Aboutus";
import ProductList from "../pages/ProductList";
import News from "../pages/News";
import ContactUs from "../pages/ContactUs";
import NewsList from "../pages/NewsList";
import ProductItem from "../pages/ProductItems";

const AppRouters = () => (
  <Fragment>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/product-list" exact element={<ProductList />} />
      <Route path="/product-item" exact element={<ProductItem />} />
      <Route path="/news-activity" exact element={<News />} />
      <Route path="/news-item" exact element={<NewsList />} />
      <Route path="/contact-us" exact element={<ContactUs />} />

      {/* <Route path="/shareholding/:mainpage?" exact element={<Shareholding />} /> */}
      {/* <Route path="*" exact element={<NotFound />} /> */}
    </Routes>
  </Fragment>
);

export default AppRouters;
