<template>
  <div class="wrap">
    <h2>班级管理</h2>
    <div class="addClass">
      <el-button type="primary" class="btn"  @click="dialogFormVisible = true">添加班级</el-button>
    </div>
    <el-table :data="bjlist" style="width: 90%" class="biaoge">


      <el-table-column label="班级名" width="180">
        <template slot-scope="scope">
        
          <span style="margin-left: 0px">{{ scope.row.grade_name }}</span>
          <!-- 从vuex里直接把数组拿过来，scope.row就看成是item就可以 -->
        </template>
      </el-table-column>


       <el-table-column label="课程名" width="280">
        <template slot-scope="scope">
        
          <span style="margin-left: 0px">{{ scope.row.subject_text }}</span>
        </template>
      </el-table-column>


        <el-table-column label="教室号" width="180">
        <template slot-scope="scope">
       
          <span style="margin-left: 0px">{{ scope.row.room_text }}</span>
        </template>
      </el-table-column>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span @click="handleEdit(scope.$index, scope.row)" style=color:blue>修改</span>
           <span>|</span>
          <span @click="handleDelete(scope.$index, scope.row)" class="spanone">删除</span>
        </template>
      </el-table-column>
    </el-table>

   <!-- 这里以下是弹框 -->
        <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

<el-dialog title="添加班级" :visible.sync="dialogFormVisible">
  <el-form :model="form" label-position="top">
    <el-form-item label="班级名"  > 
      <el-input v-model="form.name" autocomplete="off"  :disabled="true" :style='{width:formLabelWidth}'></el-input>
    </el-form-item>
    <el-form-item label="教室号"   > 
      <el-select :value="aaa" placeholder="请选择活动区域" :style='{width:formLabelWidth}'>
      
        <el-option :label="item.room_text" v-for="(item,index) in bjlist" :key="index"></el-option>
         
       
      </el-select>
    </el-form-item>
     <el-form-item label="课程名"  >
      <el-select :value="form.region1" placeholder="请选择活动区域" :style='{width:formLabelWidth}'>
      <el-option :label="item.subject_text" v-for="(item,index) in bjlist" :key="index"></el-option>
       
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleOk">确 定</el-button>
  </div>
</el-dialog>

  
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex"
     export default {
    data() {
      return {
         dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          region1: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          grade_id: ''
        },
        formLabelWidth: "90%",
        
      }
    },
    computed: {
       ...mapState({
          bjlist: state=>state.bjgl.bjlist
       })
    },
    methods: {
      // 确定 
      handleOk() {
        this.gradeUpdate({
          grade_id: this.grade_id,
          grade_name: this.form.region, 
        })
        // this.gradeUpdate('123')
 
      },
      handleEdit(index, row) {
        this.dialogFormVisible = true
        this.grade_id = row.grade_id
        console.log(row);
        this.form.name=row.grade_name
        this.form.region=row.room_text
         this.form.region1=row.subject_text
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
       ...mapActions({
       getbj: "bjgl/grades",
       gradeUpdate: 'bjgl/gradeUpdate'
    })


    },
    mounted(){
       this.getbj()
      
    }
    
  }
</script>


<style scoped>
/* /deep/ .el-input__inner {
  width:90%;
}
/deep/ .el-select {
  width:100%;
  position: relative;
}
/deep/ .el-select  .el-input__suffix {
 
  position: absolute;
  right: 10%;
} */

.wrap {
  background: #f0f2f5;
  height: 90%;
}
h2 {
  margin-left: 25px;
  margin-top: 30px;
}
.addClass {
  width: 90%;
  height: 80px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
}
.btn {
  margin-left: 25px;
  margin-top: 15px;
}
.biaoge {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
}
.spanone{
  color: blue;
  cursor: pointer;
  
}
.is-leaf{
  width: 25%;
}
.inputone{
  border-color: #ccc;
}
</style>