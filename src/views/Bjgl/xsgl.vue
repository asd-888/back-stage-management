<template>
  <div>
    <h2>学生管理</h2>
    <div class="biaodan">
      <el-input v-model="duixiang.input1" placeholder="请输入学生姓名" style="width:200px" class="input1"></el-input>

      <el-select v-model="duixiang.sel1" placeholder="请选择教室号" style="margin-left:30px">
        <el-option
          v-for="(item,index) in jiaoshi"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
      <el-select  placeholder="班级名" style="margin-left:30px" v-model="duixiang.sel2">
        <el-option
          v-for="(item,index) in arr"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>

      <el-button type="primary" style="margin-left:30px" @click="searchfn">搜索</el-button>
      <el-button type="primary" style="margin-left:30px" @click="chongzhi">重置</el-button>
    </div>
    <!-- 下面是表格 -->
    <el-table :data="xslist.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" class="table1">
        <!-- 做分页时候表格的数据需要通过总数据来截取，这样一页就可以显示多少条了 -->
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          
          <span style="margin-left: 0px">{{ scope.row.student_name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="学号" width="180">
        <template slot-scope="scope">
          
          <span style="margin-left: 0px">{{ scope.row.student_id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="班级" width="180">
        <template slot-scope="scope">
          
          <span style="margin-left: 0px">{{ scope.row.grade_name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="教室" width="180">
        <template slot-scope="scope">
         
          <span style="margin-left: 0px">{{ scope.row.room_text}}</span>
        </template>
      </el-table-column>

      <el-table-column label="密码" width="180">
        <template slot-scope="scope">
        
          <span style="margin-left: 0px">{{ scope.row.student_pwd}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      
      
    </el-table>
    <!-- 分页器 -->
       <div class="block">
       
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50,100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="xslist.length">
        </el-pagination>
      </div> 
      
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from "vuex";
export default {
  data() {
    return {
      duixiang: {
        input1: "",
        sel1: "",
        sel2: ""
      },

        currentPage: 1,//第几页，默认第一页
        pageSize: 20 //一页多少条
    };
  },

  methods: {
    ...mapActions({
      getjs: "jsgl/roomAll",
      getxs: "xsgl/student",
      studentDelete:"xsgl/studentDelete"
    }),
    ...mapMutations({
        mohu:"xsgl/mohu"
    }),
    handleEdit(index, row) {
      console.log(index, row);
    

    },
   async handleDelete(index, row) {
      console.log(index, row);
      await this.studentDelete(row.student_id)
           this.getxs()
        
       
    },
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
          this.pageSize=val
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
           this.currentPage=val 
      },
      searchfn(){
         console.log(this.duixiang.input1,this.duixiang.sel1,this.duixiang.sel2)
         this.mohu({ipt1:this.duixiang.input1,sel1:this.duixiang.sel1,sel2:this.duixiang.sel2})
      },
      chongzhi(){
        this.duixiang.input1=""
        this.duixiang.sel1=""
        this.duixiang.sel2=""
         this.getxs()
      }

  },
  computed: {
    ...mapState({
      jslist: state => state.jsgl.jslist,
      xslist: state => state.xsgl.xslist,
      arr: state => state.xsgl.arr,
      jiaoshi:state => state.xsgl.jiaoshi,
    })
  },
  mounted() {
    this.getjs()
    this.getxs()
  }
};
</script>

<style scoped>
h2 {
  margin-left: 25px;
  margin-top: 40px;
}
.biaodan {
  margin-top: 40px;
}
.input1 {
  margin-left: 30px;
}
.table1 {
  margin-top: 40px;
}
.block{
  width: 50%;
  height: 40px;
  float:right;
}
.el-pagination{
  height: 40px;
  line-height:40px;
}

</style>