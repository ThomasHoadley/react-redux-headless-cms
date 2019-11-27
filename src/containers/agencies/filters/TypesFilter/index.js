import React, { Component } from "react";
import { connect } from "react-redux";

import { getAgencyTypes } from "../../../../store/actions";
import { updateAgencyFilterCategory } from "../../../../store/actions";

import FilterInput from "./FilterInput";

class TypesFilter extends Component {
  componentDidMount() {
    this.props.getAgencyTypes();
  }

  render() {
    return (
      <ul>
        {this.props.agencyTypes.map(agencyType => {
          return (
            <FilterInput
              key={agencyType.id}
              updateAgencyFilter={this.props.updateAgencyFilterCategory}
              agencyType={agencyType}
              active={this.props.agencyTypeFilter.includes(agencyType.id)}
            />
          );
        })}
      </ul>
    );
  }
}

// The below puts the app state and the actions in the container.

const mapStateToProps = state => {
  return {
    agencyTypes: state.agencies.agencyTypes,
    agencyTypeFilter: state.agencies.agencyTypeFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAgencyTypes: () => {
      dispatch(getAgencyTypes());
    },
    updateAgencyFilterCategory: type => {
      dispatch(updateAgencyFilterCategory(type));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypesFilter);
