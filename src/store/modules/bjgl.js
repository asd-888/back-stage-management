import { grades,gradeUpdate} from "@/api/class-and-grade"

const state = {
    bjlist : [],
    
}
const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.bjlist=payload
      console.log(state.bjlist)
    },
  
  }
  
  const actions = {
    async grades({ commit }) {
        let res =  await grades()
        console.log(res)
        commit('ADD_ERROR_LOG', res.data)
    },
    async gradeUpdate({ commit }, payload) {
      console.log(payload)
      let {grade_id,grade_name}=payload
      let res =  await gradeUpdate(grade_id)
      console.log(res)
     
  },

  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }