import { mapActions, mapState } from 'vuex';
<!--
 * @Author: your name
 * @Date: 2019-12-23 19:39:30
 * @LastEditTime : 2019-12-24 19:15:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\back-stage-management\src\views\testSon\condition.vue
 -->
<template>
       <div>
            <p class="queDeyail">试题详情</p>
       <div class="detail"  v-for="(item,index) in detailData" :key="index">   
            <div class="left">
               <div class="leftCont" >
                    <p>出题人:<span class="user">{{item.user_name}}</span></p>
                     <p>题目信息</p>
                     <div class="titleMsg" >
                        <p style="color: #1890ff; background: #e6f7ff; border-color: #91d5ff;    font-size: 12px; ">{{item.questions_type_text}}</p>
                        <p style="color: #2f54eb; background: #f0f5ff;border-color: #adc6ff;    font-size: 12px;">{{item.subject_text}}</p>  
                        <p style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;    font-size: 12px;">{{item.exam_name}}</p>
                     </div>
                     <p>{{item.title}}</p>
                     <p class="markdowm">{{item.questions_stem}}</p>
                     <!-- <P>{{}}</P> -->
               </div>
            </div>
            <div class="right">
                <div class="rightCont">
                    <p>答案信息</p>
                    <p>{{item.questions_answer}}</p>
                </div>
            </div>
       </div>

    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
          
        }
    },
    computed:{
        ...mapState({
            detailData:state=>state.Detail.detailData
        }),
      
    },
    methods:{
        ...mapActions({
            Detail:'Detail/Detail'
        })
    },
    created(){
        this.Detail({questions_id:this.$route.query.questions_id})
    },
    mounted(){
    // console.log(this.$route.query.questions_id)
    //   console.log(this.detailData)
    }
}
</script>
<style scoped lang="scss">
.queDeyail{
    margin: 20px 0 10px 20px;
    font-size: 22px;
   
}
.detail{
    width: 100%;
    height: 100%;
    display: flex;
}
.left{
    width: 50%;
    height: auto;
    background: #fff;
    margin: 20px 10px 10px 20px;
    border-radius: 5px;
    .leftCont{
        width: 80%;
        // border: 1px solid #ccc;
        margin: 20px 20px 20px 20px;
        .user{
            color: rgb(189, 184, 184);
            font-size: 14px;
        }
        .titleMsg{
            display: flex;
            p{
                width: auto;
                height: 30px;
                border: 1px solid #ccc;
                margin-left: 10px;
                text-align: center;
                line-height: 30px;
                padding: 0 5px;
            }
        }
        .markdown{
            line-height: 1.6;
            word-wrap: break-word;
        }
    }
}
.right{
    flex: 1;
    background: #fff;
    margin: 20px 10px 10px 20px;
    border-radius: 5px;
.rightCont{
     width: 90%;
     margin: 20px 20px 20px 20px;
}
}
</style>