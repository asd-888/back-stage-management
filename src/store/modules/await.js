// import Cookies from 'js-cookie'
import { correctPaper, paperDetail, gradeList, studentPaperList } from '@/api/readPaper'

const state = {
  exam: [],
  classList: [], // 待批班级列表
  classListNum: 0,
  studentPaperList: null, // 学生试卷列表
  paperListNum: 0
}

const mutations = {
  setExam(state, payload) {
    // console.log(state,"state...")
    // console.log(payload,"payload...")
    state.exam = payload
  },
  // 待批班级列表
  setClassList(state, payload) {
    state.classList = payload
    state.classListNum = payload.length
  },
  // 学生试卷列表
  setStudentPaperList(state, payload) {
    const grade_name = localStorage.getItem('grade_name')
    state.paperListNum = payload.length
    state.studentPaperList = payload.map(item => {
      if (item.status == 0) {
        item.status = '未阅'
      } else {
        item.status = '已阅'
      }
      item.grade_name = grade_name
      return item
    })
    console.log(state.studentPaperList, 'studentPaperList........')
  }
}

const actions = {
  // async correctPaper ({commit},payload){
  //     let res = await paperList();
  //     commit('setExam',res.exam)
  // },
  async gradeList({ commit }, payload) {
    const res = await gradeList()
    commit('setClassList', res.data)
  },
  async studentPaperList({ commit }, payload) {
    // console.log(payload,"123456")
    // let params = {grade_id:payload}
    // console.log(params,"params55555")
    const res = await studentPaperList(payload)
    commit('setStudentPaperList', res.exam)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
