import axios from 'axios';

const API = "http://localhost:3001";

export const createUsers = async (name, email, password) => {
  let result;

   await axios.post(`${API}/user/register`, {
    name,
    email,
    password
  })
  .then((response) => {
    result = response.data;
  })
  .catch((error) => {
   result = error.response.data.message;
  });

 return result;

};

export const loginUsers = async (email, password) => {
let result;

  await axios.post(`${API}/login`, {
   email,
   password
 })
 .then((response) => {
  result = response.data;
 })
 .catch((error) => {
   result = error.response.data.message;

 });

 return result;
};