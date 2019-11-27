import React from "react";
import AgencyGridItem from "./AgencyGridItem";

const AgencyList = ({ agencies }) => (
  <div className="agency-list">
    <ul>
      {agencies.map(agency => (
        <AgencyGridItem key={agency.id} agency={agency} />
      ))}
    </ul>
  </div>
);

export default AgencyList;
