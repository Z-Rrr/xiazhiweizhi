<template>
    <div>
      <h2>结算页面</h2>
      <div v-if="cartItems.length > 0">
        <h3>购物车内容</h3>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.name }} - 数量: {{ item.quantity }}
          </li>
        </ul>
        <p>购物车总价值：￥{{ calculateTotalPrice }}</p>
      </div>
      <div v-else>
        <p>购物车为空</p>
      </div>
      
      <button @click="wechatPay">微信支付</button>
      <button @click="alipay">支付宝支付</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        return this.$store.state.cart;
      },
      calculateTotalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      }
    },
    methods: {
      wechatPay() {
        // 实现微信支付逻辑
        alert("发起微信支付");
      },
      alipay() {
        // 实现支付宝支付逻辑
        alert("发起支付宝支付");
      }
    }
  };
  </script>
  
  <style>
  /* 样式可以根据需要添加 */
  </style>
  