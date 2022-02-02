

import axios from '../../http/axios/index.js'

export default {
  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },
  SET_CONFIGUSER (state, data) {
    state.Config_User = data
    //console.log(JSON.parse(state.Config_User))
    //axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },


  TEST_FUNCION (state, params) {

    state.Global1 += params
    console.log(state.Global1)

  }
}
