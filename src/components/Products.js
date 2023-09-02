import React, { Component } from "react";
import {Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      item: [
        { id: 1, image: "./image/p1.png", name: "Ring", price: 200 },
        { id: 2, image: "./image/p2.png", name: "Watch", price: 300 },
        { id: 3, image: "./image/p3.png", name: "Teddy Bear", price: 2300 },
        { id: 4, image: "./image/p4.png", name: "Flower Bouquet", price: 200 },
        { id: 5, image: "./image/p5.png", name: "Teddy bear", price: 900 },
        { id: 6, image: "./image/p6.png", name: "Flower Bouquet", price: 600 },
        { id: 7, image: "./image/p7.png", name: "watch", price: 400 },
        { id: 8, image: "./image/p8.png", name: "Ring", price: 450 },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", padding: "30px" }}>LATEST PRODUCTS</h1>
        <div className="row row-cols-1 row-cols-md-4">
          {this.state.item.map((item, index) => {
            return (
            <Container>
               <div className="col text-center p-1 mb-3">
               <Card style={{ width: "100%",backgroundColor:"whitesmoke"}}>
               <Card.Img variant="top" src={item.image} style={{ height: "160px", width: "130px" }} className="mx-auto d-block p-2" />
               <Card.Body>
                      <div >
                        <Card.Title>{item.name}</Card.Title>
                         <Card.Text>${item.price}</Card.Text>
                         <Button variant="primary">{" "}
                           + <i class="fa-solid fa-cart-shopping"></i>
                         </Button>
                      </div>
                     </Card.Body>
                </Card>
              </div>
                </Container>
            );
          })}
        </div>
        <Button variant="danger" className="mx-auto d-block mt-3 p-2">
          View All Products
        </Button>
      </div>
    );
  }
}
 
            