<template>
    <nav v-if="showNav">
        <router-link to="/">夏至未至</router-link> |
        <router-link to="/ProductList">商品列表</router-link> |
        <router-link to="/Cart">购物车</router-link> 
    </nav>
  <router-view/>
</template>

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

<script>
export default {
  computed: {
    showNav() {
      // 只有当当前路由不是HomePage时才显示导航栏
      return this.$route.name !== 'home';
    }
  }
};
</script>