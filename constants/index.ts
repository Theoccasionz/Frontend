// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = `http://18.217.74.84:3000/api`;
const PARTY_DATA = (type: String) => `${BASE_URL}/${type}`;
const THEMES_DATA = (theme: String) => `${BASE_URL}/parties?theme=${theme}`;
const REGISTRATION = (type: 'vendor' | 'venue') => `${BASE_URL}/${type}`;
const DESIGNS = (theme?: String, occasion?: String, place?: String, budget?: String) => {
  let filterString = '?';
  let f = 0;
  if (theme) {
    filterString += `theme="${theme}"`;
    f = 1;
  }
  if (occasion) {
    if (f == 1) {
      filterString += `&occasion="${occasion}"`;
    } else {
      filterString += `occasion="${occasion}"`;
    }
    f = 1;
  }
  if (budget) {
    if (f == 1) {
      filterString += `&budget=${budget}`;
    } else {
      filterString += `budget=${budget}`;
    }
    f = 1;
  }

  if (place) {
    if (f == 1) {
      filterString += `&place="${place}"`;
    } else {
      filterString += `place="${place}"`;
    }
    f = 1;
  }

  const apiCall = `${BASE_URL}/design${filterString}`;
  return apiCall;
};
const POSTER_DATA = () => `${BASE_URL}/poster`;

const PARTY_PLACE = () => `${BASE_URL}/paplace`;

export { PARTY_DATA, THEMES_DATA, REGISTRATION, DESIGNS, PARTY_PLACE, POSTER_DATA };
