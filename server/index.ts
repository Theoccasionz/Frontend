import { PARTY_THEME_DATA, DJ_THEME_DATA } from '../constants';
import axios from 'axios';

const fetchPartyThemes = async () => {
  let response: any;
  try {
    response = await axios.get(PARTY_THEME_DATA());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const fetchDJThemes = async () => {
  let response: any;
  try {
    response = await axios.get(DJ_THEME_DATA());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { fetchPartyThemes, fetchDJThemes };
