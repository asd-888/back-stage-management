import { mapActions, mapState } from 'vuex';
<!--
 * @Author: your name
 * @Date: 2019-12-23 19:39:30
 * @LastEditTime : 2019-12-25 16:07:58
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
                    <p class="createQuestion">出题人:<span class="user">{{item.user_name}}</span></p>
                     <p class="tit">题目信息</p>
                     <div class="titleMsg" >
                        <p style="color: #1890ff; background: #e6f7ff; border-color: #91d5ff;    font-size: 12px; ">{{item.questions_type_text}}</p>
                        <p style="color: #2f54eb; background: #f0f5ff;border-color: #adc6ff;    font-size: 12px;">{{item.subject_text}}</p>  
                        <p style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;    font-size: 12px;">{{item.exam_name}}</p>
                     </div>
                     <p class="title">{{item.title}}</p>
                     <!-- <p class="markdowm">
                         {{item.questions_stem}}</p> -->
                         <MarkdownEditor v-model="questItem"/>
                     
               </div>
            </div>
            <div class="right">
                <div class="rightCont">
                    <p class="answer">答案信息</p>
                    <!-- <p>{{item.questions_answer}}</p> -->
                     <MarkdownEditor v-model="answer"/>
                </div>
            </div>
       </div>

    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
    props:{

    },
    components:{
        MarkdownEditor
    },
    data(){
        return {
            questItem:'',
            answer:''
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
        let res=this.$store.state.Detail
        this.Detail({questions_id:this.$route.query.questions_id})
        this.questItem = res.detailData[0].questions_stem
        this.answer=res.detailData[0].questions_answer
        // console.log(res.detailData[0].questions_stem,'22222222222')
        // 

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
    border-radius: 10px;
    .leftCont{
        width: 80%;
        // border: 1px solid #ccc;
        margin: 20px 20px 20px 20px;
        .user{
            color: rgb(189, 184, 184);
            font-size: 14px;
            margin-top: 25px;
            margin-bottom: 25px;

        }
        .tit{
            margin-top: 10px;
            font-size: 17px;
            margin-bottom: 15px;
            margin-top: 25px;

        }
        .createQuestion{
            font-size: 15px;
        }
        .titleMsg{
            display: flex;
            margin-bottom: 20px;
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
    .title{
         margin-bottom: 15px;
    }
}
.right{
    flex: 1;
    background: #fff;
    margin: 20px 10px 10px 20px;
    border-radius: 10px;
.rightCont{
     width: 90%;
     margin: 20px 20px 20px 20px;
}
.answer{
    margin-bottom: 15px;
}
}
</style>