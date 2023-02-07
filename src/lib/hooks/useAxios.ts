import APIService from "../../services/axios.service";
import axios from "axios";
import { noteData } from "../../utils/types";


class Fetch_Data extends APIService {
  fetchdata_post(URL: string, data: noteData) {
    return axios
      .post(URL, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
  fetchdata_put(URL: string, data: noteData) {
    return axios
      .put(URL, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
  fetchdata_get(URL: string) {
    return axios
      .get(URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
        
      });
  }
  fetchdata_delete(URL: string) {
    return axios
      .delete(URL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error; 
      });
  }
}
export default Fetch_Data;