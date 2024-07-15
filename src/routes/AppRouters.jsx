import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// import Vision from "../pages/Vision";
// import Executives from "../pages/Executives";
// import HomeTwo from '../pages/HomeTwo';
// import HomeThree from '../pages/HomeThree';

// // About Page
// import About from '../pages/About';

// // Blog Pages
// import Blog from '../pages/Blog';
// import BlogGrid from '../pages/BlogGrid';
// import BlogDetails from '../pages/BlogDetails';

// // Pricing Plans Page
// import PricePlan from '../pages/PricePlan';

// // Service Pages
// import Service from '../pages/Service';
// import ServiceDetails from '../pages/ServiceDetails';

// // Team Pages
// import Team from '../pages/Team';
// import TeamDetails from '../pages/TeamDetails';

// // Project Pages
// import Project from '../pages/Project';
// import ProjectDetails from '../pages/ProjectDetails';

// // Contact Page
// import Contact from '../pages/Contact';

// // Not Fouond Page
// import NotFound from '../pages/NotFound';

// import AdvertisingSolution from '../pages/AdvertisingSolution';
// import DigitalAdvertisingSolution from '../pages/DigitalAdvertisingSolution';
// import BoardDirectors from '../pages/BoardDirectors';
// import CompanyMilestone from '../pages/CompanyMilestone';
// import ContactingBoard from '../pages/ContactingBoard';
// import ContactUs from '../pages/ContactUs';
// import Executives from '../pages/Executives';
// import CompanyEvents from '../pages/CompanyEvents';
// import GatewaySolution from '../pages/GatewaySolution';
// import ITSolution from '../pages/ITSolution';
// import OrganizationChart from '../pages/OrganizationChart';
// import PersonalDetails from '../pages/PersonalDetails';
// import SMSSolutionDetails from '../pages/SMSSolutionDetails';
// import Payment from '../pages/Payment';
// import Policy from '../pages/Policy';
// import PublisherSolution from '../pages/PublisherSolution';
// import ShareholderMeeting from '../pages/ShareholderMeeting';
// import ShareholderStructure from '../pages/ShareholderStructure';
// import ShareholdingDirectors from '../pages/ShareholdingDirectors';
// import SignificantFinancial from '../pages/SignificantFinancial';
// import SMSSolution from '../pages/SMSSolution';
// import OTPService from '../pages/OTPService';
// import Vision from '../pages/Vision';
// import GeneralInformation from '../pages/GeneralInformation';
// import OurClients from '../pages/OurClients';
// import PersonalDetailsExecutives from '../pages/PersonalDetailsExecutives';
// import ContactInvestor from '../pages/ContactInvestor';
// import InvestorInfo from '../pages/InvestorInfo';
// import FinancialStatements from '../pages/FinancialStatements';
// import SustainabilityReport from '../pages/SustainabilityReport';
// import Publications from '../pages/Publications';
// import NewsEventsDetails from '../pages/NewsEventsDetails';

const AppRouters = () => (
  <Fragment>
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/business" exact element={<Bussiness />} /> */}

      {/* <Route path="/shareholding/:mainpage?" exact element={<Shareholding />} /> */}
      {/* <Route path="*" exact element={<NotFound />} /> */}
    </Routes>
  </Fragment>
);

export default AppRouters;
