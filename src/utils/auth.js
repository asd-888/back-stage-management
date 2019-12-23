/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:56
 * @LastEditTime : 2019-12-23 19:40:20
 * @LastEditors  : 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\utils\auth.js
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
