/*
 * @Author: 席鹏昊
 * @Date: 2019-12-18 15:24:04
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-23 08:46:09
 * @Description: 
 */
import request from '@/utils/request'

export function login(data) {
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
