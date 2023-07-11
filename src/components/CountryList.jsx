import React from 'react';

const CountryList = ({ data }) => {

  return (
    <ul>
      {data.map((country, index) => (
        <li key={index}>{country.name.common}</li>
      ))}
    </ul>
  );
};

export default CountryList;
