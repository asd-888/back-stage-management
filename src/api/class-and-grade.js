
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-19 14:56:32
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-19 15:00:22
 * @Description: 
 */

//班级接口

import request from '@/utils/request'

//获取没有分配教室的班级
export function grade() {
    return request({
        url: '/manger/grade/new',
        method: 'get'
    })
}

//删除班级接口
export function gradeDelete(id) {
    return request({
        url: "/manger/grade/delete",
        method: "delete",
        params: { grade_id: id }
    })
}

//更新班级接口
export function gradeUpdate(grade_id, grade_name, subject_id, room_id) {
    return request({
        url: "/manger/grade/update",
        method: "put",
        params: { grade_id, grade_name, subject_id, room_id }
    })
}

//添加班级接口
export function gradeAdd(grade_name, room_id, subject_id) {
    return request({
        url: "//manger/grade",
        method: "post",
        params: { grade_name, room_id, subject_id }
    })
}

//删除教室接口
export function roomDelete(room_id) {
    return request({
        url: "/manger/room/delete",
        method: "delete",
        params: { room_id }
    })
}

//更新教室
export function roomUpdate(room_id, room_text) {
    return request({
        url: "/manger/room/update",
        method: "put",
        params: { room_id, room_text }
    })
}

//添加教室
export function roomAdd(room_text) {
    return request({
        url: "/manger/room",
        method: "post",
        params: { room_text }
    })
}

//获取全部教室
export function roomAll() {
    return request({
        url: "/manger/room",
        method: "get"
    })
}


//获取已经分配教室的班级
export function grades() {
    return request({
        url: "/manger/grade",
        method: "get"
    })
}

//删除学生
export function studentDelete(id) {
    return request({
        url: "/manger/student/:id=>student_id",
        method: "delete",
        params: { id }
    })
}

//获取所有没有分班的学生接口
export function studentNew() {
    return request({
        url: "/manger/student/:id=>student_id",
        method: "get",
    })
}

//获取所有的已经分班的学生接口
export function student() {
    return request({
        url: "/manger/student",
        method: "get"
    })
}

//更新学生信息接口
export function studentEdit(student_id, student_name, student_pwd, grade_id) {
    return request({
        url: "/manger/student/edit",
        method: "put",
        params: {student_id, student_name, student_pwd, grade_id}
    })
}

//添加学生接口

export function studelAll(student_id, student_name, student_pwd, grade_id) {
    return request({
        url: "/manger/student",
        method: "post",
        params: {student_id, student_name, student_pwd, grade_id}
    })
}