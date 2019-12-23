<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:27:17
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}

.app-main{
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
</style>
