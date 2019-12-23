import {Allcourses,examType} from '@/api/examination'

const state = {
    coursesList:[],
    examTypeList:[]  
}
const mutations = {
    setcoursesList(state,payload){
        state.coursesList = payload
    },
    setexamTypeList(state,payload){
        state.examTypeList = payload
    }
}

const actions = {
    async courses({commit},payload){
        let res = await Allcourses();
        commit('setcoursesList',res.data)
    },
    async examType({commit},payload){
        let res = await examType();
        commit('setexamTypeList',res.data)
        console.log(res)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }