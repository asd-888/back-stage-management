<template>
    <div class="addExam">
        <el-container>
            <el-header>创建试卷</el-header>
            <el-main>
                <div class="content">
                    <h1>{{addExamList.title}}</h1>
                    <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
                    <div class="box" v-if="addExamList">
                        <div v-for="(item,index) in addExamList.questions" :key="index" class="item">
                            <p><span>{{index+1}}:{{item.title}}</span><b @click="del(index)">删除</b></p>
                            <div>{{item.questions_stem}}</div>
                        </div>
                    </div>
                    <div class="submit">
                         <button @click="found">创建试卷</button>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    computed:{
        ...mapState({
            addExamList:state=>state.examination.addExamList,
        })
    },
    methods:{
        ...mapMutations({
            addExam:'examination/addExam',
            setList:'examination/setList',
           
        }),
        ...mapActions({
            updateExamList:'examination/updateExamList',
            examList:'examination/examList',
            deleteOne:'examination/deleteOne',
        }),
        del(index){
            this.setList(index)
            this.addExam()
        },
        found(){
            this.updateExamList();
            this.$router.push('/examination/examinationlist');
            this.examList()
        }
    },
    created(){
        this.addExam();
    }
}
</script>

<style scoped>
.addExam{
    width: 100%;
    min-width: 300px;
}
.el-header{
    color: #333;
    height: 70px;
    line-height: 70px;
    font-size: 20px;

}
.el-main {
    background: #fff;
    color: #333;
    min-height: 300px;
    display: flex;
    margin: 10px 20px;
    padding: 20px 25px;
}
.content{
    width: 100%;
    padding: 40px;
}
.content>h1,.content>p{
    text-align: center;
}
.content>h1{
    font-size: 22px;
}
.content>.box>div{
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    line-height: 40px;
}
.content>.box>div p{
    display: flex;
    justify-content: space-between;
}
.content>.box>div p b{
    cursor: pointer;
    color: #0139fd;
}
.submit{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
}
.submit button{
    padding: 10px 40px!important;
    border-radius: 4px!important;
    border: 0!important;
    font-size: 14px!important;
    color: #fff!important;
    cursor: pointer;
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
</style>