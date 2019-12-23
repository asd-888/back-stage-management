<template>
    <div class="addExamination">
        <el-container>
            <el-header style="height:70px;">添加考试</el-header>
            <el-main>
                <div class="block">
                    <div class="ant-row">
                        <div class="item-label">
                            <label for="title">试卷名称</label>
                        </div>
                        <div class="item-control">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                        </div>
                    </div>    
                    <div class="ant-row">
                        <div class="item-label">
                            <label for="title">选择考试类型</label>
                        </div>
                        <div class="item-control">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in examTypeList"
                                :key="item.value"
                                :label="item.exam_name"
                                :value="item.exam_id">
                                </el-option>
                            </el-select>
                        </div>
                    </div>    
                    <div class="ant-row">
                        <div class="item-label">
                            <label for="title">选择课程</label>
                        </div>
                        <div class="item-control">
                             <el-select v-model="value1" placeholder="请选择">
                                <el-option
                                v-for="item in coursesList"
                                :key="item.value"
                                :label="item.subject_text"
                                :value="item.subject_text">
                                </el-option>
                            </el-select>
                        </div>
                    </div>    
                    <div class="ant-row">
                        <div class="item-label">
                            <label for="title">设置题量</label>
                        </div>
                        <div class="item-control">
                            <el-input-number 
                            v-model="num" controls-position="right" 
                            @change="handleChange" :min="1" :max="10"
                            >
                            </el-input-number>
                        </div>
                    </div>    
                    <div class="ant-row">
                        <div class="item-label">
                            <label for="title">考试时间</label>
                        </div>
                        <div class="item-control">
                            <el-date-picker
                                v-model="value2"
                                type="datetimerange"
                                align="right"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :default-time="['12:00:00', '08:00:00']">
                            </el-date-picker>
                        </div>
                    </div> 
                    <div class="ant-row">
                        <button>
                            <span>创建试卷</span>
                        </button>
                    </div> 
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
            input: '',
            value:'',
            num: 1,
            value1: '',
            value2: ''
        }
    },
    computed:{
        ...mapState({
            coursesList:state=>state.examination.coursesList,
            examTypeList:state=>state.examination.examTypeList,
        })
    },
    methods:{
        handleChange(value) {
            console.log(value);
        },
        ...mapActions({
            courses:'examination/courses',
            examType:'examination/examType'
        })
    },
    created(){
        this.courses()
        this.examType()
    }
}
</script>

<style scoped>
.addExamination{
    width: 100%;
    min-height: 300px;
}
.el-header{
    height: 70px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    line-height: 70px;
    font-size: 20px;
    margin: 10px 0;
}
.el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    margin: 0 20px;
}
.block{
    width: 42%;

}
.ant-row button{
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    padding:10px 40px!important;
    border-radius: 4px!important;
    border: 0!important;
    font-size: 14px!important;
    color: #fff!important;
    cursor: pointer;
}
.ant-row{
    text-align: left;
    min-height: 40px;
    margin-bottom: 20px;
}
.el-main label:before {
    content: '';
    display: table;
}
.item-label{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
}
.item-control{
    height: 60px;
    line-height: 60px;
    text-align: left;
}
</style>