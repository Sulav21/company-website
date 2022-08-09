import React from "react";
import ac from "../images/homepage.png";

export const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center p-5 text-center">
      <div className="nav_bg">
        <div className="row">
          {/* <div className=" mx-auto">
            <div className="row">
              <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"> */}
                <h1>
                 Domestic & Commercial Heating, Ventilation Air Conditioning Services
                  {/* <strong className="brand-name"> BNA HVAC Services</strong> */}
                </h1>

                <h2 className="my-3">
                  Exceeding your expectations by providing quality services.
                </h2>

                <div className="mt-3">
                  <a href="/#contact" className="btn-get-started">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* <div className="col-lg-7 order-1 order-lg-2 header-img">
                <img src={ac} className="img-fluid animated" alt="HomeImg" />
              </div> */}
            </div>
          {/* </div>
        </div>
      </div> */}
    </section>
  );
};

// style={{ backgroundImage: `url(${ac})` ,backgroundSize:cover}}
