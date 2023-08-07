import { LocalStorage, SessionStorage } from 'quasar'
import { axios } from 'boot/axios'

export default {

  /* generate common request data format */
  getRequestObject (url, data) {
    console.log(data)
    const userData = LocalStorage.getItem('user')
    axios.defaults.headers.common.uuid = userData.uuid
    const ret = { url: url, data: data }
    return ret
  },
  setSession () {
    if (LocalStorage.getItem('user')) {
      const userData = LocalStorage.getItem('user')
      axios.defaults.headers.common.uuid = userData.uuid
      return true
    } else if (SessionStorage.getItem('user')) {
      const userData = SessionStorage.getItem('user')
      axios.defaults.headers.common.uuid = userData.uuid
      return true
    }
  },
  pad (number) {
    if (number < 10) {
      return '0' + number
    }
    return number
  },
  getCurrentDate () {
    var today = new Date()
    var date = today.getFullYear() + '-' + this.pad(today.getMonth() + 1) + '-' + this.pad(today.getDate())
    var dateTime = date
    return dateTime
  },
  getCurrentDateTime () {
    var today = new Date()
    var date = today.getFullYear() + '-' + this.pad(today.getMonth() + 1) + '-' + this.pad(today.getDate())
    var time = this.pad(today.getHours()) + ':' + this.pad(today.getMinutes()) + ':' + this.pad(today.getSeconds())
    var dateTime = date + ' ' + time
    return dateTime
  },
  getSomeDate (s) {
    return s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
  },
  getYear () {
    var today = new Date()
    var y = today.getFullYear()
    return y
  },
  getMonth () {
    var today = new Date()
    var m = this.pad(today.getMonth() + 1)
    return m
  },
  getDay () {
    var today = new Date()
    var d = this.pad(today.getDate())
    return d
  },
  getAddDay (oldDate, add) {
    const date = (oldDate == null ? new Date() : oldDate)
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + add, date.getHours(), date.getMinutes(), date.getSeconds())
  },
  getAddTime (oldDate, add) {
    const date = (oldDate == null ? new Date() : oldDate)
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + add, date.getMinutes(), date.getSeconds())
  },
  getYYYYMMDD (oldDate) {
    const date = (oldDate == null ? new Date() : oldDate)
    const year = date.getFullYear().toString()
    const month = ('0' + (1 + date.getMonth())).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    return year + '-' + month + '-' + day
  },
  getYYYYMMDDHHmmss (oldDate) {
    const date = (oldDate == null ? new Date() : oldDate)
    const year = date.getFullYear().toString()
    const month = ('0' + (1 + date.getMonth())).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    const hour = this.pad(date.getHours())
    const minutes = this.pad(date.getMinutes())
    const seconds = this.pad(date.getSeconds())
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  },
  getHHmmss (oldDate) {
    const date = (oldDate == null ? new Date() : oldDate)
    const hour = this.pad(date.getHours())
    const minutes = this.pad(date.getMinutes())
    const seconds = this.pad(date.getSeconds())
    return hour + ':' + minutes + ':' + seconds
  },
  // return label for value from q-select options
  getLabelFromOptions (options, value) {
    for (const idx in options) {
      if (options[idx].value === value) {
        return options[idx].label
      }
    }
    return ''
  },
  getCodeFromOptions (options, value) {
    for (const idx in options) {
      if (options[idx].value === value) {
        return options[idx].code
      }
    }
    return ''
  },
  datediff (first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24))
  },
  hourDiff (first, second) {
    return Math.round((second - first) / (1000 * 60 * 60))
  },
  minuteDiff (first, second) {
    return Math.round((second - first) / (1000 * 60))
  },
  getDayLabel (inputDate) {
    const date = (inputDate === null ? new Date() : inputDate)
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    const today = date.getDay()
    const todayLabel = week[today]
    return todayLabel
  },
  getDayLabelMin (inputDate) {
    const date = (inputDate === null ? new Date() : inputDate)
    const week = ['일', '월', '화', '수', '목', '금', '토']
    const today = date.getDay()
    const todayLabel = week[today]
    return todayLabel
  },
  getUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  },
  showErrorMessage (obj, msg) {
    obj.notify({
      color: 'negative',
      position: 'top',
      message: msg,
      icon: 'report_problem'
    })
  },
  showNotifyMessage (obj, msg) {
    obj.notify({
      color: 'positive',
      position: 'top',
      message: msg,
      icon: 'announcement'
    })
  },
  numberWithCommas (x) {
    if (x === null || x === undefined) {
      return null
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  },

  /**
      문자열 확인 관련 펑션
  */
  isNull (v, d) {
    if (v === null || v === undefined || v === '') {
      v = d
    }
    return v
  },
}
