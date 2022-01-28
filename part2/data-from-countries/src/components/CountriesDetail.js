import React from "react"

const CountriesDetail = ({ country, weather }) => {
  return (
    <>
      {country && <div>
        <h1>{country.name.common}</h1>
        <table>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Population</td>
              <td>{country.population}</td>
            </tr>
          </tbody>
        </table>
        <h2>Languages</h2>
        <ul>
          {
            Object.values(country.languages)?.map(language => <li key={language}>{language}</li>)
          }
        </ul>
        <div>
          <img alt='flag' src={country.flags.png} width="25%" height="25%" style={{ border: "1px solid black" }} />
        </div>
        <h2>Weather in {country.capital[0]}</h2>
        <div><b>temperature:</b> {weather?.temp_c} Celsius </div>
        <div><img alt={weather?.condition?.text} src={weather?.condition?.icon} /></div>
        <div><b>wind:</b> {weather?.wind_mph} direction {weather?.wind_dir} </div>
      </div>
      }
    </>
  )
}

export default CountriesDetail;