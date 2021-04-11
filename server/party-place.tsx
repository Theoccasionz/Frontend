import axios from 'axios';
import { PARTY_PLACE, POSTER_DATA } from '../constants';

const partyPlaceData = async () => {
  let response: any;
  try {
    response = await axios.get(PARTY_PLACE());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const posterData = async () => {
  let response: any;
  try {
    response = await axios.get(POSTER_DATA());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { partyPlaceData, posterData };
