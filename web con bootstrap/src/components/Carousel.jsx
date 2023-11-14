import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/slide01.jpg";
import img2 from "../img/slide02.jpg";
import img3 from "../img/slide03.jpg";

export default function MainCarousel() {
  // return (
  //   <div className="carousel slide" data-bs-ride="carousel" id="mainSlider">
  //     <div className="carousel inner">
  //       <div className="carousel-item active">
  //         <img src={imag1} className="d-block w-100" alt="..." />
  //       </div>
  //       <div className="carousel-item ">
  //         <img src={imag2} className="d-block w-100" alt="..." />
  //       </div>
  //       <div className="carousel-item ">
  //         <img src={imag3} className="d-block w-100" alt="..." />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
