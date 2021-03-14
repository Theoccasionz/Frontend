import axios from 'axios';
import { DESIGNS } from '../constants';

type Query = {
  theme?: String;
  place?: String;
  occasion?: String;
  budget?: String;
};

const fetchDesigns = async (query: Query) => {
  const { theme, occasion, place, budget } = query;

  let response: any;
  try {
    console.log(DESIGNS(theme, occasion, place, budget));
    response = await axios.get(DESIGNS(theme, occasion, place, budget));
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { fetchDesigns };
