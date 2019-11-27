import axios from "axios";

const API_URL = "http://localhost:8080";
const AGENCY_JSON_PATH = "/wp-json/wp/v2/agency";
const AGENCY_TYPES_PATH = "/wp-json/wp/v2/agency_type";

export function getAgencies() {
  return axios.get(`${API_URL}${AGENCY_JSON_PATH}`).then(response => {
    return response.data;
  });
}

export function getAgency(slug) {
  return axios
    .get(`${API_URL}${AGENCY_JSON_PATH}?slug=${slug}`)
    .then(response => {
      return response.data[0];
    });
}

export function getAgencyTypes() {
  return axios.get(`${API_URL}${AGENCY_TYPES_PATH}`).then(response => {
    return response.data;
  });
}
