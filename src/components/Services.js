import React from "react";
import { Card } from "./Card";
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'



export const Services=()=> {
  return (
    <div id='service' className="services p-3">
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card title="AC Installation" imgsrc={img1} />
              <Card title="Wine Cellar Colling" imgsrc={img2} />
              <Card title="Service and Maintenance" imgsrc={img3} />
              
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}