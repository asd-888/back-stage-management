import request from '@/utils/request'

export function correctPaper(score) {
  return request({
    url: '/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',
    method: 'put',
    params: { score }
  })
}

export function paperDetail() {
  return request({
    url: '/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',
    method: 'get'
  })
}

export function gradeList() {
  return request({
    url: '/manger/grade',
    method: 'get'
  })
}

export function studentPaperList(query) {
  return request({
    url: '/exam/student',
    method: 'get',
    params:query
  })
}
