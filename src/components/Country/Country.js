import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const {name, flags, capital, population, region} = props.country;
    return (
        <div className='country'>
            <h4>This is {name.common}</h4>
            <img src={flags.png} alt="" />
            <p><small>{region}</small></p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;