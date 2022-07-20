import React from "react";

export const Card=({ title, imgsrc })=> {
  return (
    <>
      <div className="col-md-4 mt-3 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem nostrum praesentium reiciendis et tempore sunt quisquam ipsa, recusandae esse at necessitatibus eum ut odio alias modi aliquam dolore iste.
            </p>
            <a href="/contact" className="btn btn-primary">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
