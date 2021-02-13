import axios from 'axios'

const axiosInstance = axios.create({baseURL: 'https://neko-cafe-back.herokuapp.com/'})

export const requestAPI = {
  request: (success: boolean) => {
    return axiosInstance.post('auth/test', {success})
  }
}