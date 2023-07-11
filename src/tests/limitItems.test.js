import { limitItems } from '../helpers';

describe('limitItems', () => {

  const testData = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' }
  ];

  it('returns all items when no limit is given', () => {
    const result = limitItems(testData);
    expect(result).toEqual(testData);
  });

  it('returns limited items when a limit is given', () => {
    const expected = [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' }
    ];
    const result = limitItems(testData, 3);
    expect(result).toEqual(expected);
  });

  it('returns empty array when limit is 0', () => {
    const result = limitItems(testData, 0);
    expect(result).toEqual(testData);
  });

  it('returns all items when limit exceeds array length', () => {
    const result = limitItems(testData, 10);
    expect(result).toEqual(testData);
  });
});
