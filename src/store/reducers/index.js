import { combineReducers } from "redux";

import * as action_types from "../actions/action_types";

// One function to handle all agency post types.
function agenciesReducer(
  state = {
    loading: false,
    agencies: [],
    agencyTypes: [],
    agencyTypeFilter: []
  },
  action
) {
  switch (action.type) {
    case action_types.REQUEST_AGENCIES:
      // Don't mutate the state. Instead, it should be a pure function, thus
      // we copy it and return new state.
      return Object.assign({}, state, {
        // Using numbers instead of booleans for the loading state.
        // This prevents flashing of the app when it flicks from true to false.
        // Instead we will test to see if it's greater than 0.
        // When loading. We add 1 to the state.loading
        loading: state.loading + 1
      });
    case action_types.RECEIVE_AGENCIES:
      return Object.assign({}, state, {
        loading: state.loading - 1,
        agencies: action.agencies
      });
    case action_types.REQUEST_AGENCY:
      return Object.assign({}, state, {
        loading: state.loading + 1
      });
    case action_types.RECEIVE_AGENCY:
      return Object.assign({}, state, {
        loading: state.loading - 1,
        agencies: [...state.agencies, action.agency]
      });
    case action_types.REQUEST_AGENCY_TYPES:
      return Object.assign({}, state, {
        loading: state.loading + 1
      });
    case action_types.RECEIVE_AGENCY_TYPES:
      return Object.assign({}, state, {
        loading: state.loading - 1,
        agencyTypes: action.agencyTypes,
        agencyTypeFilter: action.agencyTypes.map(agencyType => {
          return agencyType.id;
        })
      });
    case action_types.UPDATE_AGENCY_FILTER_CATEGORY:
      const agencyTypeFilter = state.agencyTypeFilter;
      const agencyType = action.agencyType;

      let newList;

      if (agencyTypeFilter.includes(agencyType)) {
        let position = agencyTypeFilter.indexOf(agencyType);

        newList = agencyTypeFilter.slice(0);
        newList.splice(position, 1);
      } else {
        newList = [...agencyTypeFilter, agencyType];
      }

      return Object.assign({}, state, {
        agencyTypeFilter: newList
      });
    default:
      return state;
  }
}

function newsReducer(state = {}, action) {
  return state;
}

const reducers = combineReducers({
  agencies: agenciesReducer,
  news: newsReducer
});
export default reducers;
