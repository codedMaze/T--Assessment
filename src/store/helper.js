export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  if (data.length > 0) {
    return data.filter((item) => item[key] === value);
  } else {
    return data;
  }
};

export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return newData;
  }
  return localStorage.removeItem(key);
};
