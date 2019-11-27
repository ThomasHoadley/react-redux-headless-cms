import React from "react";
import { NavLink } from "react-router-dom";

const AgencyGridItem = ({ agency }) => (
  <NavLink to={`/agencies/${agency.slug}`} exact>
    <div className="agency-grid-item">
      <li key={agency.id}>{agency.title.rendered}</li>
    </div>
  </NavLink>
);

export default AgencyGridItem;
