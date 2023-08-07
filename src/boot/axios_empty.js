require('dotenv').config()
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

console.log(process.env.BASEURL)
const api = axios.create({ baseURL: '', withCredentials: true, credentials: 'include' })

Vue.prototype.$api = api
export { axios, api }
