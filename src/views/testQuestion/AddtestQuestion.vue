<!--
 * @Author: your name
 * @Date: 2019-12-19 14:46:41
 * @LastEditTime : 2019-12-23 16:54:07
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
                <!-- markdown -->
                <div  class="markd">
                     <div class="components-container">  
                        <div class="editor-container">
                        <el-alert :closable="false" type="success"/>
                        <markdown-editor ref="markdownEditor" v-model="content4" :language="language" height="300px" />        
                     </div>                                           
                        </div>        
                </div>


                <div class="exam">   
                    <p title="请选择考试类型">请选择考试类型</p>
                    <el-select v-model="form.region1" placeholder="周考一">
                        <el-option 
                        :label='item1.exam_name' 
                        :value="item1.exam_id" v-for="(item1,index) in getAllData" 
                        :key="index"></el-option>
                    </el-select>
                </div> 


                <div class="hasclass">   
                    <p title="请选择课程类型">请选择课程类型</p>
                    <el-select v-model="form.region2" placeholder="javaScript上">
                        <el-option v-for="(item2,index) in getClass" :key="index" :label="item2.subject_text" :value="item2.subject_id"></el-option>
                    </el-select>
                </div>   
              <!-- <p>{{this.form.region2}}</p> -->
                
                <div class="classTyple">
                    <p title="请选择题目类型">请选择题目类型</p>
                    <el-select v-model="form.region3" placeholder="简答题">
                        <el-option v-for="(item3,index) in getQuestionsType" :key="index" :label="item3.questions_type_text" :value="item3.questions_type_id"></el-option>     
                    </el-select>
                </div>    
            
            </el-form>
                <p title="答案信息" class="tit">答案信息</p>
                <div  class="markd">
                    <!-- <MarkDown></MarkDown> -->
                      <div class="components-container">  
                        <div class="editor-container">
                        <el-alert :closable="false" type="success"/>
                        <markdown-editor ref="markdownEditor" v-model="content3" :language="language" height="300px" />        
                     </div>                                           
                        </div>     
                </div>
          </div>
             
            <!-- 弹框 -->
            <el-button type="text" @click="open" class="submit"> 提交</el-button>
           
      </div>
       
    </div>
</template>
<script>
import {Form} from 'element-ui';
// import {Add} from '@/api/AddTest'
import {mapState,mapActions,mutations} from 'vuex'
//引入markdown
import MarkDown from '../markdown/markdown'
//element
import ElementUI from 'element-ui'
import { param } from '../../utils';
import MarkdownEditor from '@/components/MarkdownEditor'

const content = `
**This is test**

* vue
* element
* webpack

`

export default {
    name: 'MarkdownDemo',
    name:'Add',
    props:{

    },  
    components:{
            MarkDown,
            MarkdownEditor
    },
    data(){
        return {
            value:'',
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
       tigan:'',
        content3: content,
       content4: content,
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
        }
    },
    computed:{
        ...mapState({
            AddTestData:state=>state.AddTest.AddTestData , //添加试题
            getAllData:state=>state.getAllTest.getAllData ,   //获取所有试题
            getClass:state=>state.getClass.getclass ,        //获取所有课程
            getQuestionsType:state=>state.getQuestionsType.getQuestionsType   ,       //获取所有试题类型
            getUserId:state=>state.getUserInfo.getUserId, //获取用户user_id
        }),
        a(){
            console.log(this.getUserId)
        },
        language() {
         return this.languageTypeList[this.$store.getters.language]
    },       
    },
    methods:{
        ...mapActions({
            AddTestgetData:'AddTest/AddTestgetData'  , //添加试题
            GetAllTest:'getAllTest/GetAllTest'   ,        //获取所有试题
            GetClass:'getClass/GetClass'        ,   //获取所有课程
            GetQuestionsType:'getQuestionsType/GetQuestionsType'        ,   //获取所有试题类型    
            GetUserInfo:'getUserInfo/GetUserInfo',      //获取用户id

        }),
         onSubmit() {
        console.log('submit!');
      },

     
    //点击提交弹框
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
            questions_type_id:'1',
            questions_stem:this.content4+'',
            subject_id:this.form.region2+'',
            exam_id:this.form.region1+'',
            user_id:this.getUserId+'',
            questions_answer:this.content3+'',
            title:this.form.name+''
        }
          this.AddTestgetData(paramData);//添加试题
   
            //  this.html = this.$refs.markdownEditor.getHtml()
            console.log(this.content4)
            console.log(this.content3)
      },
  
    },
    created(){
        this.GetAllTest()   //获取所有试题
        this.GetClass()      //获取所有课程
        this.GetQuestionsType()      //获取所有课程     
        this.GetUserInfo()     //获取用户id
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