import React, { Component } from 'react';
import CityList from './../containers/city_list.jsx';
import ActiveCity from './active_city.jsx';

// TODO: remove this line and use Redux
const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCity: null

    }
  }
  render() {
    return (
      <div className="app">
        <CityList cities={cities} />
        <ActiveCity city={this.state.selectedCity}/>
      </div>
    );
  }
};
export default App;
