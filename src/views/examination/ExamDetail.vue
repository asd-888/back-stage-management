<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-26 20:40:38
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-26 20:44:32
 * @Description: 
 -->
<template>
    <div class="detail">
    
        <el-header>试卷详情</el-header>
        <el-main>
            <div class="left" v-if="examDetailList.questions">
                <div v-for="(item,index) in examDetailList.questions" :key="index">
                    <p>{{index+1}}{{item.title}}</p>
                    <p>{{item.questions_stem}}</p>
                </div>
            </div>
            <div class="right">

            </div>
        </el-main>
        
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions({
             examDetail:'examination/examDetail'
        })
    },
    computed:{
        ...mapState({
            examDetailList:state=>state.examination.examDetailList
        })
    },
    created(){
        this.examDetail(this.$route.query.id)
    }      
}
</script>

<style scoped>
.el-header{
    color: #333;
    height: 70px;
    line-height: 70px;

}
.el-main {
    color: #333;
    min-height: 300px;
    display: flex;
}
.left{
    width: 58%;
    margin-right: 2%;
    background: #fff;
}
.right{
    width: 40%;
    background: #fff;
}
.left>div{
    border: 1px solid #000;
    margin: 20px 10px;
    line-height: 40px;
    padding: 20px;
}
</style>