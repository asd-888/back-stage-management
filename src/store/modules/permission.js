/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:56
 * @LastEditTime : 2019-12-23 19:38:54
 * @LastEditors  : 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\store\modules\permission.js
 */
import {  constantRoutes ,authorityRoutes} from '@/router'



const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  async generateRoutes({ commit }, viewAuthority) {
    let accessedRoutes = [];
    authorityRoutes.forEach(item=>{
      let children = [], unAuthorized = [];
      item.children.forEach(value=>{
        if (viewAuthority.findIndex(view=>view.view_id === value.meta.view_id) !== -1){
          children.push(value);
        }else{
          unAuthorized.push(value);
        }
      })

      // 把拥有的路由重置children
      item.children = children;
      accessedRoutes.push(item);

      // 把没有的路由重定向到401
      unAuthorized.forEach(value=>{
        accessedRoutes.push({
          path: item.path+'/'+value.path,
          redirect: '/401'
        })
      })
    })

    commit('SET_ROUTES', accessedRoutes);
    console.log('accessedRoutes...', accessedRoutes);
    return accessedRoutes;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
