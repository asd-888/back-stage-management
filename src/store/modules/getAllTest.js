/*
 * @Author: your name
 * @Date: 2019-12-20 19:04:11
 * @LastEditTime : 2019-12-20 19:25:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\getAllTest.js
 */

import {GetAllTest}  from '@/api/getAllTest'

const state={
    getAllData:[]
}

const mutations={
    newGetAll(state,payload){
        state.getAllData=payload
        console.log(payload)

    }       
}

const actions={
    async GetAllTest({commit},payload){
        const res=await GetAllTest()
        commit('newGetAll',res.data)
        // console.log(res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}