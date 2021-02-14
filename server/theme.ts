import axios from 'axios';
import { THEMES_DATA } from '../constants';

const fetchThemeData = async (theme: string) => {
  let response: any;
  try {
    response = await axios.get(THEMES_DATA(theme));
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { fetchThemeData };
