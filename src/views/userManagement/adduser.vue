<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-24 14:58:34
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-24 19:54:08
 * @Description: 
 -->
<template>
    <div class="adduser">
        <h2>添加用户</h2>
        <div class="cont">
            <div class="add">
                <div class="title">
                    <p :class="{'hue' :user }" @click="userAdd"><b>添加用户</b></p>
                    <p :class="{'hue' :!user }" @click="userAdd"> <b>更新用户</b> </p>
                </div>
                <div v-show="!user">
                     <el-select v-model="value" placeholder="请选择" >
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-input v-model="addInput" placeholder="请输入用户名"></el-input>
                </div>
                <div>
                    <el-input v-model="addPwd" placeholder="请输入密码"></el-input>
                </div>
                <div>
                    <el-button type="primary" style="width:100px">确定</el-button>
                    <el-button>重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>添加身份</b></p>
                </div>  
                 <div>
                    <el-input v-model="addInput" placeholder="请输入用户名"></el-input>
                </div>
                <div>
                    <el-input v-model="addPwd" placeholder="请输入密码"></el-input>
                </div>
                <div>
                    <el-button type="primary" style="width:100px">确定</el-button>
                    <el-button>重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>添加api接口权限</b></p>
                </div>
                <div>
                    <el-input v-model="addInput" placeholder="请输入用户名"></el-input>
                </div>
                <div>
                    <el-input v-model="addPwd" placeholder="请输入密码"></el-input>
                </div>
                <div>
                    <el-button type="primary" style="width:100px">确定</el-button>
                    <el-button>重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>添加视图接口权限</b> </p>
                </div>
                 <div>
                   <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                
                <div>
                    <el-button type="primary" style="width:100px">确定</el-button>
                    <el-button>重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>给身份设置api接口权限</b> </p>
                </div>
                 <div>
                     <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-button type="primary" style="width:100px">确定</el-button>
                    <el-button>重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"> <b>给身份设置视图权限</b></p>
                </div>
                 <div>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                     <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                    <el-button type="primary" style="width:100px">确定</el-button>
                    <el-button>重置</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"adduser",
    props:{

    },
    components:{

    },
    data(){
        return {
            addInput: '',
            addPwd: '',
             options: [{
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }, {
              value: '选项4',
              label: '龙须面'
            }, {
              value: '选项5',
              label: '北京烤鸭'
            }],
            value: '',
            user: false,
        }
    },
    computed:{

    },
    methods:{
        userAdd(){
            this.user=!this.user
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .adduser{
        padding: 0 24px 24px;
        h2{
            font-weight: 300;
            padding:20px 0;
        }
    }
    .cont{
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-radius: 5px;
        .add{
              width: 33.3%;
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              padding: 10px;
              border-radius: 5px;
              cursor: pointer;
              div:not(:first-child){
                  padding-top: 30px;
              }
        }
    }
    .title{
        display: flex;
        p{  
            font-size: 14px;
            font-weight: 300;
            background: #fff;
            box-sizing: border-box;
            padding: 8px 15px;
           
        }
    }
    .hue{
        border: 1px solid #1890ff;
        color: #1890ff;
    }
</style>