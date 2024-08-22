/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"
import router from '@/router';
import { useCookies } from "vue-cookies";
// import { EPSILON } from 'core-js/core/number';
axios.defaults.withCredentials=true
axios.defaults.headers=$cookies.get("token")


export default createStore({
  state: {
    products:null,
    users:null
  },
  getters: {
  },
  mutations: {
    setProducts(state,payload){
    state.products=payload
    },
    setUsers(state,payload){
      state.users=payload
    }

  },
  actions: {
    async addUser({commit},info){
      let data=await axios.post("http://localhost:2026/users",info)
      toast("Hello! signed in successfully!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
    },
   async loginUser({commit},info){
      let {data}= await axios.post("http://localhost:2026/users/login",info)
      toast("welcome back!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      console.log(data);
      $cookies.set("token",data.token)
     await router.push('/')
     location.reload()
  },
  async getProducts({ commit }) {
    try {
      let { data } = await axios.get("http://localhost:2026/products");
      console.log(data);
      commit("setProducts", data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products. Please try again later.");
    }
  }
  
},
modules: {
}
})