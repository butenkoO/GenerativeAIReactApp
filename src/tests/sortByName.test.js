import { sortByCommonName } from '../helpers';

describe('sortByCommonName', () => {
  global.structuredClone = (val) => JSON.parse(JSON.stringify(val))
  const testData = [
    { name: { common: 'Banana' } },
    { name: { common: 'Apple' } },
    { name: { common: 'Cherry' } },
    { name: { common: 'Date' } },
    { name: { common: 'Elderberry' } }
  ];

  it('sorts items in ascending order by default', () => {
    const expected = [
      { name: { common: 'Apple' } },
      { name: { common: 'Banana' } },
      { name: { common: 'Cherry' } },
      { name: { common: 'Date' } },
      { name: { common: 'Elderberry' } }
    ];
    const result = sortByCommonName(testData);
    expect(result).toEqual(expected);
  });

  it('sorts items in ascending order when specified', () => {
    const expected = [
      { name: { common: 'Apple' } },
      { name: { common: 'Banana' } },
      { name: { common: 'Cherry' } },
      { name: { common: 'Date' } },
      { name: { common: 'Elderberry' } }
    ];
    const result = sortByCommonName(testData, 'ascend');
    expect(result).toEqual(expected);
  });

  it('sorts items in descending order when specified', () => {
    const expected = [
      { name: { common: 'Elderberry' } },
      { name: { common: 'Date' } },
      { name: { common: 'Cherry' } },
      { name: { common: 'Banana' } },
      { name: { common: 'Apple' } }
    ];
    const result = sortByCommonName(testData, 'descend');
    expect(result).toEqual(expected);
  });

  it('returns original data when an invalid order is specified', () => {
    const result = sortByCommonName(testData, 'invalid');
    expect(result).toEqual(testData);
  });
});
