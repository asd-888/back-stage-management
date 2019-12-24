/*
 * @Author: 席鹏昊
 * @Date: 2019-12-19 16:45:50
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-19 16:56:40
 * @Description: 
 */

 //试卷管理

import request from '@/utils/request'

//创建试卷接口
export function exam(subject_id, exam_id, title, number, start_time, end_time) {
    return request({
        url: "/exam/exam",
        method:"post",
        params: {subject_id, exam_id, title, number, start_time, end_time}
    })
}

//更新试卷
export function examUpdate(question_ids) {
    return request({
        url: "/exam/exam/w5tcy-g2dts",
        method: "put",
        params: {question_ids}
    })
}

//获取试卷列表接口
export function examGet(exam_exam_id, subject_id, title, number, start_time, end_time, page, pageSize) {
    return request({
        url: "/exam/exam",
        method: "get",
        params: {exam_exam_id, subject_id, title, number, start_time, end_time, page, pageSize}
    })
}

//获取试卷详情
export function examDetails() {
    return request({
        url: "/exam/exam/w5tcy-g2dts",
        method: "get"
    })
}

//删除试卷接口
export function examDelete() {
    return request({
        url: "/exam/exam/w5tcy-g2dts",
        method: "delete"
    })
}