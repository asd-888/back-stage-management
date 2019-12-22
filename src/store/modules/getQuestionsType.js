/*
 * @Author: your name
 * @Date: 2019-12-20 19:52:24
 * @LastEditTime: 2019-12-20 19:53:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\getQuestionsType.js
 */
import {GetQuestionsType}  from '@/api/getQuestionsType'

const state={
    getQuestionsType:[]
}

const mutations={
    newType(state,payload){
        state.getQuestionsType=payload
        console.log(payload)

    }       
}

const actions={
    async GetQuestionsType({commit},payload){
        const res=await GetQuestionsType()
        commit('newType',res.data)
        console.log(res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}