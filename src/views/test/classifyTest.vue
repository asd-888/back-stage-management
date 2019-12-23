<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-20 10:38:40
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-23 09:15:33
 * @Description: 
 -->
<template>
  <div class="classifyTest">
    <h2>试卷分类</h2>
    <div>
      <el-row>
        <el-button type="primary" @click="dialogVisible = true">+ 添加类型</el-button>
      </el-row>
    </div>
    <div>
      <template>
        <el-table :data="classifyList" style="width: 80%">
          <el-table-column prop="questions_type_id" label="类型ID" width="180"></el-table-column>
          <el-table-column prop="questions_type_text" label="类型名称" width="180"></el-table-column>
          <el-table-column prop="null " label="操作"></el-table-column>
        </el-table>
      </template>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <input type="text" v-model="value" style="width:100%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTypes">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Table, Button, Dialog } from "element-ui";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { valid } from '@vue/test-utils';
export default {
  name: "classifyTest",
  data() {
    return {
        dialogVisible: false,
        value:""
    };
  },
  computed: {
    ...mapGetters(["classifyList"])
    // list:
  },
  methods: {
    ...mapActions({
      getQuestionsType: "classifyTest/getQuestionsType",
      insertQuestionsType: "classifyTest/insertQuestionsType"
    }),
   async addTypes(){
      if(this.value){
     await this.insertQuestionsType({text:this.value,sort:this.classifyList.length+1});
       this.getQuestionsType();
      }
      this.value= ""
     this.dialogVisible = false
    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
  created() {
    this.getQuestionsType();
  }
};
</script>
<style scoped lang="scss">
.classifyTest {
  width: 100%;
  height: 100%;
  padding: 0px 24px 24px;
  h2 {
    padding: 20px 0;
    margin-top: 10px;
    font-weight: 500;
  }
}
</style>