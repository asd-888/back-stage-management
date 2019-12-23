/*
 * @Author: your name
 * @Date: 2019-12-20 10:35:17
 * @LastEditTime : 2019-12-22 19:00:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\AddTest.js
 */

import request from '@/utils/request'

export function AddTestgetData(data){
    return request({
        url:"/exam/questions",
        method:'post',
        data
    })
}
