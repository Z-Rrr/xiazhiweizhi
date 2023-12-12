<template>
  <div>
    <h2>购物车</h2>
    <table class="cart-table">
      <thead>
        <tr>
          <th>商品</th>
          <th>价格</th>
          <th>数量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index">
          <td>
            <img :src="item.picture" class="cart-item-image"/>
            {{ item.name }}
          </td>
          <td>￥{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <p class="total-price">购物车总价值：￥{{ calculateTotalPrice }}</p>
    <button @click="goToAccountPage" class="checkout-button">结算</button>
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
    goToAccountPage() {
      this.$router.push({ name: 'AccountPage' });
    }
  }
};
</script>

<style>
.cart-table {
  position: relative;
}

.cart-item-image {
  width: 50px; /* 或你需要的尺寸 */
  height: auto;
}

.total-price {
  color: red;
  font-size: 1.5rem; /* 增加字体大小 */
  font-weight: bold; /* 加粗字体 */
}

.checkout-button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 100px; /* 可以根据需要调整按钮与容器边缘的距离 */
  padding: 15px 15px;
  font-size: 2rem;
  background-color: #4CAF50;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


</style>
