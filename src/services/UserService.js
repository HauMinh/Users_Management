// import axios from 'axios';

import axios from './customize-axios'; 

const fetchAllUser = (page) =>{
  //axios ở đây và trên import chính là instance,
  // ta có thể đặt tên 1 biến khác không nhất thiết phải instance tuy nhiên nó là đại diện cho instance
  return  axios.get(`api/users?page= ${page}`);
   
}

const postCreateUser = (name, job)=>{
  return axios.post("api/users", {name, job});
}

const putUpDateUser = (name, job) =>{
  return axios.put("api/users/2", {name, job});
}

const deleteUser = (id) =>{
  return axios.delete(`api/users/${id}`);
}

export {fetchAllUser, postCreateUser, putUpDateUser,deleteUser};