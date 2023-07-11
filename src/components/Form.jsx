import React, { useState } from 'react';

const Form = ({onSubmit}) => {
  const [state, setState] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
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
        name="input1"
        value={state.input1}
        onChange={handleChange}
        placeholder="Input 1"
      />
      <input
        type="text"
        name="input2"
        value={state.input2}
        onChange={handleChange}
        placeholder="Input 2"
      />
      <input
        type="text"
        name="input3"
        value={state.input3}
        onChange={handleChange}
        placeholder="Input 3"
      />
      <input
        type="text"
        name="input4"
        value={state.input4}
        onChange={handleChange}
        placeholder="Input 4"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;