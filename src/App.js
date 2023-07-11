import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Form from './components/Form';
import CountryList from './components/CountryList';
import './App.css';

function App() {
  const [countries, setCountries] = useState();
  const { loading, data, error } = useFetch();

  const handleSubmit = (state) => {
    console.log(state)
  }

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);


  if (loading) return 'Loading...';
  if (error) return 'Error!';
  if (!countries) return null;

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <CountryList data={countries} />
    </div>
  );
}

export default App;
