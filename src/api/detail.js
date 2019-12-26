/*
 * @Author: your name
 * @Date: 2019-12-24 15:27:03
 * @LastEditTime : 2019-12-24 17:06:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\detail.js
 */
import request from '@/utils/request'

export function Detail(data){
    console.log(data,'11111111111111111111')
    return request({
    
        url:"/exam/questions/condition",
        method:'get',
        data
    })
}