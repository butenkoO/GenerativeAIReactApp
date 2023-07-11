import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Form from './components/Form';
import CountryList from './components/CountryList';
import { filterByName, filterByPopulation, sortByCommonName, limitItems } from './helpers'
import './App.css';

function App() {
  const [countries, setCountries] = useState();
  const { loading, data, error } = useFetch();

  const handleSubmit = ({ country, population, limit, sortBy }) => {
    let result = data;
    if (country) {
      result = filterByName(result, country);
    }
    if (population) {
      result = filterByPopulation(result, population);
    }
    if (limit) {
      result = limitItems(result, limit);
    }
    result = sortBy ? sortByCommonName(result, sortBy) : result;
    setCountries(result);
  }

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);


  if (loading) return 'Loading...';
  if (error) return 'Error!';
  if (!countries) return 'No data to display!';

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <CountryList data={countries} />
    </div>
  );
}

export default App;
