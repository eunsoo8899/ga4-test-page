import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// const api = axios.create({ baseURL: 'http://pos-dev.1onepick.com:9090', withCredentials: true, credentials: 'include' })
const api = axios.create({ baseURL: 'http://rtcdev.ddns.net:4004', withCredentials: true, credentials: 'include' })

Vue.prototype.$api = api
export { axios, api }
