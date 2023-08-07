require('dotenv').config()
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

console.log('---process.env.BASEURL------')
console.log(process.env.BASEURL)
const api = axios.create({ baseURL: 'http://rtcdev.ddns.net:4004', withCredentials: true, credentials: 'include' })

Vue.prototype.$api = api
export { axios, api }
