import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const usersPagesApi = {

    getUsers (page = 1, per_page = 6) {

       return instance.get(`users?page=${page}&per_page=${per_page}` )
    },

    deleteUsers (userId) {

       return instance.delete(`users/${userId}`)
    },

    updateUser (userId, data) {
      
      return instance.put(`users/`,{userId, data})
   }
   
}


