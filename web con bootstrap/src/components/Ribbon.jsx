import React from "react";
import imag from "../img/image01.png";
import { ribbon, birthday } from "./Ribbon.module.css";

const Ribbon = () => {
  // return (
  //   <div className="container-fluid " id={ribbon}>
  //     <div className="container w-50 pl-5 rounded" id={birthday}>
  //       <div className="row align-items-center">
  //         <div className="col-sm p-3">
  //           <img src={imag} className="w-75 mx-auto d-block" alt="..." />
  //         </div>

  //         <div>
  //           <p className="text-warning h3">Toda is</p>
  //           <h4>Samson´s Birthday</h4>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return(
    <div id={ribbon}>
    <div id={birthday} className="container w-50 pl-5 pr-5 rounded">
      
      <div className="row align-items-center">
        <div className="col-sm col-sm p-3" id="description">
          <img src={imag} className="w-75 mx-auto d-block" alt="..."/>
        </div>
        
        <div className="col-sm p-3 text-light text-center">
          <p className="text-warning h3">Today is</p>
          <h4 className="h2 text-shadow">Samson's Birthday</h4>
        </div>
      </div>
    </div>
</div>
  )
};

export default Ribbon;
