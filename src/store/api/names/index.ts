import { REQUEST_API_URL } from "../../../Constant";
import axios from "axios";

export const getNamesAPI = async () => {
  return axios.get(`${REQUEST_API_URL}`);
};
