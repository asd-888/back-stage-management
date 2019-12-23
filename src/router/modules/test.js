/*
 * @Author: 席鹏昊
 * @Date: 2019-12-20 08:54:45
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-20 08:57:03
 * @Description: 
 */

 //试题管理
 import Layout from '@/layout'

 const tableRouter = {
    path: '/test',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Layout',
    meta: {
      title: '试题管理',
      icon: 'skill'
    },
    children: [
      {
        path: 'addtest',
        component: () => import('@/views/test/addTest'),
        name: 'addTest',
        meta: { title: '添加试题' }
      },
      {
        path: 'classifytest',
        component: () => import('@/views/test/classifyTest'),
        name: 'classifyTest',
        meta: { title: '试题分类' }
      },
      {
        path: 'examinetest',
        component: () => import('@/views/test/examineTest'),
        name: 'examineTest',
        meta: { title: '查看试题' }
      },
      
    ]
  }
  export default tableRouter