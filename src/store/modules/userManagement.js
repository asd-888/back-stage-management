/*
 * @Author: 席鹏昊
 * @Date: 2019-12-25 11:41:06
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-26 20:15:19
 * @Description: 
 */

import {showIdentity, showUser, viewAuthority, showApiAuthority, addUser, updateUser, addIdentity, addAuthorityApi, addAuthorityView, setIdentityApi, setIdentityView} from "@/api/userManagement";


const state= {
    userList: '',//用户数据
    identityList: '',//展示身份数据
    viewList: '',//视图权限数据
    apiList: '',//api权限数据
}

const mutations= {
    //设置身份数据
    GET_USER_LIST(state,payload) {
        state.userList=payload
    }, 
    //展示身份数据
    GET_IDENTITY_LIST(state,payload){
        state.identityList=payload
    },
    //视图权限数据
    GET_VIEW_LIST(state,payload){
        state.viewList=payload
    },
    //api权限数据
    GET_API_LIST(state,payload){
        state.apiList=payload
    },
}
const actions= {
   async getList({commit},payload) {
    let user=await showUser();//用户数据
    if(user.code===1){
        commit("GET_USER_LIST",user.data)
    }
    let identity= await showIdentity();//身份数据
    if(identity.code===1){
        commit("GET_IDENTITY_LIST",identity.data)
    }
    let view=await viewAuthority();//视图权限数据
    if(view.code===1){
        commit("GET_VIEW_LIST",view.data)
    }
    let apiAuthority=await showApiAuthority();//api接口权限数据
    if(apiAuthority.code===1){
        commit("GET_API_LIST",apiAuthority.data)
    }
   },
   //添加用户
   async add({commit},payload){
       let data={...payload}
       let src=await addUser(data);
       if(src.code===1){
        return src.msg
    }
   },
   //更新用户
   async userUpdate({commit},payload){
    let params={...payload}
    let src= await updateUser(params);
    if(src.code===1){
        return src.msg
    }
   },
   //添加身份
   async addStatus({commit},payload) {
        let params={...payload}
        let src=await addIdentity(params);
        if(src.code===1){
            return src.msg
        }
        
   },
   //添加api接口权限
   async addApi({commit},payload) {
    let params={...payload};
    let src= await addAuthorityApi(params);
    if(src.code===1){
        return src.msg
    }
   },
   //添加view权限
   async addView({commit},payload) {
       let params= {...payload}
       let src=await addAuthorityView(params);
       if(src.code===1){
        return src.msg
    }
   },
   //设置身份权限
    async setApi({commit}, payload){
        let data={...payload}
        let src=await setIdentityApi(data);
        if(src.code===1){
            return src.msg
        }
    },
    //设置身份设定视图权限
    async setView({commit}, payload) {
        let data={...payload}
        let src=await setIdentityView(data);
        if(src.code===1){
            return src.msg
        }
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}