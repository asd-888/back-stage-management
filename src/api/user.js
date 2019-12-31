/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:55
 * @LastEditTime : 2019-12-26 15:53:21
 * @LastEditors  : 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\api\user.js
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}


export function getInfo() { //获取用户信息
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}
export function getViewAuthority(){  //获去视图权限
  return request({
    url: '/user/view_authority',
    method: 'get'
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function Gengxin(data) {
  return request({
    url: '/user/user',
    method: 'put',
    data
  })
}
