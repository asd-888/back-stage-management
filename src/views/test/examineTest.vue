<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-20 10:37:58
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-24 17:04:45
 * @Description: 
 -->
<template>
  <div class="examineTest">
    <h2>试卷查看</h2>
    <!-- 这是考试类型 题目类型 下拉菜单 -->
    <div class="type">
      <div class="title">
        <h5>课程类型</h5>
        <div>
          <p v-for="(item,index) in subjectList" :key="index" style="list-style: none;
    display: inline-block;
    line-height: 20px;
    height: 22px;
    padding: 0 7px;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    background: #fafafa;
    font-size: 12px;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 1;
    margin-right: 8px;
    cursor: pointer;
  
    ">{{item.subject_text}}</p>
        </div>
      </div>
      <div>
        <div class="exam">
          <p>考试类型：</p>
          <el-select v-model="examValue" placeholder="请选择">
            <el-option
              v-for="item in examList"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
        </div>
        <div class="topic">
          <p>题目类型：</p>
          <el-select v-model="questionsValue" placeholder="请选择">
            <el-option
              v-for="item in questionsList"
              :key="item.questions_type_id"
              :label="item.questions_type_text"
              :value="item.questions_type_id"
            ></el-option>
          </el-select>
        </div>
        <div class="btn" >
          <el-button type="primary" icon="el-icon-search" @click="add">搜索</el-button>
        </div>
      </div>
    </div>
    <!-- 这是试题列表 -->
    <div class="con">
      <div class="list" v-for="(item,index) in getQuestionsList" :key="index" @mouseenter="mouseenter(index)" @click="jump(item.questions_id)" >
        <div class="list-l">
          <div style="font-size:14px;color: rgba(0, 0, 0, 0.65);">{{item.title}}</div>
          <div class="l-btn">
            <p style="color: #1890ff; background: #e6f7ff; border-color: #91d5ff;    font-size: 12px; ">{{item.questions_type_text}}</p>
            <p style="color: #2f54eb; background: #f0f5ff;border-color: #adc6ff;    font-size: 12px;">{{item.subject_text}}</p>  
            <p style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;    font-size: 12px;">{{item.exam_name}}</p>
          </div>
          <!-- <a style="color: #0139FD;">{{item.user_name}}发布</a> -->
        </div>
        <div class="list-r">编辑</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Select } from 'element-ui';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'examineTest',
  props: {},
  components: {},
  data() {
    return {
      questionsValue: '',
      examValue: ''
    };
  },
  computed: {
    ...mapGetters([
      'subjectList',
      'questionsList',
      'examList',
      'getQuestionsList'
    ])
  },
  methods: {
    ...mapActions({
      subject : 'examineTest/subject',
      condition : 'examineTest/condition'
    }),
    //按条件渲染页面
    add() {
      this.condition({exam_id : this.examValue,questions_type_id : this.questionsValue})
    },
    //
    mouseenter(i){
      let list=Array.from(document.querySelectorAll('.list'))
      list.map(item => item.classList.remove('active'))
      list[i].classList.add('active')
    },
      //跳转
  jump(questions_id){
    console.log(questions_id)

    this.$router.push({path:'/examinetest/condition',query:{questions_id:questions_id}})
  }
  },
  created() {
    this.subject();
  },

};
</script>
<style scoped lang="scss">
.examineTest {
  max-width: 100%;
  min-height: 100%;
  padding: 0px 24px 24px;
  overflow: auto;
  h2 {
    padding: 0 20px;
  }
}
.type {
  width: 100%;
  height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  .title {
    width: 100%;
    flex: 1;
    display: flex;
    padding-left: 30px;
    align-items: center;
    justify-content: center;
    h5 {
      padding-right: 10px;
      font-weight: 300;
      font-size: 18px;
    }
    div {
      padding: 10px 0;
      flex: 1;
      height: 30px;
      display: flex;
      p {
        padding: 0 10px;
      }
    }
  }
  div:last-child {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }
}
.exam,
.topic {
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  
}
.btn {
  padding-left: 20px;
  width: 60px;
}
.con {
  margin-top: 20px;
  background: #fff;
  border-radius: 10px;
}
.list {
  width: 98%;
  height: 114px;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
}
.list-l {
  width: 80%;
  height: 100%;
  padding-left: 10px;
}
.l-btn {
  display: flex;
  p:first-child {
    margin-left: 0;
  }
  p {
    width: auto;
    height: 30px;
    border: 1px solid #ccc;
    margin-left: 10px;
    text-align: center;
    line-height: 30px;
    padding: 0 5px;
  }
}
.list-r {
  flex: 1;
  display: flex;
  align-items: center;
}
.active{
  background:rgba(128, 177, 233, 0.15)
  // background: ;
  //  filter:alpha(opacity:20);
  //   opacity:0.2; 
}
</style>