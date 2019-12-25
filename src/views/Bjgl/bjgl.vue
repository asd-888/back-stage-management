<template>
  <div class="wrap">
    <h2>班级管理</h2>
    <div class="addClass">
      <el-button type="primary" class="btn"  @click="addfn('ruleForm')">添加班级</el-button>
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
  <el-form :model="form" label-position="top" :rules="rules" ref="ruleForm">
   
   
    <el-form-item label="班级名"  prop="name"  > 
      <el-input v-model="form.name" autocomplete="off"  :disabled="flag" :style='{width:formLabelWidth}' placeholder="请输入班级名"></el-input>
    </el-form-item>




    <el-form-item label="教室号"   prop="region"> 
      <el-select v-model="form.region" placeholder="请选择活动区域" :style='{width:formLabelWidth}'>
        <el-option :label="item.room_text" :value="item.room_id" v-for="(item,index) in bjlist" :key="index"></el-option> 
      </el-select>
    </el-form-item>


    
     <el-form-item label="课程名"  prop="region1" >
      <el-select  v-model="form.region1" placeholder="请选择活动区域" :style='{width:formLabelWidth}'>
      <el-option :label="item.subject_text"  :value="item.subject_id"  v-for="(item,index) in bjlist" :key="index"></el-option>
       
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="tankuangquxiao('ruleForm')">取 消</el-button>
    <el-button type="primary" @click="handleOk('ruleForm')">确 定</el-button>
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
         rules: {
          name: [
            { required: true, message: '请输入班级名', trigger: 'blur' }
            
          ],
          region: [
            { required: true, message: '请选择教室号', trigger: 'change' }
          ],
          region1: [
           { required: true, message: '请选择课程名', trigger: 'change' }
          ],
        
        },
        formLabelWidth: "90%",
        flag: true
      }
    },
    computed: {
       ...mapState({
          bjlist: state=>state.bjgl.bjlist
       })
    },
    methods: {
      // 确定 
      handleOk(formName) {  
        
         if(this.flag){
            this.$refs[formName].validate((valid) => {
          if (valid) {
                  this.dialogFormVisible = false
                this.gradeUpdate({
                     grade_name: this.form.name, 
                     grade_id: this.form.grade_id,
                     room_id: this.form.region,
                     subject_id:  this.form.region1
                }).then(res=>
                  this.getbj()
                    
                )
          } else {
           
            return false;
          }
        });
         }
       
        else{  //如果input没有禁用，走添加接口
           this.$refs[formName].validate((valid) => {
          if (valid) {
              this.dialogFormVisible = false
            this.gradeAdd({
                     grade_name: this.form.name, 
                     room_id:this.form.region,
                     subject_id:this.form.region1,
                }).then(res=> //.then是说上面代码执行完后再执行.then的方法，res是代表上面的方法成功后
                  this.getbj()
                           
                )  
          } else {
        
            return false;
          }
        });
          
        }
      },
      handleEdit(index, row) {
        this.flag=true;
        this.dialogFormVisible = true
        this.form.grade_id = row.grade_id
        console.log(row);
        this.form.name=row.grade_name
        this.form.region=row.room_text
         this.form.region1=row.subject_text
      },
      handleDelete(index, row) {
        this.grade_id=row.grade_id
        console.log(this.grade_id)
        let params={}
        params.grade_id=row.grade_id
        this.gradeDelete(params)
          this.getbj()

      },
      addfn(formName){
         this.form.name="", 
                 this.form.grade_id="",
                    this.form.region="",
                    this.form.region1=""
             this.dialogFormVisible = true,
            this.flag=false;
              this.$refs[formName].resetFields();

            
      },
       ...mapActions({
       getbj: "bjgl/grades",
       gradeUpdate: 'bjgl/gradeUpdate',
       gradeDelete:"bjgl/gradeDelete",
       gradeAdd:"bjgl/gradeAdd"
    }),
    tankuangquxiao(formName){
            this.dialogFormVisible = false
          this.$refs[formName].resetFields();
    }


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