import React, { useState } from 'react';

const Form = ({onSubmit}) => {
  const [state, setState] = useState({
    country: '',
    population: '',
    sortBy: '',
    limit: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="country"
        value={state.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <input
        type="text"
        name="population"
        value={state.population}
        onChange={handleChange}
        placeholder="Population in millions"
      />
      <input
        type="text"
        name="sortBy"
        value={state.sortBy}
        onChange={handleChange}
        placeholder="Sort by ascend or descend"
      />
      <input
        type="text"
        name="limit"
        value={state.limit}
        onChange={handleChange}
        placeholder="Limit"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;