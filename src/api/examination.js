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