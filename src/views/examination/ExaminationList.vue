<template>
    <div class="examinationList">
        <el-container>
            <el-header>试卷列表</el-header>
            <div class="search">
               <div class="block">
                    <div class="item">
                    <span>考试类型：</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>    
                </div>
                <div class="item">
                    <span>课程：</span>
                    <el-select v-model="value1" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>    
                </div>
                <button>
                    <i>
                        <svg-icon icon-class="search" />
                    </i>
                    <span>查询</span>    
                </button>
               </div>
            </div>
            <el-main>
                <div class="top">
                    <span>试卷列表</span>
                    <div class="tab">
                        <span>全部</span>
                        <span>进行中</span>
                        <span>已结束</span>
                    </div>
                </div>
                <div class="list">
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                         <el-table-column label="操作">
                            <template slot-scope="scope">
                            <span
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)"
                            >批卷</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-main>  
        </el-container>      
    </div>
</template>

<script>
export default {
    data(){
        return{
            options: [{
                value: '选项1',
                label: '黄金糕'
            },
            {
                value: '选项2',
                label: '双皮奶'
            }, 
            {
                value: '选项3',
                label: '蚵仔煎'
            },
            {
                value: '选项4',
                label: '龙须面'
            },
            {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            value1:'',
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
        }   
    }
}
</script>

<style scoped>
.examinationList{
    width: 100%;
    min-height: 300px;
}
.el-header{
    height: 70px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    line-height: 70px;
    font-size: 20px;
    margin: 10px 0;
}
.el-main {
    background-color: #fff;
    color: #333;
    margin: 0 20px;
    display: flex;
    flex-direction: column;

}
el-table{
    width: 100%;
}
.item{
    margin-right:40px;
    min-height: 40px;
}
.item span{
    font-size: 15px;
    font-weight: normal;
}


button{
    background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    padding:0 40px!important;
    border-radius: 4px!important;
    border: 0!important;
    font-size: 14px!important;
    color: #fff!important;
    cursor: pointer;
}
.search{
    height: 100px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    font-size: 20px;
    margin: 10px 20px;
    background: #fff;
    padding: 20px ;
}
.block{
    display: flex;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 50px;
}
.top .tab span{
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    margin: 0;
}
</style>