import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
  },
  mutations: {
    addToCart(state, item) {
      const existingItem = state.cart.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
