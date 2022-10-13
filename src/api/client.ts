import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
})

export default httpClient
