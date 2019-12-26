/*
 * @Author: your name
 * @Date: 2019-12-25 17:08:50
 * @LastEditTime: 2019-12-25 17:10:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\authorApi.js
 */
import {AuthorApi}  from '@/api/userShow'

const state={
    ApiAuthorData:[]
}


const mutations={
    newApiAuthorData:(state,payload)=>{       
        state.ApiAuthorData=payload
    }
}

const actions={
 async  AuthorApi({commit},payload){
        const res=await AuthorApi()
        console.log(res.data,'AuthorApi')
        commit('newApiAuthorData',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}