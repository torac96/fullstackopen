import React from "react"

const Countries = ({ countries, handleSetCountrySelected }) => {
  return (
    <>
      {countries.length > 10 && <div>Too many matches, specify another filter</div>}
      {countries.length <= 10 && countries.map(country =>
        <div key={country.name.common}>
          {country.name.common}
          <button onClick={() => handleSetCountrySelected(country)}>Show</button>
        </div>
      )
      }
    </>
  )
}

export default Countries;