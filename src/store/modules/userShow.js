/*
 * @Author: your name
 * @Date: 2019-12-25 11:02:49
 * @LastEditTime : 2019-12-25 17:01:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\store\modules\userShow.js
 */
import {UserShow}  from '@/api/userShow'

const state={
    userData:[]
}


const mutations={
    newUserData:(state,payload)=>{
        state.userData=payload
    }
}

const actions={
 async  UserShow({commit},payload){
        const res=await UserShow()
        // console.log(res)
        commit('newUserData',res.data)
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}