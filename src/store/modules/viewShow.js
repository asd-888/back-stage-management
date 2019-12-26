/*
 * @Author: your name
 * @Date: 2019-12-26 11:02:06
 * @LastEditTime : 2019-12-26 11:10:21
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\viewShow.js
 */
import {ViewShow}  from '@/api/userShow'

const state={
    viewData:[]
}


const mutations={
    newViewData:(state,payload)=>{
        state.viewData=payload
    }
}

const actions={
 async  ViewShow({commit},payload){
        const res=await ViewShow()
        console.log(res.data,'ViewShow')
        commit('newViewData',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}