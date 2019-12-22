/*
 * @Author: your name
 * @Date: 2019-12-20 19:41:26
 * @LastEditTime : 2019-12-20 19:42:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\getClass.js
 */
import request from '@/utils/request'

export function GetClass(){
    return request({
        url:"/exam/subject",
        method:"get"
    })
}