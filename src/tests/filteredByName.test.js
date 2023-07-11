import { filterByName } from '../helpers';

describe('filterByName', () => {

  const testData = [
    { name: { common: 'Apple' } },
    { name: { common: 'Banana' } },
    { name: { common: 'Cherry' } },
    { name: { common: 'Date' } },
    { name: { common: 'Elderberry' } }
  ];

  it('returns all data when no filter is given', () => {
    const result = filterByName(testData);
    expect(result).toEqual(testData);
  });

  it('returns matching items when a filter is given', () => {
    const expected = [
      { name: { common: 'Apple' } },
      { name: { common: 'Banana' } },
      { name: { common: 'Date' } }
    ];
    const result = filterByName(testData, 'a');
    expect(result).toEqual(expected);
  });

  it('returns empty array when no items match', () => {
    const result = filterByName(testData, 'z');
    expect(result).toEqual([]);
  });

  it('handles case-insensitive matching', () => {
    const expected = [
      { name: { common: 'Elderberry' } }
    ];
    const result = filterByName(testData, 'ELDER');
    expect(result).toEqual(expected);
  });

  it('handles items without a name.common property', () => {
    const unexpectedData = [
      { name: { uncommon: 'Fruit' } },
      { name: { common: 'Grape' } }
    ];
    const result = filterByName(unexpectedData, 'fruit');
    expect(result).toEqual([]);
  });
});
