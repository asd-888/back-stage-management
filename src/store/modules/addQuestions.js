
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-23 14:55:41
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-24 14:53:18
 * @Description: 
 */

import { userInfo, questions} from "@/api/tryTopic";
const state= {
    user: {}

}

const mutations= {
    USER_MESSAGE: (state, payload)=>{
        console.log(payload)
        state.user= payload
    },

}

const actions= {
   async getUser({commit},payload) {
    //获取当前用户信息
     let user=await userInfo()
     if(user.code===1){
         commit("USER_MESSAGE",user.data)
     }
     console.log(user,"aaaaaa")
    },
   async addTest({commit},payload) {
       console.log(payload,"payload")
       let params={...payload}
       console.log(params,"paramsparamsparamsparams")
    let src= await questions(params)

        // console.log(src,"payload")
    }   
   
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}