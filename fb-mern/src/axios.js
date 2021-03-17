import axios from 'axios'

const instance = axios.create({
   // baseURL: 'http://localhost:9000'
   baseURL: 'https://fb-mern-clone-david.herokuapp.com/'
})

export default instance