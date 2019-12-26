/*
 * @Author: your name
 * @Date: 2019-12-26 11:16:10
 * @LastEditTime: 2019-12-26 11:17:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\viewAuthority.js
 */
import {ViewAuthority}  from '@/api/userShow'

const state={
    ViewAuthorityData:[]
}


const mutations={
    newViewAuthorityData:(state,payload)=>{
        state.ViewAuthorityData=payload
    }
}

const actions={
 async  ViewAuthority({commit},payload){
        const res=await ViewAuthority()
        console.log(res.data,'ViewAuthority')
        commit('newViewAuthorityData',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}