/*
 * @Author: your name
 * @Date: 2019-12-20 09:53:45
 * @LastEditTime : 2019-12-22 19:06:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\AddTest.js
 */
import {AddTestgetData}  from '@/api/AddTest'

const state={
    AddTestData:[]
}


const mutations={
    newAddTest:(state,payload)=>{
        console.log(payload,'+++++++++++++')
        state.AddTestData=payload
    }
}

const actions={
 async  AddTestgetData({commit},payload){
        const res=await AddTestgetData(payload)
        console.log(payload)
        console.log(res,111111)
        commit('newAddTest',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}