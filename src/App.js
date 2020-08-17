import React from 'react';
import './App.css';
import СitiesListContainer from './components/CitiesList/CitiesListContainer';
import CityCardContainer from './components/CityCard/CityCardContainer';

let App = () => {
  return <div className='app'>
    <СitiesListContainer/>
    <CityCardContainer/>
  </div>
}

export default App;
