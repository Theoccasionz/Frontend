import axios from 'axios';
import { ADD_POSTER, GET_BOOKINGS } from '../../constants';

const addPoster = async (data: any) => {
  let response: any;
  try {
    response = await axios.post(ADD_POSTER(), data);
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const getBookings = async () => {
  let response: any;
  try {
    response = await axios.get(GET_BOOKINGS());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { addPoster, getBookings };
