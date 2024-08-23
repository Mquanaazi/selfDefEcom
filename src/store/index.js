/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css"
import router from '@/router';
import { useCookies } from "vue-cookies";
// import { EPSILON } from 'core-js/core/number';
axios.defaults.headers=$cookies.get("token")
const apiURL = "https://selfdefecom.onrender.com/"

export default createStore({
  state: {
    products: null,
    users: null,
    product: null,
    user: null,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        let results = await (await axios.get(`${apiURL}products`)).data;
        
        // Use a Set to filter out duplicate products based on `productID`
        const uniqueProducts = Array.from(new Set(results.map(product => product.productID)))
          .map(id => results.find(product => product.productID === id));
  
        commit("setProducts", uniqueProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products. Please try again later.");
      }
    },
  },
  
});
