<template>
  <div>
    <h2>学生管理</h2>
    <div class="biaodan">
      <el-input v-model="duixiang.input1" placeholder="请输入学生姓名" style="width:200px" class="input1"></el-input>

      <el-select v-model="duixiang.sel1" placeholder="请选择教室号" style="margin-left:30px">
        <el-option
          v-for="(item,index) in jslist"
          :key="index"
          :label="item.room_text"
          :value="item.room_id"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="班级名" style="margin-left:30px">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-button type="primary" style="margin-left:30px">搜索</el-button>
    </div>
      <!-- 下面是表格 -->
      <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      
      duixiang:{
        input1: "",
        sel1:""
      },
     
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },

  methods:{
    ...mapActions({
      getjs: "jsgl/roomAll",
      getxs:"xsgl/student"
    }),
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  computed: {
    ...mapState({
      jslist: state => state.jsgl.jslist,
      xslist:state => state.xsgl.xslist
    })
  },
   mounted() {
    this.getjs();
    this.getxs();
  }

};
</script>

<style scoped>
h2 {
  margin-left: 25px;
  margin-top: 40px;
}
.biaodan{
  margin-top: 40px
}
.input1{
  margin-left: 30px;
}
</style>