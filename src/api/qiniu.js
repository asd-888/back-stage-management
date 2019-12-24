/*
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:28:53
 * @Description: 
 */
import request from '@/utils/request'

export function getToken() {
  return request({
    url: '/qiniu/upload/token', // 假地址 自行替换
    method: 'get'
  })
}
