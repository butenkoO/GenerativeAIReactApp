export function sortByCommonName(data, order = 'ascend') {
    const sortedArray = structuredClone(data);
  
    sortedArray.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
  
      if (order === 'ascend') {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else if (order === 'descend') {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }
  
      return 0;
    });
  
    return sortedArray;
  };
  