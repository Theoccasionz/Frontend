import { PARTY_DATA } from '../constants';
import axios from 'axios';

const fetchPartyThemes = async () => {
  let response: any;
  try {
    response = await axios.get(PARTY_DATA('partythemes'));
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const fetchDJThemes = async () => {
  let response: any;
  try {
    response = await axios.get(PARTY_DATA('djthemes'));
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const fetchSpecialParties = async () => {
  let response: any;
  try {
    response = await axios.get(PARTY_DATA('sparty'));
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { fetchPartyThemes, fetchDJThemes, fetchSpecialParties };
