
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-20 13:51:37
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-20 13:53:59
 * @Description: 
 */
import {getQuestionsType, insertQuestionsType} from "@/api/tryTopic"
const state= {
    list:[]
}
const mutations= {
    ADD_LIST: (state,payload)=> {
        console.log(payload,"payload")
        state.list=payload
    }
}

const actions= {
   async getQuestionsType({commit}, ){
       let src= await getQuestionsType();
       if(src.code===1){
        commit("ADD_LIST",src.data)
       }
   },
   async insertQuestionsType({commit}, payload) {
        console.log(payload,"payl")
        let {text, sort}=payload;
        let src= await insertQuestionsType(text, sort);
        console.log(src, "src")
   }        
    
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}