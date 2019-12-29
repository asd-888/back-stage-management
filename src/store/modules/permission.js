/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:56
 * @LastEditTime : 2019-12-27 15:06:37
 * @LastEditors  : 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\store\modules\permission.js
 */
import { asyncRoutes, constantRoutes, authorityRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
 
/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

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
 async generateRoutes({ commit }, roles) {
    console.log("roles....roles",roles)

    let accessedRoutes = [];
    //循环authorityRoutes
    authorityRoutes.forEach(item=>{
      let children = [], unAuthorized = [];
      item.children.forEach(value=>{
        if(roles.findIndex(view=>view.view_id===value.meta.view_id) !== -1){
          children.push(value);
        }else{
          unAuthorized.push(value)
        }
      })

      //把拥有的路由重置
      item.children=children;
      console.log("item...",item)
      accessedRoutes.push(item)
      console.log(accessedRoutes,"accessedRoutesaccessedRoutes")
      //把没有的路由重定向到401
      unAuthorized.forEach(value=>{
        accessedRoutes.push({
          path: item.path+'/'+value.path,
          redirect: '/401'
        })
      })
    })
    commit('SET_ROUTES', accessedRoutes)
    console.log('accessedRoutes...', accessedRoutes);
    return accessedRoutes;


    // return new Promise(resolve => {
    //   let accessedRoutes
    //   if (roles.includes('admin')) {
    //     accessedRoutes = asyncRoutes || []
    //   } else {
    //     accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    //   }
    //   commit('SET_ROUTES', accessedRoutes)
    //   resolve(accessedRoutes)
    // })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
