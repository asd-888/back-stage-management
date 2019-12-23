<!--
 * @Author: your name
 * @Date: 2019-12-21 08:01:09
 * @LastEditTime : 2019-12-23 13:44:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\views\markdown\markdown.vue
 -->
<template>
    <div class="markdown">
        <mavon-editor 
            v-model="content" 
            ref="md" 
            @change="change" 
            style="min-height: 600px"
        />

        <!-- <button @click="submit">提交</button> -->
    </div>
</template>
<script>
// 导入组件 及 组件样式
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    name: "",
        props: [],
        components: {
            mavonEditor,
        },
        data() {
            return {
                content:'',
                html:'',
                configs: {}
            }
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                let formdata = new FormData();

                this.$upload.post('/上传接口地址', formdata).then(res => {
                    console.log(res.data);
                    this.$refs.md.$img2Url(pos, res.data);
                }).catch(err => {
                    console.log(err)
                })
            },
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                this.html = render;
                console.log(this.html)
            },
            // 提交
            // submit(){
            //     console.log(this.content);
            //       console.log(this.html);
            //     this.$message.success('提交成功，已打印至控制台！');
            // }
        },
        mounted() {

        }
}
</script>
<style scoped lang="scss">
.markdown{
    width: 60%;
    // height: 60px;
}
</style>