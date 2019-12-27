import { grades,gradeUpdate,gradeDelete,gradeAdd} from "@/api/class-and-grade"
//这是班级管理
const state = {
    bjlist : [],
    
}
const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
      state.bjlist=payload
    
    },
  
  }
  
  const actions = { //涉及到接口请求的全部放到actions里
    async grades({ commit }) {
        let res =  await grades()
        console.log(res)
        commit('ADD_ERROR_LOG', res.data)
    },
    async gradeUpdate({ commit }, payload) {  //修改班级
      let res =  await gradeUpdate(payload)
      
     
  },
  //删除
  async gradeDelete({ commit }, payload) {
    console.log(payload)
   
    let res =  await gradeDelete(payload)  //这里有问题，要么422要么500,现在已经解决
    console.log(res)
   
},
//添加班级
async gradeAdd({ commit }, payload) {
 
  let res =  await gradeAdd(payload)
  
},
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }