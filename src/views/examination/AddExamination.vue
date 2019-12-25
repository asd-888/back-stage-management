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
                  :value="item.exam_id"
                ></el-option>
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
                  :value="item.subject_id"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="ant-row">
            <div class="item-label">
              <label for="title">设置题量</label>
            </div>
            <div class="item-control">
              <el-input-number
                v-model="num"
                controls-position="right"
                @change="handleChange"
                :min="3"
                :max="10"
              ></el-input-number>
            </div>
          </div>
          <div class="ant-row">
            <div class="item-label">
              <label for="title">考试时间</label>
            </div>
            <div class="item-control">
              <p class="picker">
                <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
                <span>-</span>
                <el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </p>
            </div>
          </div>
          <div class="ant-row">
            <button @click="sumbit">
              <span>创建试卷</span>
            </button>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
function toTime(time){
    var dataee=new Date(time).toJSON();
    var date = new Date(+new Date(dataee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
    var dateTime = +new Date(date)
    return dateTime
}
export default {
  data() {
    return {
      input: "", //试卷名称
      value: "", //考试类型
      num: 1, //题量
      value1: "", //课程
      value2: "", //日期
      value3: "",

    };
  },
  computed: {
    ...mapState({
      coursesList: state => state.examination.coursesList,
      examTypeList: state => state.examination.examTypeList
    })
  },
  methods: {

    handleChange(value) {
      console.log(value);
    },
    sumbit() {
      this.$router.push("/examination/addexam")
     
      let obj = {
          title:this.input,
          exam_id:this.value,
          subject_id:this.value1,
          start_time:toTime(this.value2),
          end_time:toTime(this.value3),
          number:this.num,
      }
      localStorage.setItem('exam',JSON.stringify(obj))
      this.addExam(obj)
    },
    ...mapActions({
      courses: "examination/courses",
      examType: "examination/examType",
      addExam: "examination/addExam"
    })
  },
  created() {
    this.courses();
    this.examType();
  }
};
</script>

<style scoped>
.addExamination {
  width: 100%;
  min-height: 300px;
}
.el-header {
  height: 70px;
  color: rgba(0, 0, 0, 0.85);
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
.block {
  width: 42%;
}
.picker {
  display: flex;
}
.picker span {
  margin: 0 10px;
}
.ant-row button {
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
  padding: 10px 40px !important;
  border-radius: 4px !important;
  border: 0 !important;
  font-size: 14px !important;
  color: #fff !important;
  cursor: pointer;
}
.ant-row {
  text-align: left;
  min-height: 40px;
  margin-bottom: 20px;
}
.el-main label:before {
  content: "";
  display: table;
}
.item-label {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.item-control {
  height: 60px;
  line-height: 60px;
  text-align: left;
}
</style>