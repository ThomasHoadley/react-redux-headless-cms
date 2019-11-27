import React, { Component } from "react";
import { connect } from "react-redux";
import AgencyList from "../../components/agencies/AgencyList";
import { getAgencies } from "../../store/actions";

// Todo: This component will filter the agencies and pass them down.

class FilteredAgencies extends Component {
  constructor(props) {
    super(props);
    this.filteredAgencies = this.filteredAgencies.bind(this);
  }

  filteredAgencies() {
    // TODO: what if agency has multiple types?
    return this.props.agencies.filter(agency => {
      return this.props.agencyTypeFilter.includes(agency.agency_type[0]);
    });
    // TODO: if search string, filter by search string
    // chain on another filter.
  }

  render() {
    return <AgencyList agencies={this.filteredAgencies()} />;
  }
}

// The below puts the app state and the actions in the container.

const mapStateToProps = state => {
  return {
    agencies: state.agencies.agencies,
    agencyTypeFilter: state.agencies.agencyTypeFilter
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
)(FilteredAgencies);
