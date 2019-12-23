<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:50:15
 * @Description: 
 -->
<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
