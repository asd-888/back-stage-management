/*
 * @Author: your name
 * @Date: 2019-12-19 15:49:44
 * @LastEditTime : 2019-12-19 15:50:22
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\router\modules\testquestion.js
 */
import Layout from '@/layout'
const testQuestionRouter={
    path:'/testQuestion',
    component:Layout,
    name:"testquestion",
    meta:{
        title:"考题管理",
        icon:"edit"
    },
    children:[
        {
            path:"addTestQuestion",
            component:()=>import('@/views/testQuestion/AddtestQuestion'),
            name:"Add",
            meta:{title:'添加试题'}
        },
        {
            path:"TestQuestionClassify",
            component:()=>import('@/views/testQuestion/TestQuestionClassify'),
            // name:"添加试题",
            meta:{title:'试题分类'}
        },
        {
            path:"CheckTestQuestion",
            component:()=>import('@/views/testQuestion/CheckTestQuestion'),
            // name:"添加试题",
            meta:{title:'查看试题'}
        }
    ]
}

export default testQuestionRouter