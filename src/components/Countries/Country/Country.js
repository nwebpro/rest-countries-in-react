import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, population, name:{common}, flags:{png}} = props.country;
    return (
        <div className='country-wrapper'>
            <h2>Country Name: {common}</h2>
            <img src={png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;