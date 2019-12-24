<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:46:04
 * @Description: 
 -->
<template>
  <article-detail :is-edit="false" />
</template>

<script>
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'CreateArticle',
  components: { ArticleDetail }
}
</script>

