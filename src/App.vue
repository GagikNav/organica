<template>
  <div id="app">
    <transition
      name="router-anim"
      enter-active-class="animate__animated animate__zoomIn"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
  export default {
    components: {}
  }
  // jklkai yia o
</script>
<style lang="scss">
  @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
  @import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Poppins:wght@200;400&display=swap');
  @import './Scss/config';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 10px;
  }
  html,
  body {
    position: relative;
    overflow-x: hidden;
  }
  .animate__zoomIn {
    animation-duration: 1s;
  }
  .page {
    width: inherit;
  }
</style>
