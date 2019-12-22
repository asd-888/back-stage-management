/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:56
 * @LastEditTime: 2019-12-19 08:35:11
 * @LastEditors: your name
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
