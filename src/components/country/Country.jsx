import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handelVisitedCoutries}) => {
    const [visited,setVisited]=useState (false);

    const handelVisited =()=>{
       
        if(visited===true){
            setVisited(false);
        
        }
        else{
            setVisited(true);
        }

        handelVisitedCoutries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common} </h3>
            <img src={country.flags.png} alt="" srcset="" />
            <p>Independent: {country.independent? 'yes' : 'no'}</p>
            <p>Population: {country.population}</p>
            <button onClick={handelVisited}>{
                visited ? "Visited" : "Not visited"
                }
                </button>
        </div>
    );
};

export default Country;