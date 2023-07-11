export function filterByPopulation(data, population = '') {
    if (!population || isNaN(+ population)) return data;

    const populationValue = population * 1000000;
    const filteredData = data.filter(item => item.population < populationValue);
    return filteredData;
  }
  