/*
 * @Author: 席鹏昊
 * @Date: 2019-12-18 15:24:04
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-19 10:58:43
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
  console.log(query,"sss")
  return request({
    url: '/transaction/list',
    method: 'get',
    params: query
  })
}
