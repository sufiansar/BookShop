import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import "./Root.css";
import Books from "../Books/Books";

const Root = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Banner className="fontPlay"></Banner>
      <Books></Books>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
