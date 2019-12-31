<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-23 19:13:09
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-23 19:41:55
 * @Description: 
 -->
<template>
  <div class="components-container">
    <aside>This is based on
      <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>.
      {{ $t('components.imageUploadTips') }}
    </aside>

    <pan-thumb :image="image" />

    <el-button type="primary" icon="el-icon-upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://123.206.55.50:11000/upload"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapActions, mapState, mapMutations } from "vuex"
import axios from "axios"
import {Gengxin} from "@/api/user"
export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  computed:{
      ...mapState({
         
          id:state=>state.user.id
       })
  },
  mounted(){
    this.getInfo()
  },
  methods: {
    // ...mapMutations({
    //    SET_AVATAR: "user/SET_AVATAR",

    // }),
    ...mapActions({
       getInfo:"user/getInfo"
    }),
    cropSuccess(resData) {
      console.log(this.id)
      console.log(resData)
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData[0].path//
      // this.SET_AVATAR(resData[0].path)
      let data={};
      data.user_id=this.id;
      
      data.avatar=resData[0].path
      console.log(data)
      Gengxin(data) //直接将头像的方法存到数据库里，不经过vuex，
      this.getInfo() //调用重新获取用户信息的接口页面就刷新了
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>

