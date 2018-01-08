import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city)
  }

  render() {
    return (
      <div className="city" onClick={this.handleClick}>
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




