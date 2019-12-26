<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-24 14:59:05
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2019-12-26 15:47:04
 * @Description: 
 -->
<template>
    <div>
        <div class="userMsg">
         <p class="userShow">用户展示</p>
         <!-- 用户数据 -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户数据" name="first">
                 <div class="dataList">
                    <p class="userdata">用户数据</p>
                    <div class="table">
                        <el-table
                        :data="pageSlice"
                        style="width: 100%">
                        <el-table-column
                            prop=user_name
                            label="用户名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop=user_pwd
                            label="密码"
                        >
                        </el-table-column>
                        <el-table-column
                            prop=identity_text
                            label="身份">
                        </el-table-column>
                        </el-table>
                     </div>
                 </div>
            </el-tab-pane>
            <!-- 身份权限 -->
            <el-tab-pane label="身份权限" name="second">
                 <div class="dataList">
                    <p class="userdata"> 身份权限</p>
                    <div class="table">
                        <el-table
                        :data="pageSlice"
                        style="width: 100%">
                        <el-table-column 
                            prop=identity_text
                            label="身份名称"
                            width="180">
                        </el-table-column>                      
                        </el-table>
                     </div>
                 </div>
               </el-tab-pane>
               <!-- api接口权限 -->
            <el-tab-pane label="api接口权限" name="third">
                <div class="dataList">
                    <p class="userdata"> api接口权限</p>
                    <div class="table">
                        <el-table
                        :data="pageSlice"
                        style="width: 100%">
                        <el-table-column 
                            prop=api_authority_text
                            label="api权限名称"
                            width="180">
                        </el-table-column> 
                          <el-table-column 
                            prop=api_authority_url
                            label="api权限url"
                            width="180">
                        </el-table-column>     
                          <el-table-column 
                            prop=api_authority_method
                            label="api权限方法"
                            width="180">
                        </el-table-column>                          
                        </el-table>
                     </div>
                 </div>
            </el-tab-pane>
            <!--身份和api接口关系  -->
            <el-tab-pane label="身份和api接口关系" name="fourth">
                 <div class="dataList">
                    <p class="userdata">  身份和api接口关系</p>
                    <div class="table">
                        <el-table
                        :data="pageSlice"
                        style="width: 100%">
                        <el-table-column 
                            prop=identity_text
                            label="身份名称"
                            width="180">
                        </el-table-column> 
                          <el-table-column 
                            prop=api_authority_text
                            label="api权限名称"
                            width="180">
                        </el-table-column>     
                          <el-table-column 
                            prop=api_authority_url
                            label="api权限url"
                            width="180">
                        </el-table-column>  
                         <el-table-column 
                            prop=api_authority_method
                            label="api权限方法"
                            width="180">
                        </el-table-column>                          
                        </el-table>
                     </div>
                 </div>
               </el-tab-pane>
            <!-- 视图接口权限 -->
            <el-tab-pane label="视图接口权限" name="fiveth">
                 <div class="dataList">
                    <p class="userdata">   视图接口权限</p>
                    <div class="table">
                        <el-table
                        :data="pageSlice"
                        style="width: 100%">
                        <el-table-column 
                            prop=view_authority_text
                            label="视图权限名称"
                            width="180">
                        </el-table-column>    
                          <el-table-column 
                            prop=view_id
                            label="视图id"
                            width="180">
                        </el-table-column>                       
                        </el-table>
                     </div>
                 </div>
              </el-tab-pane>
            <!-- 身份和视图权限关系 -->
            <el-tab-pane label="身份和视图权限关系" name="sixth">
                 <div class="dataList">
                    <p class="userdata"> 身份和视图权限关系</p>
                    <div class="table">
                        <el-table
                        :data="pageSlice"
                        style="width: 100%">
                        <el-table-column 
                            prop=identity_text
                            label="身份"
                            width="180">
                        </el-table-column> 
                          <el-table-column 
                            prop=view_authority_text
                            label="视图名称"
                            width="180">
                        </el-table-column>     
                        <el-table-column 
                            prop=view_id
                            label="视图id"
                            width="180">
                        </el-table-column>                          
                        </el-table>
                     </div>
                 </div>
                </el-tab-pane>
        </el-tabs>
    
        
           
        </div>

       <!-- 分页 -->
       <div class="block">
        <!-- <span class="demonstration">页数较少时的效果</span> -->
             <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
             layout="prev, pager, next"
             :total="num"
             :page-size="10"
             :page-count="11"
             :current-page.sync="pages"
             >
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import ElementUI from 'element-ui';
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            activeName: 'first',
            num:0,
            pageList:[],
            pageSlice:[],
            pages:1

        }
    },
    computed:{
        ...mapState({
            userData:state=>state.userShow.userData,
            userIdentityData:state=>state.userIdentity.userIdentityData,
            ApiData:state=>state.api.ApiData,
            ApiAuthorData:state=>state.authorApi.ApiAuthorData,
            viewData:state=>state.viewShow.viewData,
            ViewAuthorityData:state=>state.viewAuthority.ViewAuthorityData
        })
    },
    methods:{   
        ...mapActions({ 
            UserShow:'userShow/UserShow',
            UserIdentity:'userIdentity/UserIdentity',
            Api:"api/Api",
            AuthorApi:'authorApi/AuthorApi',
            ViewShow:'viewShow/ViewShow',
            ViewAuthority:'viewAuthority/ViewAuthority'
        }),
     
        handleClick(tab, event) {
            if(tab.index==0){
                this.pageList=this.userData
                this.pageSlice=this.pageList.slice(0,10)
                 this.num= this.userData.length
                this.pages=1
            }else if(tab.index==2){
                  this.pageList=this.ApiData
                    this.pageSlice=this.pageList.slice(0,10)
                 this.num= this.ApiData.length
                 this.pages=1
            }else if(tab.index==3){
                  this.pageList=this.ApiAuthorData
                     this.pageSlice=this.pageList.slice(0,10)
                 this.num= this.ApiAuthorData.length
                 this.pages=1

            }else if(tab.index==4){
                  this.pageList=this.viewData
                     this.pageSlice=this.pageList.slice(0,10)
                 this.num= this.viewData.length
                    this.pages=1
            }else if(tab.index==4){
                  this.pageList=this.ViewAuthorityData
                     this.pageSlice=this.pageList.slice(0,10)
                 this.num= this.ViewAuthorityData.length
                    this.pages=1
            }else{
                  this.pageList=this.userIdentityData
                this.pageSlice=this.pageList.slice(0,10)
                 this.num= this.userIdentityData.length
                this.pages=1
            }
          console.log(tab.index, event,'0000000000');
      },
      sizeChange(){
          console.log("2")
      },
      currentChange(val){
          console.log((val-1)*10,val*10)
          this.pageSlice=this.pageList.slice((val-1)*10,val*10)

      }

    },
    created(){
        this.UserShow()
        this.UserIdentity()
        this.Api(),
        this.AuthorApi(),
        this.ViewShow(),
        this.ViewAuthority()
        this.num= userIdentityData.length
    },
   
    watch:{
        userData(){
            console.log(this.userData,'99999999')
            this.pageList=this.userData
            this.pageSlice=this.pageList.slice(0,10)
            this.num= this.userData.length
            }
    }
}
</script>
<style scoped lang="scss">
    .userMsg{
        width: 95%;
        margin: 20px 0 10px 20px;
    }
    .userShow{
        margin: 20px 0 10px 0;
        font-size: 20px;
    }
    .Tab{
        display: flex;
        a{
            display: inline-block;
            border-right:1px solid #d9d9d9;
            border-top:1px solid #d9d9d9;
            border-bottom:1px solid #d9d9d9;
            border-left:1px solid #d9d9d9;
             background: #fff;
            line-height: 40px;
        }
        a:hover{
            color: #0139FD;
        }
        .active{
            color: #0139FD;
            border-color: #0139FD;
        }
       
    }
    .dataList{
        margin-top: 20px;
    }
    .userdata{
        margin: 20px 0 10px 0;
        font-size: 26px;
    }
    .table{
        display: flex;
        justify-content: space-between;
    }
</style>