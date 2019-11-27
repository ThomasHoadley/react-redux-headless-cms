import React, { Component } from "react";
import { connect } from "react-redux";

import { getAgencies } from "../../store/actions";

import FilteredAgencies from "./FilteredAgencies";
import TypesFilter from "./filters/TypesFilter/index.js";

class GetAgencies extends Component {
  componentDidMount() {
    this.props.getAgencies();
  }

  render() {
    return (
      <div className="agencies-container">
        <div className="filters">
          <TypesFilter />
        </div>

        <FilteredAgencies />
      </div>
    );
  }
}

// The below puts the app state and the actions in the container.

const mapStateToProps = state => {
  return {
    loading: state.agencies.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAgencies: () => {
      dispatch(getAgencies());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAgencies);
