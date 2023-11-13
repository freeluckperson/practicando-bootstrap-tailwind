import React from "react";
import imag from "../img/image01.png";

const Ribbon = () => {
  return (
    <div className="container-fluid" id="ribbon">
      <div className="container w-50 pl-5" id="birthday">
        <div className="row align-items-center">
          <div className="col-sm p-3">
            <img src={imag} className="w-75 mx-auto d-block" alt="..." />
          </div>
          <div>
            <p>Toda is</p>
            <h4>Samson´s Birthday</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
