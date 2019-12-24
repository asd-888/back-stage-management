
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-24 14:52:55
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-24 20:00:01
 * @Description: 
 */

import Layout from '@/layout'

const userManagement= {
    path: "/usermanagement",
    component: Layout,
    name: "userManagement",
    meta: {
        title: "用户管理",
        icon: "user"
    },
    children: [
        {
            path: "addUser", 
            component: ()=> import("@/views/userManagement/adduser"),
            name: "adduser",
            meta: {title: "添加用户"}
        },
        {
            path: "userDisplay",
            component: ()=> import("@/views/userManagement/userDisplay"),
            name: "userDisplay",
            meta: {title: "用户展示"}
        }
    ]
}

export default userManagement