<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:48:31
 * @Description: 
 -->
<template>
  <div style="display:inline-block;">
    <!-- $t is vue-i18n global function to translate lang -->
    <label class="radio-label" style="padding-left:0;">Filename: </label>
    <el-input v-model="filename" :placeholder="$t('excel.placeholder')" style="width:350px;" prefix-icon="el-icon-document" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    filename: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
