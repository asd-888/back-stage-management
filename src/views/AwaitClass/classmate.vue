<template>
  <div class="classmate">
    <el-container>
      <el-header>试卷列表</el-header>
      <el-main>
        <el-table
          :data="PaperList"
          style="width: 100%"
        >
          <el-table-column
            prop="grade_name"
            label="班级"
          />
          <el-table-column
            prop="student_name"
            label="姓名"
          />
          <el-table-column
            prop="status"
            label="阅卷状态"
          />

          <el-table-column
            prop="start_time"
            label="开始时间"
          />
          <el-table-column
            prop="end_time"
            label="结束时间"
          />
          <el-table-column
            prop="name"
            label="成才率"
          />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >批卷</span>
            </template>
          </el-table-column>
        </el-table>

        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5,10,20,50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="paperListNum">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1,
      pageSize:5,
    }
  },
  computed: {
    ...mapState({
      PaperList: state => state.await.studentPaperList,
      paperListNum: state => state.await.paperListNum
    })
  },
  methods: {
    ...mapActions({
      studentPaperList: 'await/studentPaperList'
    }),
    handleEdit(index, row) {
      console.log(index, row)
    },

    handleSizeChange(val) {
      this.pageSize = val
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      // console.log(`当前页: ${val}`)
    }
  },
  created() {
    
  }
}
</script>

<style scoped>
.classmate{
    width: 100%;
    height: 100%;
    background: #f0f2f5;
}
.el-header {
    height: 70px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    line-height: 70px;
    font-size: 18px;
    background: #fff;
    margin-bottom: 25px;
    /* background: #f0f2f5; */
}
  .el-main {
    margin: 0 20px;
    background-color: #fff;
    color: #333;
    text-align: right;
    /* line-height: 50px; */
  }
.is-leaf{
    width: 14%;
}
span{
    cursor: pointer;
    color:#0139FD
  }
.el-table__header-wrapper{
    height: 60px;
    line-height: 60px;
}
.block{
    margin-top: 20px;
    /* width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: right; */
}
</style>
