/*
 * @Author: your name
 * @Date: 2019-12-20 19:00:24
 * @LastEditTime : 2019-12-20 19:39:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\getAllTest.js
 */
import request from '@/utils/request'

export function GetAllTest(){
    return request({
        url:"/exam/examType",
        method:"get"
    })
}