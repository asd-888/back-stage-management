<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-20 10:37:09
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-23 16:42:19
 * @Description: 
 -->
<template>
  <div class='addTest'>
    <div class='title'>
      <h2>添加试题</h2>
    </div>
    <div class='main'>
      <div class='main_c'>
          <p>题目信息</p>
          <p>题干</p>
          
          <div>
             <el-input v-model='input' placeholder='请输入内容' style='width:30%'></el-input>
          </div>
         <!--MarkdownEditor -->
          <div class='theme'>
              <p>题目主题</p>
              <MarkdownEditor v-model="theme"/>
          </div> <!-- 这是下拉 -->
          <div class='pull_down'>
            <div>
              <p>请选择考试类型：</p>
               <el-select v-model="examValue" v-if="examList.length" :placeholder='examList[0].exam_name'>
                  <el-option
                    v-for="item in examList"
                    :key="item.exam_id"
                    :label="item.exam_name"
                    :value="item.exam_id">
                  </el-option>
              </el-select>
            </div>
            <div>
              <p>请选择课程类型：</p>
                <el-select v-model="subjectValue" v-if="subjectList.length" :placeholder="subjectList[0].subject_text">
                  <el-option
                    v-for="item in subjectList"
                    :key="item.subject_id"
                    :label="item.subject_text"
                    :value="item.subject_id">
                  </el-option>
              </el-select>
            </div>
            <div>
              <p>请选择题目类型：</p>
              <el-select v-model="questionsValue" v-if="questionsList.length" :placeholder="questionsList[0].questions_type_text">
                  <el-option
                    v-for="item in questionsList"
                    :key="item.questions_type_id"
                    :label="item.questions_type_text"
                    :value="item.questions_type_id">
                  </el-option>
              </el-select>
            </div>
          </div>
          <!-- MarkdownEditor -->
          <div class="answer">
            <h3>答案信息</h3>
              <MarkdownEditor v-model="answer"/>
          </div>
          <div class="btn">
            <el-button type="primary" style="width:150px" @click="add">提交</el-button>
          </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'addTest',
  props: {},
  components: {
    MarkdownEditor
    },
  data() {
    return {
        theme: '',//题干
        input: '',
        subjectValue: '',//课程id
        examValue: '',//考试类型id
        questionsValue: '',//题目id
        answer: '',//题目答案
    };
  },
  computed: {
    ...mapGetters(['examList', 'questionsList', 'subjectList', 'fortUser'])
  },
  methods: {
    ...mapActions({
       subject : 'examineTest/subject',
       getQuestionsType: "classifyTest/getQuestionsType",
       getUser: 'addQuestions/getUser',
       addTest: 'addQuestions/addTest'
    }),
    add(){
      let params= {
        questions_type_id : this.questionsValue,
        questions_stem : this.theme,
        subject_id : this.subjectValue,
        exam_id : this.examValue,
        user_id : this.fortUser.user_id,
        questions_answer : this.answer,
        title : this.input,
      }
      this.addTest(params)
    
    }
  },
  created() {
    this.subject()
    this.getQuestionsType()
    this.getUser()
  }
}
</script>
<style scoped lang="scss">
.addTest {
  width: 100%;
  height: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px;
}
.title {
  width: 100%;
  height: 100px;
  h2 {
    padding-left: 20px;
    font-weight: 500;
    line-height: 50px;
  }
}
.main {
  width: 100%;
  padding-left: 20px;
  background: #fff;
  border-radius: 10px;
}
.main_c{
  padding: 24px;
  background: rgb(255,255,255);
}
.theme{
  padding-top: 10px;
}
.pull_down{
  padding-top: 30px;
}
.answer{
  padding-top: 30px;
  h3{
    font-weight: 300;
  }
}
.btn{
  padding-top: 20px;
  background: #fff;
}
</style>