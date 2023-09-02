import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./css/Gift.css";

export default class GIfts extends Component {
  render() {
    return (
      <div>
        <Container
          className=" rounded-4 "
          style={{ backgroundColor: "purple" }}
        >
          <Row className="mt-5 mb-5">
            <Col>
              <div className="p-5">
                <img
                  src="./image/gifts.png"
                  alt=""
                  className="gift"
                  style={{ height: "35rem" , }}
                />
              </div>
            </Col>
            <Col className="colm " style={{ marginTop: "5px" }}>
              <h1 className="ghead">GIFTS FOR YOUR LOVED ONES</h1>
              <p className="gpara fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ea excepturi nesciunt corporis officiis facere
                ipsum sequi sapiente molestiae accusantium! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa, mollitia?
              </p>
              <Button className="btn rounded-0" variant="primary" size="lg" style={{backgroundColor:"whitesmoke",color:"GrayText"}}active>
                Buy Now
              </Button>{" "}
              <Button className="btn rounded-0" variant="secondary" size="lg" active>
                See More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
