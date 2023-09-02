import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";


export default class Slider1 extends Component {
  constructor(){
   super()
   this.state={
    sildes:[
      {id:1,img:<img src="./image/slider-img.png" alt="" />,
      hname:"Welcome To Giftos",
      msgs:"Here you can find new collection of gifts "},
    //   {id:1,img:<img src="./image/slider-img.png" alt="" />,
    //   hname:"Welcome To Our Gift Shop",
    //   msgs:"minus voluptate eos volu Lorem ipsum dolor sit amet consectetur adipisicing elit minus voluptate eos volu Lorem ipsum dolor sit amet consectetur adipisicing elitminus voluptate eos volu Lorem ipsum dolor sit amet consectetur adipisicing elit"},
    //   {id:1,img:<img src="./image/slider-img.png" alt="" />,
    //   hname:"Welcome To Our Gift Shop",
    //   msgs:"minus voluptate eos volu Lorem ipsum dolor sit amet consectetur adipisicing elit minus voluptate eos volu Lorem ipsum dolor sit amet consectetur adipisicing elitminus voluptate eos volu Lorem ipsum dolor sit amet consectetur adipisicing elit"}
    ]
    
   }
  }
  render() {
    return (
    
      <Container style={{ backgroundColor: "pink", color: "white",width:"100%" }} className=" d-flex justify-content-center rounded-bottom">
      <Carousel style={{ backgroundColor: "pink", color: "white",width:"95%"}}>
        {this.state.sildes.map((sildes,index)=>{
          return(
            <Carousel.Item>
           <div className=" slide d-flex justify-content-evenlt p-1  align-items-center ">
             <div style={{paddingRight:"20%"}}>
               <h1 className="display-1 fw-bold" >{sildes.hname}</h1>
                <p className="fs-5">{sildes.msgs}</p>
               <Button variant="danger " className="mt-4 rounded-0" style={{width:"10rem"}}>Shop</Button>{" "}
             </div>

             <div className="p-2" style={{height:"500px"}}>{sildes.img}</div>
           </div>
         </Carousel.Item>
          );
        })}
      </Carousel>
      </Container>
      
    );
  }
}
