<!--
 * @Author: your name
 * @Date: 2019-12-23 07:50:27
 * @LastEditTime : 2019-12-23 16:10:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\views\markdown\markdown.vue
 -->
<template>
  <div class="components-container">
    
    <div class="editor-container">
      <el-alert
        :closable="false"
       
        type="success"
      />
      <markdown-editor ref="markdownEditor" v-model="content4" :language="language" height="300px" />
    </div>

    <!-- <el-button style="margin-top:80px;" type="primary" icon="el-icon-document" @click="getHtml">
      Get HTML
    </el-button>
    <div v-html="html" /> -->
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'

const content = `
**This is test**

* vue
* element
* webpack

`
export default {
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList[this.$store.getters.language]
    },
   
    
  },
  methods: {
    // getHtml() {
    //   this.html = this.$refs.markdownEditor.getHtml()
    // //   console.log(this.html)
    //   console.log(this.content4)
    // }
  }
}
</script>

<style scoped>
/* .editor-container{
  margin-bottom: 30px;
}
.tag-title{
  margin-bottom: 5px;
} */
</style>
