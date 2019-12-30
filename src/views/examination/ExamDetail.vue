<template>
    <div class="detail">
    
        <el-header>试卷详情</el-header>
        <el-main>
            <!-- <MarkdownEditor v-model="asd"/> -->
            <div class="left" v-if="examDetailList.questions">
                <div v-for="(item,index) in examDetailList.questions" :key="index">
                    <p>{{index+1}}{{item.title}}</p>
                    <!-- 只读模式 -->
                    <mavon-editor :subfield="false"  defaultOpen="preview" :editable="false" :toolbarsFlag="false" v-model="item.questions_stem"/>
                </div>
            </div>
            <div class="right">

            </div>
        </el-main>
        
    </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            asd :1
        }
    },
    components:{
        MarkdownEditor
    },
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
   
    margin: 20px 10px;
    line-height: 40px;
    padding: 20px;
}
</style>