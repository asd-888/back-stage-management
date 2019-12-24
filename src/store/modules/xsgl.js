import {student} from "@/api/class-and-grade"

const state = {
    xslist : [],
    
}
const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.xslist=payload
    
    },
  
  }
  
  const actions = {
    async student ({ commit }) {
        let res =  await student()
        // console.log(res)
        commit('ADD_ERROR_LOG', res.data)
    },
  
  //删除
//   async gradeDelete({ commit }, payload) {
//     console.log(payload)
   
//     let res =  await gradeDelete(payload)  //这里有问题，要么422要么500,现在已经解决
//     console.log(res)
   
// },


  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }