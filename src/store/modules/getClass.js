/*
 * @Author: your name
 * @Date: 2019-12-20 19:42:41
 * @LastEditTime : 2019-12-20 19:48:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\getClass.js
 */
import {GetClass}  from '@/api/getClass'

const state={
    getclass:[]
}

const mutations={
    newClass(state,payload){
        state.getclass=payload
        console.log(payload)

    }       
}

const actions={
    async GetClass({commit},payload){
        const res=await GetClass()
        commit('newClass',res.data)
        console.log(res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}