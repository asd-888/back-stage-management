<template>
  <div>
    <h2>教室管理</h2>
    <div class="addClass">
      <el-button type="primary" class="btn" @click="dialogFormVisible = true">+添加教室</el-button>
    </div>

    <div class="biaoge">
      <el-table :data=" jslist" style="width: 100%" class="el">
        <el-table-column label="日期" width="500px">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.room_text}}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <span @click="handleDelete(scope.$index, scope.row)">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 下面是弹框 -->

    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-position="top">
        <el-form-item
          label="教室管理"
          :label-width="formLabelWidth"
          :rules="[
      { required: true, message: '请输入教室号'},
      { type: 'number', message: '教室号必须为数字值'}
    ]"
        >
          <el-input v-model="form.name" autocomplete="off" placeholder="教室名"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="queding">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 点击删除的弹窗 -->
    
    <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose">
      <span>你确定要删除此教室吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="shanchu">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible1: false,
      shanchuid:"",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },

  methods: {
    handleDelete(index, row) {
      console.log(row);
      this.shanchuid=row.room_id
       this.dialogVisible1=true;
    },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    ...mapActions({
      getjs: "jsgl/roomAll",
      roomAdd: "jsgl/roomAdd",
      roomDelete:"jsgl/roomDelete"
    }),
    queding() {
      this.dialogFormVisible = false;
      this.roomAdd({ room_text: this.form.name }).then(res => {
        this.getjs();
      });
    },
    shanchu(){
      this.dialogVisible1 = false
       let params={}
        params.room_id=this.shanchuid
         this.roomDelete(params)
        this.getjs()

    }
  },
  computed: {
    ...mapState({
      jslist: state => state.jsgl.jslist
    })
  },
  created() {
    this.getjs();
  }
};
</script>

<style scoped>
h2 {
  margin-left: 25px;
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
  background: #789aff;
  border: 1px solid #789aff;
  width: 150px;
}
.biaoge {
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
}
.biaoge .el {
  border-radius: 10px;
}
</style>