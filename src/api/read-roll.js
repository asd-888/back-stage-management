/*
 * @Author: 席鹏昊
 * @Date: 2019-12-19 15:45:43
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-19 15:51:00
 * @Description: 
 */

//阅卷管理

import request from '@/utils/request'

//获取学生试卷列表接口
export function student(score) {
    return request({
        url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m",
        method: "put",
        params: {score}
    })
}

//获取学生试卷详情接口
export function student() {
    return request({
        url: "/exam/student/t27znv-gu7azm-qpq9ai-laaf9m",
        method: "get"
    })
}

//获取学生试卷列表接口

export function student(exam_exam_id, student_id, grade_id, status, start_time, end_time, page, pageSize) {
    return request({
        url: "/exam/student",
        method: "get",
        params: {exam_exam_id, student_id, grade_id, status, start_time, end_time, page, pageSize}
    })
}
