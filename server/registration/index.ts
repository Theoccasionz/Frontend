import axios from 'axios';
import { REGISTRATION } from '../../constants';

const Registration = async (data: Object, type: 'venue' | 'vendor') => {
  let response: any;
  try {
    response = await axios.post(REGISTRATION(type), data);
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

export { Registration };
