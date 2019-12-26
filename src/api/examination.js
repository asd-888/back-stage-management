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
export function  examDetail(id){
    return request ({
        url:`/exam/exam/${id}`,
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
// 更新列表
export function updateExamList(data){
    return request ({
        url:'/exam/exam/8nyeq-a1x5cc',
        method:'put',
        data
    })
}
// 删除
export function deleteOne(data){
    return request ({
        url:'/exam/exam/w5tcy-g2dts',
        method:'delete',
        params:{data}
    })
}