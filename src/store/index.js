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
        commit("setProducts", results);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products. Please try again later.");
      }
    },
    addToCart({ commit }, product) {
      // Logic to add product to the cart
    },
  },
});
