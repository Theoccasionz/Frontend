import axios from 'axios';
import { PARTY_PLACE } from '../constants';

const partyPlaceData = async () => {
  let response: any;
  try {
    response = await axios.get(PARTY_PLACE());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { partyPlaceData };
