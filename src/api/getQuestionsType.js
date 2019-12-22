/*
 * @Author: your name
 * @Date: 2019-12-20 19:51:12
 * @LastEditTime: 2019-12-20 19:52:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\getQuestionsType.js
 */
import request from '@/utils/request'

export function GetQuestionsType(){
    return request({
        url:"/exam/getQuestionsType",
        method:"get"
    })
}