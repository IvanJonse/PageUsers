import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})


export const usersPagesApi = {

    getUsers (page, per_page, total, total_pages) {
       return instance.get(`users?page=${page}&per_page=${per_page}&total=${total}&total_pages=${total_pages}/` )
    },

    getCurrentUser (userId) {
       return instance.get(`users/2`)
    },

    deleteUsers (userId) {
       return instance.delete(`users/${userId}`)
    }


}

