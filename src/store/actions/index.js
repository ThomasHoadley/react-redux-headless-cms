import * as types from "./action_types";
// Seperating the actions function from the file for organisation.
import * as agencies from "../../actions_lib/agencies";

/*
  Get all agency post types
 */

// Doing it in three steps tells us if the data is loading or not. Also good for debugging.
export function getAgencies() {
  return function(dispatch) {
    // Dispatch is a redux function that will trigger an action
    dispatch(requestAgencies());

    // getAgencies() is seperated into another file for organisation.
    // Helps keeps things easier to understand.
    return agencies.getAgencies().then(agencies => {
      dispatch(receiveAgencies(agencies));
    });
  };
}
export function requestAgencies() {
  return { type: types.REQUEST_AGENCIES };
}
export function receiveAgencies(agencies) {
  return {
    type: types.RECEIVE_AGENCIES,
    agencies: agencies
  };
}

/*
  Get one agency post type
 */

export function getAgency(slug) {
  return function(dispatch) {
    dispatch(requestAgency());

    return agencies.getAgency(slug).then(agency => {
      dispatch(receiveAgency(agency));
    });
  };
}
export function requestAgency() {
  return { type: types.REQUEST_AGENCY };
}
export function receiveAgency(agency) {
  return {
    type: types.RECEIVE_AGENCY,
    agency: agency
  };
}

/*
  Get agency types (categories)
 */

export function requestAgencyTypes() {
  return { type: types.REQUEST_AGENCY_TYPES };
}

export function receiveAgencyTypes(agencyTypes) {
  return {
    type: types.RECEIVE_AGENCY_TYPES,
    agencyTypes: agencyTypes
  };
}

export function getAgencyTypes() {
  return function(dispatch) {
    dispatch(requestAgencyTypes());

    return agencies.getAgencyTypes().then(agencyTypes => {
      dispatch(receiveAgencyTypes(agencyTypes));
    });
  };
}

/*
  Update Agency Filter
 */
export function updateAgencyFilterCategory(agencyType) {
  return {
    type: types.UPDATE_AGENCY_FILTER_CATEGORY,
    agencyType: agencyType
  };
}
