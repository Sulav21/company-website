import React from "react";
import ac from "../images/ac.jpg";

export const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center p-5 container">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  AC And Ventilation Installation
                  <strong className="brand-name"> Hoganz AC Inc.</strong>
                </h1>

                <h2 className="my-3">
                  Exceeding your expectations by providing quality services.
                </h2>

                <div className="mt-3">
                  <a href="/#contact" className="btn-get-started">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={ac} className="img-fluid animated" alt="HomeImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// style={{ backgroundImage: `url(${ac})` ,backgroundSize:cover}}
