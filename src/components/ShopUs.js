import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class ShopUs extends Component {
  constructor() {
    super();
    this.state = {
      service: [
        {
          id: 1,
          sname: "Fast Shipping",
          msg: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          icon: <i class="fa-solid fa-truck-fast lg fs-1 m-3"></i>
        },
        {
          id: 2,
          sname: "New Gifts",
          msg: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          icon: <i class="fa-solid fa-cart-flatbed lg fs-1 m-3"></i>
        },
        {
          id: 3,
          sname: "Good Products",
          msg: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          icon: <i class="fa-solid fa-certificate lg fs-1 m-3"></i>
        },
        {
          id: 4,
          sname: "Best Quality",
          msg: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
          icon: <i class="fa-solid fa-certificate lg fs-1 m-3"></i>
        },
        
      ],
    };
  }
  render() {
    return (
      <div className="container p-4">
        <h1 className="d-flex justify-content-center fw-bold p-3">
          WHY SHOP WITH US
        </h1>
        <div className="row g-2 d-flex justify-content-between fs-6">
          {this.state.service.map((item, index) => {
            return (
              <Card
                style={{
                  width: "26rem",
                  backgroundColor: "whitesmoke",
                  border: "0px",
                }}
              >
                <div className="col text-center p-1 mb-3">
                  <Card.Body>
                    <Card.Title>{item.icon}</Card.Title>
                    <Card.Subtitle className="m-3 fs-3 fw-bold">
                      {item.sname}
                    </Card.Subtitle>
                    <Card.Text>{item.msg}</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
