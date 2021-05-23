import axios from 'axios';
import { ADD_POSTER } from '../../constants';

const addPoster = async (data: any) => {
  let response: any;
  try {
    response = await axios.post(ADD_POSTER(), data);
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { addPoster };
