
/*
 * @Author: your name
 * @Date: 2019-12-23 15:04:55
 * @LastEditTime : 2019-12-23 15:57:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\GetUserInfo.js
 */
import {GetUserInfo}  from '@/api/getUserInfo'

const state={
    getUserId:''
}

const mutations={
    getuser(state,payload){
        state.getUserId=payload
        console.log( state.getUserId)

    }       
}

const actions={
    async GetUserInfo({commit},payload){
        // console.log(payload)
        const res=await GetUserInfo()
        commit('getuser',res.data.user_id)
        // console.log(res.data.user_id)
        // console.log(res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}