/*
 * @Author: your name
 * @Date: 2019-12-18 19:03:56
 * @LastEditTime : 2019-12-23 18:35:08
 * @LastEditors  : 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\main.js
 */
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization

//字体图标
import './icons' // icon

//路由守卫组件
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters



/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
