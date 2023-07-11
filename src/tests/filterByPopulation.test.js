import { filterByPopulation } from '../helpers';

describe('filterByPopulation', () => {

  const testData = [
    { name: 'Country A', population: 5000000 },
    { name: 'Country B', population: 10000000 },
    { name: 'Country C', population: 15000000 },
    { name: 'Country D', population: 20000000 },
    { name: 'Country E', population: 25000000 }
  ];

  it('returns all data when no population is given', () => {
    const result = filterByPopulation(testData);
    expect(result).toEqual(testData);
  });

  it('returns matching items when a population is given', () => {
    const expected = [
      { name: 'Country A', population: 5000000 },
    ];
    const result = filterByPopulation(testData, '6');
    expect(result).toEqual(expected);
  });

  it('returns empty array when no items match', () => {
    const result = filterByPopulation(testData, '0.5');
    expect(result).toEqual([]);
  });

  it('handles non-numeric values gracefully', () => {
    const result = filterByPopulation(testData, 'non-numeric');
    expect(result).toEqual(testData);
  });
});
