<!--
 * @Author: your name
 * @Date: 2019-12-19 14:46:41
 * @LastEditTime : 2019-12-22 21:18:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calle:\实训\新建文件夹\back-stage-management\src\own\Own.vue
 -->
<template>
    <div class="Add">
       <h2>添加试题</h2>
      <div class="cont">
          <div>
            <el-form ref="form" :model="form" label-width="80px" class="form">
                <h3>题目信息</h3>
                  <p title="题干" class="label">题干</p>
                <div class="firstIpt">
                    <el-input v-model="form.name" class="firstIpt" placeholder=" 请输入题目标题,不超过20个字"></el-input>
                </div>
                <p title="题目主题" class="tit">题目主题</p>
                <!-- <el-input type="textarea" v-model="form.desc" class="text"></el-input> -->
                <div  class="markd">
                    <MarkDown></MarkDown>
                </div>


                <div class="exam">   
                    <p title="请选择考试类型">请选择考试类型</p>
                    <el-select v-model="form.region1" placeholder="周考一">
                        <el-option :label='item1.exam_name' :value="item1.exam_id" v-for="(item1,index) in getAllData" :key="index"></el-option>
                    </el-select>
                </div> 


                
                <div class="hasclass">   
                    <p title="请选择课程类型">请选择课程类型</p>
                    <el-select v-model="form.region2" placeholder="javaScript上">
                        <el-option v-for="(item2,index) in getClass" :key="index" :label="item2.subject_text" :value="item2.subject_id"></el-option>
                    </el-select>
                </div>   
           
                
                <div class="classTyple">   
                    <p title="请选择题目类型">请选择题目类型</p>
                    <el-select v-model="form.region3" placeholder="简答题">
                        <el-option v-for="(item3,index) in getQuestionsType" :key="index" :label="item3.questions_type_text" :value="item3.questions_type_id"></el-option>     
                    </el-select>
                </div>    
             
            </el-form>
                <p title="答案信息" class="tit">答案信息</p>
                <!-- <el-input type="textarea" v-model="form.desc" class="text"></el-input> -->
                <div  class="markd">
                    <MarkDown></MarkDown>
                </div>
          </div>
                <!-- <div @click="submit" >提交</div> -->
                <!-- 弹框 -->
                <el-button type="text" @click="open" class="submit"> 提交</el-button>
      </div>
       <!-- {{this.$store.getters.AddTestData}} -->
    </div>
</template>
<script>
import {Form} from 'element-ui';
// import {Add} from '@/api/AddTest'
import {mapState,mapActions} from 'vuex'
//引入markdown
import MarkDown from '../markdown/markdown'
//element
import ElementUI from 'element-ui'
import { param } from '../../utils';

export default {
    name:'Add',
    props:{

    },  
    components:{
            MarkDown
    },
    data(){
        return {
              form: {
                name: '',
                region1: '',
                   region2: '',
                      region3: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
        },
       tigan:''
        }
    },
    computed:{
        ...mapState({
            AddTestData:state=>state.AddTest.AddTestData , //添加试题
            getAllData:state=>state.getAllTest.getAllData ,   //获取所有试题
            getClass:state=>state.getClass.getclass ,        //获取所有课程
            getQuestionsType:state=>state.getQuestionsType.getQuestionsType          //获取所有试题类型
        })
    },
    methods:{
        ...mapActions({
            AddTestgetData:'AddTest/AddTestgetData'  , //添加试题
            GetAllTest:'getAllTest/GetAllTest'   ,        //获取所有试题
            GetClass:'getClass/GetClass'        ,   //获取所有课程
            GetQuestionsType:'getQuestionsType/GetQuestionsType'        ,   //获取所有试题类型          
        }),
         onSubmit() {
        console.log('submit!');
      },
      //提交
      submit(){
          alert(1)
      },
    //弹框
      open() {
        this.$confirm('你确定要添加这道试题吗?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });
        });
        // this.tigan=this.form.name+''
        //  console.log(this.form.name,'00000000000000')
          let paramData={
            questions_type_id:'12',
            questions_stem:this.form.name+'',
            subject_id:'2',
            exam_id:"4",
            user_id:'5',
            questions_answer:'6',
            title:'7'
        }
          this.AddTestgetData(paramData)//添加试题
          console.log(this.getclass,'11111111111')
      },
      
    
      
    },
    created(){
        this.GetAllTest()   //获取所有试题
        this.GetClass()      //获取所有课程
        this.GetQuestionsType()      //获取所有课程     
    },
    mounted(){
        console.log(this)
    }
}
</script>
<style scoped lang="scss">
.Add{
    width: 90%;
    height: 100%;
    background: #eee;
    min-height: 300px;
    margin:0 5%; 
    h2{
        // font-size: 15px;
        font-weight: normal;
        padding: 20px 0px 20px 20px;
    }
}
.cont{
    width: 90%;
    background: #fff;
     margin:20px 5%; 
     border-radius: 13px;
     .form{
        el-option::el-option-placeholder{
            color: black;
        }
     }
     h3{
        font-weight: normal;
        padding: 20px 0px 0px 20px;
     }
     .label{
        font-size: normal;
        padding: 0px 0px 0px 20px;
     }
     .firstIpt{
             margin-bottom: 20px;
             margin-left: 10px;
             width: 70%;
     }
     .tit{
          margin-left: 20px;
     }
     .text{
        margin-left: 20px;
         width: 65%;
         margin-bottom: 10px;
         height: 50px;
     }
     .exam{
          margin-left: 20px;
     }
     .hasclass{
          margin-left: 20px;
     }
     .classTyple{
          margin-left: 20px;
          margin-bottom: 10px; 
        
     }
        el-option::-webkit-input-placeholder{
         color: black;
     }
     .submit{
         margin-top: 20px;
         width: 130px;
         height: 40px;
         background: #4e75ff;
         color: #fff;
         border-radius: 10px;
         text-align: center;
         margin-left: 20px;

     }
    .markd{
        margin-left: 20px;
        margin-bottom: 20px;

    }
}
</style>