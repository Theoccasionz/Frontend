import axios from 'axios';
import { POSTERS_API, DESIGNS_API, GET_BOOKINGS, VENDORS_API } from '../../constants';

const getPosters = async () => {
  let response: any;
  try {
    response = await axios.get(POSTERS_API());
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

const addPoster = async (data: any) => {
  let response: any;
  try {
    response = await axios.post(POSTERS_API(), data);
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const displayTogglePoster = async (data?: any) => {
  let response: any;
  try {
    response = await axios.put(POSTERS_API(), data);
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const deletePoster = async (id?: number) => {
  let response: any;
  try {
    response = await axios.delete(POSTERS_API(id));
    return response.data;
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

const changeBookingStatus = async (data: any) => {
  let response: any;
  try {
    response = await axios.put(GET_BOOKINGS(), data);
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const addDesign = async (data: any) => {
  let response;
  try {
    response = await axios.post(DESIGNS_API(), data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

const getDesigns = async () => {
  let response: any;
  try {
    response = await axios.get(DESIGNS_API());
    return response.data;
  } catch (error) {
    return { error: error?.response?.data || error?.message };
  }
};

const getSingleDesign = async (id: Number) => {
  let response: any;
  try {
    response = await axios.get(DESIGNS_API(id));
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

const updateSingleDesign = async (data: any) => {
  let response;
  try {
    response = await axios.put(DESIGNS_API(), data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

const getVendors = async () => {
  let response: any;
  try {
    response = await axios.get(VENDORS_API());
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

const addVendor = async (data: any) => {
  let response;
  try {
    response = await axios.post(VENDORS_API(), data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

const editVendor = async (data: any) => {
  let response;
  try {
    response = await axios.put(VENDORS_API(), data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data || error?.message);
  }
};

export {
  getPosters,
  addPoster,
  displayTogglePoster,
  deletePoster,
  getBookings,
  changeBookingStatus,
  addDesign,
  getDesigns,
  getVendors,
  editVendor,
  addVendor,
  getSingleDesign,
  updateSingleDesign,
};
