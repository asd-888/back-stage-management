<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-24 14:58:34
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2019-12-26 20:19:20
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
                <el-form  :model="ruleForm" ref="ruleForm">
                        <div v-show="!user" class="updateUser">
                            <el-form-item prop="identityId">
                                <el-select v-model="ruleForm.identityId" placeholder="请选择身份id"   prop="name" >
                                    <el-option
                                    v-for="item in userList"
                                    :key="item.user_id"
                                    :label="item.user_name"
                                    :value="item.user_id"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            </div>
                            <div>
                                <el-form-item prop="addInput">
                                    <el-input v-model="ruleForm.addInput" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                            </div>
                            <div>
                                <el-form-item prop="addPwd">
                                    <el-input v-model="ruleForm.addPwd" placeholder="请输入密码"></el-input>
                                </el-form-item>
                            </div>
                            <div>
                                <el-form-item prop="identity">
                                    <el-select v-model="ruleForm.identity" placeholder="请选择身份id" >
                                        <el-option
                                        v-for="item in identityList"
                                        :key="item.identity_id"
                                        :label="item.identity_text"
                                        :value="item.identity_id"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                    </el-form>
                <div>
                    <el-button type="primary" style="width:100px" @click="confirm(1)">确定</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>添加身份</b></p>
                </div>
                 <el-form  :model="identity" ref="identity">
                    <el-form-item prop="identityName">
                        <div>
                            <el-input v-model="identity.identityName" placeholder="请输入身份名称"></el-input>
                        </div>
                    </el-form-item>
                </el-form>
                <div>
                    <el-button type="primary" style="width:100px" @click="confirm(2)">确定</el-button>
                    <el-button @click="resetForm('identity')">重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>添加api接口权限</b></p>
                </div>
                <el-form  :model="apiAuthority" ref="apiAuthority">
                <div>
                    <el-form-item prop="apiAuthorityName">
                        <el-input v-model="apiAuthority.apiAuthorityName" placeholder="请输入api接口权限名称"></el-input>
                    </el-form-item>
                </div>
                <div>
                    <el-form-item prop="apiAuthorityUrl">
                        <el-input v-model="apiAuthority.apiAuthorityUrl" placeholder="请输入api接口权限url"></el-input>
                    </el-form-item>
                </div>
                 <div>
                    <el-form-item prop="apiAuthorityMethod">
                        <el-input v-model="apiAuthority.apiAuthorityMethod" placeholder="请输入api接口权限方法"></el-input>
                    </el-form-item>
                </div>
                </el-form>
                <div>
                    <el-button type="primary" style="width:100px" @click="confirm(3)">确定</el-button>
                    <el-button @click="resetForm('apiAuthority')">重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>添加视图接口权限</b> </p>
                </div>
                <el-form  :model="viewExisting" ref="viewExisting">
                    <el-form-item prop="viewExisting">
                        <div>
                           <el-select v-model="viewExisting.viewExisting" @change="selectGet" placeholder="请选择已有视图">
                                <el-option
                                v-for="item in viewList"
                                :key="item.view_authority_id"
                                :label="item.view_authority_text"
                                :value="item.view_authority_id"
                                >
                                </el-option>
                            </el-select>
                        </div>  
                    </el-form-item>
                </el-form>
                <div>
                    <el-button type="primary" style="width:100px" @click="confirm(4)">确定</el-button>
                    <el-button @click="resetForm('viewExisting')">重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"><b>给身份设置api接口权限</b> </p>
                </div>
                 <el-form  :model="identityApi" ref="identityApi">
                    <div>
                        <el-form-item prop="identityApi">
                            <el-select v-model="identityApi.identityApi" placeholder="请选择身份id">
                                <el-option
                                v-for="item in identityList"
                                :key="item.identity_id"
                                :label="item.identity_text"
                                :value="item.identity_id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item prop="identityApiPort">
                            <el-select v-model="identityApi.identityApiPort" placeholder="请选择api接口权限">
                                <el-option
                                v-for="item in apiList"
                                :key="item.api_authority_id"
                                :label="item.api_authority_text"
                                :value="item.api_authority_id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-form>
                <div>
                    <el-button type="primary" style="width:100px" @click="confirm(5)">确定</el-button>
                    <el-button @click="resetForm('identityApi')">重置</el-button>
                </div>
            </div>
             <div class="add">
                <div class="title">
                    <p class="hue"> <b>给身份设置视图权限</b></p>
                </div>
                 <el-form  :model="set" ref="set">
                    <div>
                        <el-form-item prop="setIdentityId">
                            <el-select v-model="set.setIdentityId" placeholder="请选择身份id">
                                <el-option
                                v-for="item in identityList"
                                :key="item.identity_id"
                                :label="item.identity_text"
                                :value="item.identity_id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div>
                        <el-form-item prop="setViewAuthority">
                            <el-select v-model="set.setViewAuthority" placeholder="请选择视图权限id">
                                <el-option
                                v-for="item in viewList"
                                :key="item.view_authority_id"
                                :label="item.view_authority_text"
                                :value="item.view_authority_id">
                                </el-option>
                            </el-select>
                         </el-form-item>
                    </div>
                </el-form>
                <div>
                    <el-button type="primary" style="width:100px" @click="confirm(6)">确定</el-button>
                    <el-button @click="resetForm('set')">重置</el-button>
                </div>
            </div>
        </div>
        <el-button :plain="true"></el-button>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name:"adduser",
    props:{

    },
    components:{

    },
    data(){
        return {
            user: true,
            value: '',
            ruleForm: { //重置用户
                name: '',
                addInput: '',//用户
                addPwd: '',//密码
                identityId: '',//身份id
                identity: '',//身份
            },
            identity:{//重置身份
                name: '',
                identityName: '',//身份名称

            },
            apiAuthority: {//重置api
                name: '',
                apiAuthorityName: '',//api接口权限名称
                apiAuthorityUrl: '',//api接口权限url
                apiAuthorityMethod: '',//api接口权限方法
            },
            viewExisting:{//重置添加视图接口
                name: '',
                viewExisting: '',//已有视图id
            },
            identityApi:{//重置身份api权限
                name: '',
                identityApi: '',//身份api 权限身份id
                identityApiPort: '',//身份api 权限接口权限  
            },
            set:{//重置身份设置权限
                name: '',
                setIdentityId: '',//设置视图权限 身份id
                setViewAuthority: '',//设置视图权限
            }
        }
    },
    computed:{
        ...mapGetters(['userList', 'identityList', 'viewList', 'apiList'])
    },
    methods:{
        userAdd(){
            this.user=!this.user
        },
        ...mapActions({
            getList: "userManagement/getList",
            add: "userManagement/add",
            userUpdate: "userManagement/userUpdate",
            addStatus: 'userManagement/addStatus',
            addApi: "userManagement/addApi",
            addView: 'userManagement/addView',
            setApi: 'userManagement/setApi',
            setView: 'userManagement/setView'
        }),
        //确定事件
        confirm(i){
            if(i==1&&this.user){
                 this.add({user_name:this.ruleForm.addInput, user_pwd:this.ruleForm.addPwd, identity_id:this.ruleForm.identity}).then(res=>{
                    this.$message(res);
                })
                 this.ruleForm={
                     addInput: '',
                     addPwd: '',
                     identity: ''
                 }
            }else if(i==2){
                this.addStatus({identity_text:this.identity.identityName}).then(res=>{
                    this.$message(res);
                })
                this.identity.identityName=""
            }else if(i==3){
                this.addApi({api_authority_text:this.apiAuthority.apiAuthorityName,api_authority_url:this.apiAuthority.apiAuthorityUrl,api_authority_method:this.apiAuthority.apiAuthorityMethod}).then(res=>{
                    this.$message(res);
                })
                this.apiAuthority={
                    apiAuthorityName: '',
                    apiAuthorityUrl: '',
                    apiAuthorityMethod: ''
                }
            }else if(i==4){
                this.addView({view_authority_text:this.value,view_id:this.viewExisting.viewExisting}).then(res=>{
                    this.$message(res);
                })
                this.viewExisting={
                    viewExisting: ''
                }
            }else if(i==5){
                this.setApi({identity_id:this.identityApi.identityApi,api_authority_id:this.identityApi.identityApiPort}).then(res=>{
                    this.$message(res);
                })
                this.identityApi={
                    identityApi:'',
                    identityApiPort:''
                }
            }else if(i==6){
                this.setView({identity_id:this.set.setIdentityId,view_authority_id:this.set.setViewAuthority}).then(res=>{
                    this.$message(res);
                })
                this.set={
                    setIdentityId: '',
                    setViewAuthority: ''
                }
            }else{
                this.userUpdate({user_name:this.ruleForm.addInput, user_pwd:this.ruleForm.addPwd, identity_id:this.ruleForm.identity, user_id:this.ruleForm.identityId}).then(res=>{
                    this.$message(res);
                })
               this.ruleForm={
                     addInput: '',
                     addPwd: '',
                     identity: '',
                     identityId:''
                 }
            }
             this.getList()
        },
        //重置事件
        resetForm(formName){
            this.$refs[formName].resetFields();
        },
        selectGet(vId){
            let obj = {};
                obj = this.viewList.find((item)=>{//这里的userList就是上面遍历的数据源
                    return item.view_authority_id=== vId;//筛选出匹配数据
                    });
              this.value=obj.view_authority_text;//我这边的name就是对应label的
        }
       
    },
    created(){
        this.getList()
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
              .el-form /deep/{
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