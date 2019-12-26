/*
 * @Author: your name
 * @Date: 2019-12-25 16:57:18
 * @LastEditTime : 2019-12-25 17:02:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\api.js
 */
import {Api}  from '@/api/userShow'

const state={
    ApiData:[]
}


const mutations={
    newApiData:(state,payload)=>{
        console.log(payload,'+++++++++++++')
        state.ApiData=payload
    }
}

const actions={
 async  Api({commit},payload){
        const res=await Api()
        console.log(res.data,'apiapiapi')
        commit('newApiData',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}