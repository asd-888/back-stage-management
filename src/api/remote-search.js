/*
 * @Author: 席鹏昊
 * @Date: 2019-12-23 18:32:30
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-23 19:29:01
 * @Description: 
 */
import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}
