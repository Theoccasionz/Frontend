const BASE_URL = 'http://localhost:8000/api';
const PARTY_DATA = (type: String) => `${BASE_URL}/${type}`;
const THEMES_DATA = (theme: String) => `${BASE_URL}/parties?theme=${theme}`;

export { PARTY_DATA, THEMES_DATA };
