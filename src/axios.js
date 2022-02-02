// axios
import axios from 'axios'

//const baseURL = 'https://jsonplaceholder.typicode.com'//test
const baseURL = 'http://192.168.0.21:1111/api/'
export default axios.create({
  baseURL
  // You can add your headers here
})
