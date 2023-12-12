<template>
  <div class="checkout-page">
    <h2 class="page-title">结算页面</h2>
    <div v-if="cartItems.length > 0" class="cart-content">
      <h3>购物车内容</h3>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - 数量: {{ item.quantity }}
        </li>
      </ul>
      <p class="total-price">购物车总价值：￥{{ calculateTotalPrice }}</p>
    </div>
    <div v-else>
      <p>购物车为空</p>
    </div>
    
    <button @click="wechatPay" class="payment-button wechat-pay">微信支付</button>
    <button @click="alipay" class="payment-button alipay">支付宝支付</button>
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

<style scoped>
/* 样式 */
.checkout-page {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.4); /* 使用 rgba 设置透明度 */
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-content {
  background-color: rgba(255, 255, 255, 0.5); /* 使用 rgba 设置透明度 */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.payment-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.wechat-pay {
  background-color: #4CAF50;
  color: #fff;
  border: none;
}

.alipay {
  background-color: #009688;
  color: #fff;
  border: none;
}
</style>
