import axios from 'axios';

export const postmanRequest = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  // withCredentials: true // required for strangler endpoints
  withCredentials: false // required for postman endpoints
});
