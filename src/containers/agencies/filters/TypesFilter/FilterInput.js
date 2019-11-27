import React from "react";

const FilterInput = ({ agencyType, updateAgencyFilter, active }) => {
  return (
    <li onClick={() => updateAgencyFilter(agencyType.id)}>
      <input type="checkbox" checked={!active} />
      {agencyType.name}
    </li>
  );
};

export default FilterInput;
