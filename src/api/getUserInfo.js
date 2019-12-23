/*
 * @Author: your name
 * @Date: 2019-12-23 15:03:21
 * @LastEditTime : 2019-12-23 15:13:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\getUserInfo.js
 */
import request from '@/utils/request'

export function GetUserInfo(){
    return request({
        url:"/user/userInfo",
        method:'get',
    })
}