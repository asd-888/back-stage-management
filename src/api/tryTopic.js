

/*
 * @Author: 席鹏昊
 * @Date: 2019-12-20 14:02:29
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-24 17:15:50
 * @Description: 
 */

//试题管理

import request from '@/utils/request';

//获取所有的试题类型
export function getQuestionsType(){
    return request({
        url: "/exam/getQuestionsType",
        method: "get"
    })
}

//添加试题类型
export function insertQuestionsType(text,sort){
    return request({
        url: "/exam/insertQuestionsType",
        method: "get",
        params: {text,sort}
    })  
}

//获取所有的课程
export function subject() {
    return request({
        url: "/exam/subject",
        method: "get"
    })
}

//添加试题接口
export function addQuestions(questions_type_id, questions_stem, subject_id, exam_id, user_id, questions_answer, title ) {
    return request({
        url: "/exam/subject",
        method: "get",
        params: {questions_type_id, questions_stem, subject_id, exam_id, user_id, questions_answer, title}
    })
}

//获取所有的试题
export function getQuestions() {
    return request({
        url: "/exam/questions/new",
        method: "get"
    })
}


//更新试题
export function updateQuestions(questions_id, title, questions_stem, questions_answer, subject_id, questions_type_id, exam_id) {
    return request({
        url: "/exam/questions/update",
        method: "put",
        params:{questions_id, title, questions_stem, questions_answer, subject_id, questions_type_id, exam_id}
    })
}

//获取所有的考试类型
export function examType() {
    return request({
        url: "/exam/examType",
        method: "get"
    })
}

//按条件获取试题
export function condition(params){
    console.log(params,"params")
    return request({
        url : "/exam/questions/condition",
        method : "get",
        params
    })
}

//获取当前用户
export function userInfo(){
    return request({
        url: "/user/userInfo",
        method: "get"
    })
}

//添加试题接口
export function questions(data) {
    return request({
        url: "/exam/questions",
        method: "post",
        data
    })
}