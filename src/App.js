import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header123 from "./components/Header123";
import Products from "./components/Products";
import Slider1 from "./components/Slider1";
import Savingcard from "./components/Savingcard";
import ShopUs from "./components/ShopUs";
import GIfts from "./components/GIfts";
import ContactUs from "./components/ContactUs";
import FooterG from "./components/FooterG";

export default class App extends Component {
  render() {
    // media:{mobile:"768px" , tab:"998px"}
    return (
      <div className="App">
        <Header123 />
        <Slider1 />
        <Products />
        <Savingcard />
        <ShopUs />
        <GIfts />
        <ContactUs />

        <FooterG />
        {/* <Testmonial/> */}
      </div>
    );
  }
}
