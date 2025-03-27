import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries]=useState([]);
    const countries= use( countriesPromise );
    const handelVisitedCoutries = (country)=>{
          console.log('country visited',country);
          const newVisitedCountries =[...visitedCountries,country];
          setVisitedCountries(newVisitedCountries);

    }
    // console.log(countries);
    return (
        <div>
            <h2>Traveling Countries: {countries.length} </h2>
            <h3>Travel so fer:{visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country=><Country 
                    key={country.cca3} 
                    handelVisitedCoutries={handelVisitedCoutries}
                    country={country}></Country>
                )
            }

            </div>
            
        </div>
    );
};

export default Countries;