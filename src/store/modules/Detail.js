/*
 * @Author: your name
 * @Date: 2019-12-24 15:48:12
 * @LastEditTime : 2019-12-24 17:18:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\Detail.js
 */
import {Detail}  from '@/api/detail'
import {condition} from "@/api/tryTopic"
const state={
    detailData:[]
}


const mutations={
    newDetail:(state,payload)=>{
        // console.log(payload,'+++++++++++++')
        state.detailData=payload
    }
}

// 
const actions={
 async  Detail({commit},payload){
        console.log(payload,"11111111")
        let params = {...payload}
        const res=await condition(params)
        console.log(res,111111)
        commit('newDetail',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}