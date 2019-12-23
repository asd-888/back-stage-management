/*
 * @Author: 席鹏昊
 * @Date: 2019-12-18 15:27:30
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-23 15:11:18
 * @Description: 
 */

const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  classifyList: state => state.classifyTest.list,  //这是试题分类
  subjectList: state => state.examineTest.list, //这是所有的课程
  questionsList:  state => state.examineTest.questionsList,//这是所有试题类型
  examList: state => state.examineTest.examList,//这是所有考试类型
  getQuestionsList: state => state.examineTest.getQuestionsList,//获取所有的试题
  fortUser: state => state.addQuestions.user, //获取当前用户的信息
}
export default getters
