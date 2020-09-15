<template>
  <div id="app">
    <Navbar />
    <transition
      name="router-anim"
      enter-active-class="animate__animated animate__zoomIn"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
  import Navbar from './components/Navbar'
  export default {
    components: {
      Navbar
    }
  }
  // jklkai yia o
</script>
<style lang="scss">
  @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
  @import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Poppins:wght@200;400&display=swap');
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 10px;
  }
  .animate__zoomIn {
    animation-duration: 1s;
  }
  .page {
    width: inherit;
  }
</style>
