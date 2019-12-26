/*
 * @Author: your name
 * @Date: 2019-12-25 13:57:26
 * @LastEditTime : 2019-12-25 14:06:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\userIdentity.js
 */
import {UserIdentity}  from '@/api/userShow'

const state={
    userIdentityData:[]
}


const mutations={
    newUserIdentity:(state,payload)=>{
        console.log(payload,'+++++++++++++')
        state.userIdentityData=payload
    }
}

const actions={
 async  UserIdentity({commit},payload){
        const res=await UserIdentity()
        console.log(res,111111)
        commit('newUserIdentity',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}