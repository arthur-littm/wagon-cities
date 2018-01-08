import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {
    if (this.props.city) {
      return (
        <div className="active-city">
          <h3>{this.props.city.name}</h3>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}
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





