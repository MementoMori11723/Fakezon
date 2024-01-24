import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CallAPI = async (resource: any) => {
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
  return data;
};
