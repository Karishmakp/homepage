import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Header123 extends Component {
  render() {
    return (
      <Container>
        <h1
          style={{ padding: "15px", textAlign: "center", fontWeight: "bolder" }} >
          GIFTOS
        </h1>
        <Navbar
          style={{ backgroundColor: "lightGray" }}
          data-bs-theme="dark"
          className="rounded-top p-2">
          
          <Container>
            <Nav className=" home m-auto p-1  ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#Buy">Buy</Nav.Link>
              {/* <Nav.Link href="#pricing"></Nav.Link> */}
              {/* <Nav.Link href="#pricing">
                <i class="fa-solid fa-user"></i> LOGIN
              </Nav.Link> */}
              {/* <Nav.Link href="#pricing">
                <i class="fa-solid fa-bag-shopping"></i>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </Container>
    );
  }
}
