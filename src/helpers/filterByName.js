export function filterByName(data, filterName = '') {
    if (!filterName) return data;
    
    const lowerCaseFilter = filterName.toLowerCase();
    
    return data.filter(item => {
      const itemName = item.name && item.name.common ? item.name.common.toLowerCase() : '';
      return itemName.includes(lowerCaseFilter);
    });
  }
  