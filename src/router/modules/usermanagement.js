
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-24 14:52:55
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-27 15:48:31
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
            meta: {title: "添加用户", view_id: "main-addUser"}
        },
        {
            path: "userDisplay",
            component: ()=> import("@/views/userManagement/userDisplay"),
            name: "userDisplay",
            meta: {title: "用户展示", view_id: "main-showUser"}
        }
    ]
}

export default userManagement