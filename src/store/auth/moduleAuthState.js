


import auth from '@/auth/authService'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  Global1: 0,
  Config_User: {},
  isUserLoggedIn: () => {

    return new Promise(async (resolve) => {
      let isAuthenticated = false
      // get firebase current user
      const firebaseCurrentUser = firebase.auth().currentUser

      let hasToken = false
      await auth.isAuthenticated().then(value => {
        hasToken = value
        if (hasToken) {
          // Set bearer token in axios
          //commit('SET_BEARER', value.token)
        }
      })


      if (hasToken || firebaseCurrentUser) isAuthenticated = true
      else isAuthenticated = false
      //console.log(isAuthenticated)
      //return localStorage.getItem('userInfo') && isAuthenticated
      resolve(isAuthenticated)
    })

  }

}
