import React from "react";

const Agency = ({ agency }) => (
  <div className="single-agency">
    <h1>{agency.title.rendered}</h1>
  </div>
);

export default Agency;
