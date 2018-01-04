import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';

class City extends Component {

  render() {
    return (
      <div className="city">
        {this.props.city.name}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
 { selectCity: selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);




