import {student,studentDelete } from "@/api/class-and-grade"

const state = {
    xslist : [],
    arr: [],//班级
    jiaoshi:[]//教室
}
function formatlist(data){

 let str = []
        data.map(item=>{
         str.push(item.grade_name)
         }) 
         return new Set(str)     
}
function jiaoshihao(data){
  let str = []
  data.map(item=>{
   str.push(item.room_text)
   }) 
   return new Set(str) 
}
const mutations = {
     ADD_ERROR_LOG: (state, payload) => {//payload就是异步方法拿回来的数据，
      state.xslist=payload        //在同步方法里调用外面赋值的方法，将大数据传给外面的方法，让外面的方法返回咱们需要的数据，在传给组件
      state.arr= formatlist(payload)
      state.jiaoshi=jiaoshihao(payload)
      console.log(  state.arr)
    },
    mohu:(state,payload) => {
      console.log(payload)
         let {ipt1,sel1,sel2}=payload
     let mohuhou= state.xslist.filter((item,index)=>{
          //  if(ipt1&&sel1&&sel2){
             return item.student_name==ipt1 || item.room_text==sel1 || item.grade_name==sel2
          //  }
           
          // return item.student_name==ipt1 ||item.room_text==sel1 || item.grade_name==sel2
      })
      state.xslist=mohuhou
    }
    
}
  const actions = {
    async student ({ commit }) {
        let res =  await student()
        // console.log(res)
        commit('ADD_ERROR_LOG', res.data)  //res.data就是大数据
    },
  
  //删除
  async studentDelete({ commit }, payload) {
    console.log(payload)
   
    let res =  await studentDelete(payload)  //这里有问题，要么422要么500,现在已经解决
    console.log(res)
   
},


  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
