const key = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://www.food2fork.com/api';
export const getOne = (id) => {
  return `${baseUrl}/get?key=${key}&rId=${id}`;
};
export const getAll = () => `${baseUrl}/search?key=${key}`;
