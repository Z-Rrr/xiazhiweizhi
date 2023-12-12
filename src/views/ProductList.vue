<template>
  <div class="product-list">
    <table class="table">
      <thead>
        <tr>
          <th>编号</th>
          <th>图片</th>
          <th>图书名称</th>
          <th>作者</th>
          <th>价格</th>
          <th>    </th> <!-- 添加一个表头用于放置按钮 -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td><img :src="item.picture" width="80"/></td>
          <td>{{ item.name }}</td>
          <td>{{ item.author }}</td>
          <td>￥{{ item.price }}</td>
          <td>
            <button @click="addToCart(item)">加入购物车</button> <!-- 添加按钮 -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="cart-status">
      购物车中有 {{ cartItemsCount }} 件商品
  </div>
</template>
  
  <script>
  export default {
    // 这里是JavaScript逻辑
    data(){
      return{
        list:[
         {id:1,name:'《Vue.js 3.0项目开发实战》',author:'[中] 张帆',price:49.90,picture: 'https://img14.360buyimg.com/n0/jfs/t1/157681/23/28339/57178/6494327bFddea0f6e/257c2861d919c896.jpg'},
         {id:2,name:'《深入浅出Vue.js》',author:'[中] 刘博文',price:58.80,picture: 'https://img14.360buyimg.com/n0/jfs/t1/140181/21/40207/40320/650a861bF5f5b86fe/2e54479d2efb214f.jpg'},
         {id:3,name:'《Vue.js从入门到精通》',author:'[中] 明日科技',price:44.90 ,picture: 'https://img14.360buyimg.com/n0/jfs/t1/216898/39/33738/87144/64a24165F6b3d3f3e/2d767a16229160a1.jpg'},
         {id:4,name:'《深入实战Vue开发》',author:'[中] 殷荣桧',price:44.10 ,picture: 'https://img14.360buyimg.com/n0/jfs/t1/201355/28/6293/63576/613af58fE2a597cfa/46206f512c6b3792.jpg'},
         {id:5,name:'《HTML5动画制作神器》',author:'[中] 张晓景',price:61.40,picture: 'https://img14.360buyimg.com/n0/jfs/t5041/36/1486995755/592920/c3e9b20a/58f0f808N15c3421d.jpg'},
         {id:6,name:'《沉思录》',price:18.30,author:'[古罗马] 玛克斯·奥勒留',picture: 'https://img14.360buyimg.com/n0/jfs/t1/50822/20/375/124157/5cd4f3c5E18d0cd81/2fd5f60604909f5d.jpg'},
         {id:7,name:'《生命之书》',price:35.60,author:'[印度] 克里希那穆提 ',picture: 'https://img14.360buyimg.com/n0/jfs/t1/70219/21/8371/422744/5d64c267Ec8744da4/5a8dd9628212d93a.jpg'},
         {id:8,name:'《了凡四训》',price:25.50,author:'[中] 袁了凡 ',picture: 'https://img14.360buyimg.com/n0/jfs/t1/216164/7/34673/55129/64b77b15Fc1e3a21c/dc2dfbf0c8812756.jpg'},
         {id:9,name:'《查拉图斯特拉如是说》',author:'[德] 尼采',price:39.00,picture: 'https://img14.360buyimg.com/n0/jfs/t1/151832/12/8924/264179/5fd015b6Efbecb05b/23448b4f9fe1194a.jpg'},
         {id:10,name:'《社会心理学》',price:82.60,author:'[美] 戴维·迈尔斯',picture: 'https://img14.360buyimg.com/n0/jfs/t6037/142/729241766/490719/78a3a9bf/592bf16dN50326aad.jpg'},
         {id:11,name:'《月亮与六便士》',author:'[英] 毛姆',price:61.40,picture: 'https://img14.360buyimg.com/n0/jfs/t1/99340/19/32929/81871/63085eb8Eaf902506/d4dcc15dd42a2f8b.jpg'},
         {id:12,name:'《杀死一只知更鸟》',author:'[美] 哈珀·李',price:33.90 ,picture: 'https://img14.360buyimg.com/n0/jfs/t1/214904/28/21761/88048/634516d2E96f1eb25/93d894a1152b229e.jpg'},
         {id:13,name:'《从零开始的女性主义》',author:'[日] 上野千鹤子',price:26.00,picture: 'https://img14.360buyimg.com/n0/jfs/t1/213970/21/23197/51818/636e72e5E8da2341e/5ae257850d605449.jpg'},
         {id:14,name:'《自由在高处》',author:'[中] 熊培云',price:31.50,picture: 'https://img14.360buyimg.com/n1/s546x546_jfs/t1/34765/4/21056/170007/63e48a72F19fc93d2/ca4cf677d7ab1751.png'},
         {id:15,name:'《小王子》',author:'[法] 安东尼·德·圣埃克苏佩里',price:29.70,picture: 'https://img14.360buyimg.com/n0/jfs/t1/179768/1/27938/63110/63e34368F62a2a859/ea97c5fbb820a6fc.jpg'},
        ],
        // 购物车列表
        cart: []
      };
    },
    methods:{
      addToCart(item) {
        // 在这里实现添加到购物车的逻辑
        this.$store.commit('addToCart', item);
      }
    },
    computed: {
      cartItemsCount() {
        return this.$store.state.cart.length;
      }
    }
  };
  </script>
  
  <style>
  /* 这里是CSS样yles */
  table{
    width: 90%;
    border-spacing: 0;
    margin: auto auto;
  }
  img{
        
        width: 150px;
        height: 100px;
        object-fit: contain;
        vertical-align: middle;
      }
      th{
        width: 100px;
        background:rgb(19, 155, 105) ;
        border-bottom: 2px solid rgb(105, 169, 105);
        font-size: 1.2rem; /* 字体大小 */
        font-weight: bold; /* 字体粗细 */
      }
      td{
        border-bottom: 1px dashed #ccc;
        font-size: 1rem; /* 字体大小 */
        font-weight: bold; /* 字体粗细 */
      }
      td,
      th{
        text-align: center;
        padding: 10px;
        transition: all .5s;
  }
  body {
  background-image: url('E:\WTQ\Html小组作业\xiazhiweizhi\images\ProductList.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }
  
  .cart-status {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
}

.product-list {
  background-image: url('E:\WTQ\Html小组作业\xiazhiweizhi\images\ProductList.png');
  background-size: cover;
  background-attachment: fixed; /* 背景随滚动而滚动 */
  background-position: center;
  background-repeat: no-repeat;
}
  </style>