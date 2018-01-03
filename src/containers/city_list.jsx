import React, { Component } from 'react';
import City from './../containers/city.jsx';

class CityList extends Component {

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return (
            <City city={city} key={city.name} />
          )
        })}
      </div>
    )
  }

}

export default CityList;