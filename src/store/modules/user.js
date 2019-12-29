
import { login, logout, getInfo } from '@/api/user';
import { userInfo, viewAuthority } from "@/api/userManagement";
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  viewAuthority: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_VIEWAUTHORITY: (state, viewAuthority) => {
    console.log("viewAuthority66666666",viewAuthority)
    state.viewAuthority = viewAuthority;
    console.log("viewAuthority5555555555",state.viewAuthority)
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    const res = await login({ user_name: username, user_pwd: password })
    console.log(res,"resres")
    commit('SET_TOKEN', res.token)
    setToken(res.token)
    // return new Promise((resolve, reject) => {
    //   login({ user_name: username, user_pwd: password }).then(response => {
    //       console.log(response)
    //     // const { data } = response

    //     console.log(data.token)
    //     commit('SET_TOKEN', data.token)

    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // get user info
 async getInfo({ commit, state }) {
    //1 获取个人信息
    let userInfos = await userInfo();//获取登录信息
    console.log("userInfos........",userInfos)
    commit('SET_NAME', userInfos.data.user_name)//设置名字
    commit('SET_AVATAR', userInfos.data.avatar || 'https://jasonandjay.com/favicon.ico')//设置头像

    //2 获取用户权限视图
    let viewAuthoritys = await viewAuthority();//获取视图
    console.log("viewAuthoritys.........",viewAuthoritys)
    commit('SET_VIEWAUTHORITY', viewAuthoritys.data);
    return viewAuthoritys.data
    // return new Promise((resolve, reject) => {
      
    //   // getInfo(state.token).then(response => {
    //   //   const { data } = response

    //   //   if (!data) {
    //   //     reject('Verification failed, please Login again.')
    //   //   }

    //   //   const { roles, name, avatar, introduction } = data

    //   //   // roles must be a non-empty array
    //   //   if (!roles || roles.length <= 0) {
    //   //     reject('getInfo: roles must be a non-null array!')
    //   //   }
    //   const roles = ['admin']
    //   commit('SET_ROLES', roles)
    //   //   commit('SET_ROLES', roles)
    //   //   commit('SET_NAME', name)
    //   //   commit('SET_AVATAR', avatar)
    //   //   commit('SET_INTRODUCTION', introduction)
    //   resolve(roles)
    //   // }).catch(error => {
    //   //   reject(error)
    //   // })
    // })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, { root: true })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
