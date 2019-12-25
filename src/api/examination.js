import request from '@/utils/request'

export function Allcourses(){
    return request ({
        url:'/exam/subject',
        method:'get'
    })
}

export function  examType(){
    return request ({
        url:'/exam/examType',
        method:'get'
    })
}
// 考试列表
export function  examList(){
    return request ({
        url:'/exam/exam',
        method:'get'
    })
}
// 教师端详情
export function  examDetail(){
    return request ({
        url:'/exam/exam/gh1ye3-0i6opd',
        method:'get'
    })
}
export function addExam(data){
    return request ({
        url:'/exam/exam',
        method:'post',
        data
    })
}