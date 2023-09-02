import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import './css/Testmonial.css'
import Button from 'react-bootstrap/Button';



export default class Testmonial extends Component {
  render() {
    return (
      <div>
        <Container style={{height:"100px",backgroundColor:"yellow" }} className="d-flex justify-content-center mb-5">

        <Button variant="danger" className="">Pre</Button>{' '}

          <Carousel style={{width:"70%",border:"1px solid black"}}>
          
            <Carousel.Item>
              <h1>hello</h1>
            </Carousel.Item>
            <Carousel.Item>
              <h1>hello</h1>
            </Carousel.Item><Carousel.Item>
              <h1>hello</h1>
            </Carousel.Item>
            
          </Carousel>

          <Button variant="danger" className="visually-hidden">next</Button>{' '}

        </Container>
      </div>
    );
  }
}
