
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-25 10:34:07
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-26 15:53:00
 * @Description: 
 */

 //用户管理
import request from "@/utils/request";

//添加用户
export function addUser(data) {
    return request({
        url: '/user',
        method: 'post',
        data
    })
}

//添加身份
export function addIdentity(params) {
    return request({
        url: '/user/identity/edit',
        method: 'get',
        params
    })
}

//添加视图权限
export function addAuthorityView(params){
    return request({
        url: '/user/authorityView/edit',
        method: 'get',
        params
    })
}

//添加api接口权限
export function addAuthorityApi(params) {
    return request({
        url: '/user/authorityApi/edit',
        method: 'get',
        params
    })
}

//更新用户信息(用户名，用户密码，用户身份)
export function updateUser(data) {
    return request({
        url: '/user/user',
        method: 'put',
        data
    })
}

//给身份设定api接口权限
export function setIdentityApi(data) {
    return request({
        url: '/user/setIdentityApi',
        method: 'post',
        data
    })
}

//展示用户数据
export function showUser(){
    return request({
        url: '/user/user',
        method: 'get',
    })
}

//展示身份数据
export function showIdentity() {
    return request({
        url: '/user/identity',
        method: 'get'
    })
}

//展示api接口权限数据
export function showApiAuthority() {
    return request({
        url: '/user/api_authority',
        method: 'get'
    })
}

//展示身份和api权限关系
export function identityApiAuthorityRelation() {
    return request({
        url: '/user/identity_api_authority_relation',
        method: 'get'
    })
}

//登录接口
export function login(data){
    return request({
        url: "/user/login",
        method: 'post',
        data
    })
}

//获取当前用户信息
export function userInfo() {
    return request({
        url: '/user/userInfo',
        method: 'get'
    })
}

//获取视图权限数据
export function viewAuthority() {
    return request({
        url: '/user/view_authority',
        method: 'get',
    })
}

//给身份设定视图权限
export function setIdentityView(data){
    return request({
        url: '/user/setIdentityView',
        method: 'post',
        data
    })
}

//展示身份和视图权限关系
export function identityViewAuthorityRelation() {
    return request({
        url: '/user/identity_view_authority_relation',
        method: 'get'
    })
}

//根据用户id，返回该用户的视图权限
export function newViewAuthority() {
    return request({
        url: '/user/new',
        method: 'get'
    })
}