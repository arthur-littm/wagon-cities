import React, { Component } from 'react';
import CityList from './../containers/city_list.jsx';
import ActiveCity from './active_city.jsx';

// TODO: remove this line and use Redux
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
        <CityList />
        <ActiveCity city={this.state.selectedCity}/>
      </div>
    );
  }
};
export default App;


