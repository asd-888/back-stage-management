/*
 * @Author: 席鹏昊
 * @Date: 2019-12-18 15:24:04
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-18 16:55:12
 * @Description: 
 */
import Cookies from 'js-cookie'

const TokenKey = 'authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
