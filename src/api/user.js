/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:55
 * @LastEditTime: 2019-12-19 11:31:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\api\user.js
 */
import request from '@/utils/request'

export function login(data) {
  console.log(data,"data")
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
