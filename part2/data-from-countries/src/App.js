import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import CountriesDetail from './components/CountriesDetail';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [countrySelected, setCountrySelected] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }, []);

  const handleSetCountries = (event) => {
    setFilter(event.target.value);
  }
  const handleSetCountrySelected = (country) => {
    setCountrySelected(country);
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital[0]}&aqi=no`)
      .then(response => setWeather(response.data.current))
  }

  const countriesToShow = filter
    ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    : countries

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <div>App</div>
        <br />
        <div>
          <input value={filter} onChange={handleSetCountries} />
        </div>
        <Countries countries={countriesToShow} handleSetCountrySelected={handleSetCountrySelected} />
      </div>
      <div style={{ flex: "1" }}>
        <CountriesDetail country={countrySelected} weather={weather} />
      </div>
    </div>
  )

}

export default App;
