import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class FooterG extends Component {
  render() {
    return (
      <Container
        className="foot mt-5 mb-5"
        style={{ backgroundColor: "black", height: "17rem" }}
      >
        <Row className=" g-1 d-flex justify-content-between ">
          <Card
            style={{ width: "20rem", height: "11rem" ,color:"white" ,backgroundColor:"transparent"}}
            className="foot rounded-0"
          >
            <Card.Body>
              <Card.Title>ABOUT US</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.<br></br><br></br><br></br>
                <span> 2023 All Rights Reserved. </span>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <Card style={{ width: "20rem", height: "11rem" ,color:"white" ,backgroundColor:"transparent" }} className="rounded-0">
            <Card.Body>
              <Card.Title>Newsletter</Card.Title>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-1"
                style={{color:"GrayText"}}
              >
                <Form.Control type="email" placeholder="name@example.com"  />
              </FloatingLabel>
              <Button
                className="p-6 rounded-0 "
                style={{ backgroundColor: "lightpink" }}
              >
                SUBSCRIBE
              </Button>{" "}
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem", height: "11rem" ,color:"white" ,backgroundColor:"transparent" }} className="rounded-0">
            <Card.Body>
              <Card.Title>NEED HELP</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" , height: "11rem" ,color:"white" ,backgroundColor:"transparent"}} className="rounded-0">
            <Card.Body>
              <Card.Title>CONTACT US</Card.Title>
              <Card.Text>
                <i class="fa-solid fa-location-dot"></i> India
              </Card.Text>
              <Card.Text>
                <i class="fa-solid fa-phone"></i> +91 9876543210
              </Card.Text>
              <Card.Text>
                <i class="fa-solid fa-envelope"></i> giftos88@gmail.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
          <div className="g-1 d-flex justify-content-center pt-5 ">
            <div
              style={{
                border: "1px solid white",
                height: "1px",
                width: "45rem",
              }}
            ></div>
          </div>

          <div className="g-1 d-flex justify-content-center">
            <span style={{ color: "#ffffff" }}>
              <i class="fa-solid fa-copyright" style={{ color: "#ffffff" }}></i>
              2023 All Rights Reserved. 
            </span>
          </div>
          </Col> */}
        </Row>
      </Container>
    );
  }
}
