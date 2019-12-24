import { roomAll, roomAdd,roomDelete } from "@/api/class-and-grade"

const state = {
    jslist: [],

}
const mutations = {
    ADD_ERROR_LOG: (state, payload) => {
        state.jslist = payload
        //console.log(state.jslist)
    },

}

const actions = {
    //渲染
    async roomAll({ commit }) {
        let res = await roomAll()
        //console.log(res)
        commit('ADD_ERROR_LOG', res.data)
    },

    //删除
       async roomDelete({ commit }, payload) {
              console.log(payload)

        let res =  await roomDelete(payload)  //这里有问题，要么422要么500
       console.log(res)

 },


    //添加教室
    async roomAdd({ commit }, payload) {
       
        let res = await roomAdd(payload)

    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}