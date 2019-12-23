/*
 * @Author: 席鹏昊
 * @Date: 2019-12-20 16:20:13
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-23 15:01:49
 * @Description: 
 */
import { subject, getQuestionsType, examType, getQuestions, condition, userInfo} from "@/api/tryTopic";

const state = {
    list: [],
    questionsList:[],
    examList:[],
    getQuestionsList:[]
}

const mutations = {
    SUBJECT_LIST: (state, payload) => {
        state.list = payload
    },
    QUESTIONS_LIST: (state,payload) => {
        state.questionsList=payload
    },
    EXAM_LIST: (state,payload)=> {
        state.examList=payload
    },
    GET_QUESTIONS_LIST: (state, payload) => {
        state.getQuestionsList=payload
    }

}

const actions = {
    async subject({ commit }) {
        //获取所有的课程
        let src = await subject();
        if (src.code === 1) {
            commit("SUBJECT_LIST", src.data)
            console.log(src)
        }
        
        //获取所有的试题类型
        let questionsType = await getQuestionsType();
        if(questionsType.code===1){
            commit("QUESTIONS_LIST",questionsType.data)
        }
        console.log(questionsType)
        //获取所有的考试类型
        let examTypeList= await examType()
        if(examTypeList.code===1){
            commit("EXAM_LIST",examTypeList.data)
        }
        console.log(examTypeList)
      //获取所有的试题
      let getQuestionsLIST= await getQuestions();
      if(getQuestionsLIST.code===1){
            commit("GET_QUESTIONS_LIST",getQuestionsLIST.data)
      }

     
    },
    async condition({ commit },payload){

      let paramss={exam_id :payload.exam_id,questions_type_id :payload.questions_type_id};
      let src=await condition(paramss)
      if(src.code===1){
        commit("GET_QUESTIONS_LIST",src.data)
      }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}