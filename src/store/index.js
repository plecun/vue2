import Vue from 'vue'
import Vuex from 'vuex'

import {
  getUserInfo
} from '@/api/user/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	token: localStorage.getItem('token'),
    userInfo: {},
    vipInfo: ""
  },
  mutations: {
  	setToken(state, token) {
      state.token = token;
    },
    setUserInfo(state, val) {
      state.userInfo = val;
    },
    setVipInfo(state, vipInfo) {
      state.vipInfo = vipInfo;
    },
    setNoticeNumber(state, noticeNumber) {
      state.noticeNumber = noticeNumber;
    },
    customTitle(state, val) {
      state.customTitle = val;
    }
  },
  actions: {
    // 获取用户信息
    async getUserInformation({
      commit,
      dispatch
    }) {
      var mToken = document.cookie.split(";")[0].split("=")[1];
      if (mToken) {
        commit('setToken', mToken)
        localStorage.setItem('token', mToken)
        let res = await getUserInfo()
        commit('setUserInfo', res.result)
        dispatch('getUserVipInfo')
      }
    },
    // 退出登录
    signOut({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('setToken', '')
        commit('setUserInfo', {})
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        resolve()
      }).catch(err => {
        reject(err)
      })
    }
  },
  modules: {
  }
})
