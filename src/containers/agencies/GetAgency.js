import React, { Component } from "react";
import { connect } from "react-redux";

import { getAgency } from "../../store/actions";
import Agency from "../../components/agencies/Agency";

class GetAgency extends Component {
  constructor(props) {
    super(props);
    this.findAgencyBySlug = this.findAgencyBySlug.bind(this);
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;

    // Todo: tidy this up... agency by slug
    let agency = this.props.agencies.find(agency => {
      return agency.slug === slug;
    });

    if (!agency) {
      this.props.getAgency(slug);
    }
  }

  findAgencyBySlug() {
    return (
      this.props.agencies.find(agency => {
        return this.props.match.params.slug === agency.slug;
      }) || { title: {} }
    );
  }

  render() {
    return (
      <div className="agency">
        <Agency agency={this.findAgencyBySlug()} />
      </div>
    );
  }
}

// The below puts the app state and the actions in the container.

const mapStateToProps = state => {
  return {
    loading: state.agencies.loading,
    agencies: state.agencies.agencies
  };
};

// mapDispatchToProps allows the container to dispatch actions.
const mapDispatchToProps = dispatch => {
  return {
    getAgency: slug => {
      dispatch(getAgency(slug));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAgency);
