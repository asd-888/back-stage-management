/*
 * @Author: your name
 * @Date: 2019-12-26 20:13:34
 * @LastEditTime : 2019-12-26 20:15:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\addType.js
 */
import {AddType}  from '@/api/AddTest'

const state={
    AddData:[]
}


const mutations={
    newAddData:(state,payload)=>{
        console.log(payload,'+++++++++++++')
        state.AddData=payload
    }
}

const actions={
 async  AddType({commit},payload){
        const res=await AddType()
        console.log(res,'添加数据')
        commit('newAddData',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}