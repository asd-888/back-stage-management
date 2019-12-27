import {Allcourses,examType,examList,examDetail,addExam,updateExamList,deleteOne} from '@/api/examination'



const state = {
    coursesList:[],
    examTypeList:[],
    ExamList:[],
    examDetailList:[],
    addExamList:[],
    exam_exam_id:'',
    question_ids:{}
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
        state.question_ids = state.ExamList[2].question_ids
    
    },
    // 教师端详情
    setExamDetailList(state,payload){
        state.examDetailList = payload
    },
    //添加页面
    setaddExamList(state,paylaod){
        state.addExamList = paylaod
        
       
    },
    setList(state,payload){
        let list = state.addExamList.questions;
        list.splice(payload,1)
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
        let res = await examDetail(payload);
        commit('setExamDetailList',res.data)
    },
    // 创建考试
    async addExam({commit,state},payload){
        let res = await addExam(payload);
        commit('setaddExamList',res.data)
        state.exam_exam_id = res.data.exam_exam_id
        let arr =[]
        res.data.questions.forEach(item => {
            arr.push(item.questions_id)
        });
        
        let brr = {
            question_ids:JSON.stringify(arr)
        }
        state. question_ids = brr
        console.log(state)
        console.log("state",state.question_ids)
    },
    // 删除
    async deleteOne({commit},payload){
        let res = await deleteOne();
        // commit('setaddExamList',res.data)

    },
    // 更新
    async updateExamList({commit,state},payload){
       
        let {exam_exam_id,question_ids} = state
      
        let res = await updateExamList(exam_exam_id,question_ids);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }