import {Allcourses,examType,examList,examDetail,addExam} from '@/api/examination'

const state = {
    coursesList:[],
    examTypeList:[],
    ExamList:[],
    examDetailList:[],
    addExamList:[]
}
const mutations = {
    setcoursesList(state,payload){
        state.coursesList = payload
    },
    setexamTypeList(state,payload){
        state.examTypeList = payload
    },
    // 转化时间
    toTime(state,payload){
        var dataee=new Date(payload).toJSON();
        var date = new Date(+new Date(dataee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
        return date
    },
    // 创建考试
    addExam(state,payload){
        let a = JSON.parse(localStorage.getItem('exam'))
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
    },
    //添加页面
    setaddExamList(state,paylaod){
        state.addExamList = paylaod
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
    },
    // 创建考试
    async addExam({commit},payload){
        let res = await addExam(payload);
        commit('setaddExamList',res.data)
        // console.log(res.data,"res.data")
        console.log(JSON.stringify(res.data.exam_exam_id))
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }