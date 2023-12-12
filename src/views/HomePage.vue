<template>
  <div class="container">
    <div class="title-container">
      <h1 class="title">夏至未至-书店</h1>
    </div>
    <div class="button-container">
      <!-- 添加一个居中的按钮，点击后跳转到目标页面 -->
      <button class="gradient-button" @click="goToTargetPage">进入</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToTargetPage() {
      this.$router.push({ name: 'ProductList' });
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-image: url('E:\WTQ\Html小组作业\xiazhiweizhi\images\HomePage.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.title-container {
  flex: 0 0 auto; 
  align-self: stretch; 
}

.title {
  text-align: center;
  margin-top: 50px;
  font-size: 5rem;
  background: -webkit-linear-gradient(green, yellow, orange);
  background-clip: text;
  color: transparent;
  animation: fadeIn 2s ease-in-out;
}

.button-container {
  flex: 1 0 auto; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.gradient-button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 5px;
  color: black;
  background-image: linear-gradient(to right, green, yellow, orange);
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}

</style>
