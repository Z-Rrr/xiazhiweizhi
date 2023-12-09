<template>
    <div>
        <h1>TheCart</h1>
        <div class="cart">
            <div v-if="cartItems.length === 0">
                <p>Cart is empty</p>
            </div>
            <div v-else>
                <ul>
                    <li v-for="(item, index) in cartItems" :key="index">
                        {{ item.name }} - rmb{{ item.price }}
                        <button @click="removeItem(index)">remove</button>
                    </li>
                </ul>
                <p>Total: rmb{{ getTotalPrice() }}</p>
            </div>
        </div>

        <div class="add-item">
            <h2>Add Item</h2>
            <input type="text" v-model="newItem.name" placeholder="Item Name">
            <input type="number" v-model="newItem.price" placeholder="Item Price">
            <button @click="addItem">Add to Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cartItems: [
                    { name: 'goods1', price: 50 },
                    { name: 'goods2', price: 30 },
                    { name: 'goods3', price: 25 }
                ],
                newItem: {
                    name: '',
                    price: 0
                }
            };
        },
        methods: {
            removeItem(index) {
                this.cartItems.splice(index, 1);
            },
            getTotalPrice() {
                return this.cartItems.reduce((total, item) => total + item.price, 0);
            },
            addItem() {
                if (this.newItem.name && this.newItem.price > 0) {
                    this.cartItems.push({
                        name: this.newItem.name,
                        price: this.newItem.price
                    });
                    this.newItem.name = '';
                    this.newItem.price = 0;
                }
            }
        }
    };
</script>

<style>
    /* 一些基本样式 */
    .cart {
        border: 1px solid #ccc;
        padding: 20px;
        margin-top: 20px;
    }

        .cart ul {
            list-style: none;
            padding: 0;
        }

        .cart li {
            margin-bottom: 10px;
        }

    .add-item {
        margin-top: 20px;
    }
</style>
