import axios from '../../../axios/index.js'
// import store from '../../../../store/store.js'

// // Token Refresh
// let isAlreadyFetchingAccessToken = false
// let subscribers = []

// function onAccessTokenFetched (access_token) {
//   subscribers = subscribers.filter(callback => callback(access_token))
// }

// function addSubscriber (callback) {
//   subscribers.push(callback)
// }

export default {

  loginJwt (payload) {
    return new Promise((resolve, reject) => {
      const newPayload = {
        user: payload.userDetails.email,
        password: payload.userDetails.password,
        remember: payload.checkbox_remember_me
      }
      //'posts/1'
      //const res = await axios.post('/auth/login').then((response) => {
      const res = this.httpPost('/auth/login', newPayload).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        setTimeout(() => {
          reject({ message: 'Password doesn\'t match. Please try again.' })
        }, 2000)

      })
    })

  },
  getInfoUser (payload) {
    return new Promise((resolve, reject) => {
      const res = this.httpPost('/auth/getDetailsLogin', '').then((response) => {
        resolve(response.data)
      }).catch((error) => {
        setTimeout(() => {
          reject({ message: 'Error\'' })
        }, 2000)

      })
    })

  },


  httpPost (controller, payload) {
    const token = 'sd'//storage.getToken()
    const token2 = (token !== null) ? token : ''
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: controller,
        headers: {
          'Content-Type': 'application/json'
        },
        data: payload
      })
        .then(function (response) {
          resolve(response)
          // console.log(response.statusText);
        })
        .catch(function (error) {
          //console.log(error.message)
          reject(error)
          // console.log(error);
        })
    })


  }

}
