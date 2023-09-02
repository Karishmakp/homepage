import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default class ContactUs extends Component {
    render() {
        return (
            <Container>
                <h1 className="fw-bolder">CONTACT US</h1>
                <Row  className="cont mt-5 mb-5 pb-5 ">
                <FloatingLabel controlId="floatingName" label="Name" className="mb-4 mt-1">
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-4">
                            <Form.Control type="Phone" placeholder="Phone" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingMessage" label="Message">
                            <Form.Control type="text" placeholder="Message" style={{ height: '150px' }}/>
                        </FloatingLabel>

                        <Button variant="danger" className="cont1 p-6 m-4 ">Send</Button>{' '}
                    {/* <Col sm={7} style={{ height: "35rem", backgroundColor: "black" }}>
                        <p style={{ color: "white", fontSize: "10px" }}>
                            Google Maps Platform rejected your request. This API project is
                            not authorized to use this API.
                        </p>
                    </Col> */}
                    {/* <Col sm={5}  style={{ backgroundColor: "whitesmoke"  }}>
                        <FloatingLabel controlId="floatingName" label="Name" className="mb-4 mt-5">
                            <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-4">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-4">
                            <Form.Control type="Phone" placeholder="Phone" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingMessage" label="Message">
                            <Form.Control type="text" placeholder="Message" style={{ height: '150px' }}/>
                        </FloatingLabel>

                        <Button variant="danger" className="p-6 m-4 ">Send</Button>{' '}
                    </Col> */}
                </Row>
            </Container>
        );
    }
}
