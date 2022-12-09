import axios from 'axios'


export const getNoCancell = async (document) => {
  try {
    const response = await axios.get(`http://localhost:6660/user`);
    //console.log("getPatient", response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};