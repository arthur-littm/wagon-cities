import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {
    if (this.props.selectedCity) {
      return (
        <div className="active-city">
          <h3>{this.props.selectedCity.name}</h3>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}
  `} alt=""/>
        </div>
      )
    } else {
      return (null)
    }

  }

}

function mapStateToProps(state) {
  return { selectedCity: state.selectedCity };
}

export default connect(mapStateToProps)(ActiveCity);





