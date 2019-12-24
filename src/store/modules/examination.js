import {Allcourses,examType,examList,examDetail} from '@/api/examination'

const state = {
    coursesList:[],
    examTypeList:[],
    ExamList:[],
    examDetailList:[]
}
const mutations = {
    setcoursesList(state,payload){
        state.coursesList = payload
    },
    setexamTypeList(state,payload){
        state.examTypeList = payload
    },
    // 考试列表
    setexamList(state,payload){
        state.ExamList = payload
        function timestampToTime(timestamp) {
            var date = new Date(timestamp);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
            var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
            var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
            var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
            return Y+M+D+h+m+s;
        }
        if(state.ExamList){
            state.ExamList = state.ExamList.map(item=>{
                item.start_time = timestampToTime(Number(item.start_time))
                item.end_time = timestampToTime(Number(item.end_time))
                return item
            })
        }
        
    },
    // 教师端详情
    setExamDetailList(state,payload){
        state.examDetailList = payload
    }
}

const actions = {
    async courses({commit},payload){
        let res = await Allcourses()
        commit('setcoursesList',res.data)
    },
    async examType({commit},payload){
        let res = await examType()
        commit('setexamTypeList',res.data)
    },
    // // 考试列表
    async examList({commit},payload){
        let res = await examList()
        commit('setexamList',res.exam)
    },
    // 教师端详情
    async examDetail({commit},payload){
        let res = await examDetail();
        commit('setExamDetailList',res.data)
        console.log(res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }