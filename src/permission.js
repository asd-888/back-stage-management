/*
 * @Author: 席鹏昊
 * @Date: 2019-12-18 15:24:04
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-18 15:50:33
 * @Description: 
 */


//路由守卫
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

//路由守卫 to从哪来   from到哪去  next接着执行
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  //获取到title 属性
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in

  //获取cookies
  const hasToken = getToken()
  
  //判断cookies 拿没拿到 有走if  没有走else
  if (hasToken) {

    //判断来的页面是不是“/login 是走if 不是走else
    if (to.path === '/login') {
      // if is logged in, redirect to the home page

      //重定向到/页面
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo

     //这就是getInfo 返回的数据  里面如果有数据 就走if 不然酒走else
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        //接着往下走
        console.log(hasRoles,"hasRoles")
        next()
      } else {

        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']

          //获取到roles
          const { roles } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles

          //发送到vuex里面
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // dynamically add accessible routes
          //实现动态理由
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    //重定向的路径存不存在 如果whiteList里面有就走else 不然就走if
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly

      //接着  往下走
      next()
    } else {
      
      // other pages that do not have permission to access are redirected to the login page.

      //往下走重定向到你来的也面
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
