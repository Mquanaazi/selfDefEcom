<template>
  <router-view/>
  <FooterComp/>
  <NavBar/>
  <router-link to="/products">Products</router-link>
</template>
<script>
  import NavBar from './components/NavbarComp.vue';
  import FooterComp from './components/FooterComp.vue';
  import SpinnerComp from './components/SpinnerComp1.vue';
  import CardComp from './components/CardComp.vue';
export default {
  components: {
    NavBar,
    FooterComp,
    SpinnerComp,
    CardComp,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<!-- ________________________________________________________________________________ -->
<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/fruits">Fruits</router-link> |
    <div v-if="!$cookies.get('token')">
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Sign Up/Sign In</router-link>
      </div>
    <div v-else>
      <button @click="logOut()">Logout</button>
    </div>
  </nav>
  <router-view/>
</template>
<script>
export default{
  methods:{
    logOut(){
      this.$cookies.remove('token')
      location.reload();
      }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2C3E50;
}
nav a.router-link-exact-active {
  color: #42B983;
}
</style> -->







