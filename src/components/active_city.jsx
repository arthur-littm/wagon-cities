import React, { Component } from 'react';

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

export default ActiveCity;
