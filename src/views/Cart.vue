<template>
    <div>
      <h2>购物车</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }}￥
        </li>
      </ul>
      <p>购物车总价值：{{ calculateTotalPrice }}￥</p>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cartItems: {
        type: Array,
        default: () => []
      }
    },
    created()  {
    // 访问传递过来的 cartItems
    console.log(this.$route.params.cartItems);
  },
    computed: {
      calculateTotalPrice() {
        
        return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
      }
    }
  };
  </script>
  
  <style>
  /* 样式 */
  </style>
  
  