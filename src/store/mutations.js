/*
直接更新state的多个方法对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGERYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
     state.address = address
  },

  [RECEIVE_CATEGERYS] (state, {categorys}) {
     state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
     state.shops = shops
  },

  [RECEIVE_USER_INFO] (state, {userInfo}) {
     state.userInfo = userInfo
  },
}
