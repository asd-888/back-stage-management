/*
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:22:16
 * @Description: 
 */
const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}
