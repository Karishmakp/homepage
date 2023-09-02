import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './css/Savingcard.css';


export default class Savingcard extends Component {
  render() {
    return (
      <Container
        className=" rounded-4 "
        style={{ backgroundColor: "skyblue" }}
      >
        <Row className="mt-5 mb-5">
          <Col>
            <img src="./image/saving-img.png" alt="" className="save"/>
          </Col>
          <Col className="colm">
            <h1 className="shead">BEST SAVING ON
             NEW ARRIVALS</h1>
            <p className="spara fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, ea excepturi nesciunt corporis officiis facere ipsum
              sequi sapiente molestiae accusantium! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Culpa, mollitia?
            </p>
            
              <Button className="btn" variant="primary" size="lg"  active>
                Buy Now 
              </Button>{" "}
              <Button className="btn"  variant="secondary" size="lg" active>
                See More
              </Button>
       
          </Col>
        </Row>
      </Container>
    );
  }
}
