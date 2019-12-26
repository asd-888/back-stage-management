/*
 * @Author: your name
 * @Date: 2019-12-25 11:01:24
 * @LastEditTime : 2019-12-26 11:15:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\api\userShow.js
 */
import request from '@/utils/request'
// 用户数据
export function UserShow(){
    return request({
        url:"/user/user",
        method:'get',
        
    })
}

// 身份权限
export function UserIdentity(){
    return request({
        url:"/user/identity",
        method:'get',
        
    })
}
// api接口权限
export function Api(){
    return request({
        url:"/user/api_authority",
        method:'get',
        
    })
}

// 身份和api接口关系
export function AuthorApi(){
    return request({
        url:"/user/identity_api_authority_relation",
        method:'get',
        
    })
}
// 视图接口权限
export function ViewShow(){
    return request({
        url:"/user/view_authority",
        method:'get',
        
    })
}



// 身份和视图权限关系
export function ViewAuthority(){
    return request({
        url:"/user/identity_view_authority_relation",
        method:'get',
        
    })
}