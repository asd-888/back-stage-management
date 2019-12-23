<template>
  <div class="exam">
    <el-container>
      <el-header>待批班级</el-header>
      <el-main>
        <el-table
          :data="classList"
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="grade_name"
            label="班级名"
          />
          <el-table-column
            prop="subject_text"
            label="课程名称"
          />
          <el-table-column
            prop=""
            label="阅卷状态"
          />
          <el-table-column
            prop="room_text"
            label="成材率"
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
            :current-page="currentPage4"
            :total="classListNum"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
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
      currentPage4: 4,
      pageSize: 5
    }
  },
  computed: {
    ...mapState({
      classList: state => state.await.classList,
      classListNum: state => state.await.classListNum
    })
  },
  methods: {

    handleEdit(index, row) {
      // this.$router.push(`/examination/classmate?grade_id=${row.grade_id}`)
      // this.$router.push({name: '/examination/classmate', params: {grade_id: row.grade_id}})
      this.$router.push({
        path: '/marking/classmate',
        // query:{
        //     grade_id: row.grade_id
        // }
        
      })
      this.studentPaperList({ grade_id: row.grade_id })
      localStorage.setItem('grade_name', row.grade_name)
    },
    handleSizeChange(val) {
      this.pageSize = val
      console.log(this.pageSize)
      this.studentList()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    ...mapActions({
      gradeList: 'await/gradeList',
      studentPaperList: 'await/studentPaperList'
    })
  },
  created() {
    this.gradeList()
  }
}

</script>

<style scoped>
  .exam{
    width: 100%;
    height: 100%;

  }
  .el-header {
    height: 70px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    line-height: 70px;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .el-main {
    margin: 0 20px;
    background-color: #fff;
    color: #333;
    text-align: right;
    /* line-height: 50px; */
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .is-leaf{
    width: 20%;
  }
  .block{
    margin-top: 10px;
  }
  span{
    cursor: pointer;
    color:#0139FD
  }
</style>
