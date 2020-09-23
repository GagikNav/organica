// This Component is useing Animat.css
<template>
  <div
    class="main"
    :class="{
      closed: isBtnClosed
    }"
    @click="changeClass"
  >
    <span
      class="first"
      :class="{ closed: isBtnClosed }"
    ></span>
    <span
      class="secound  animate__animated animate__fadeInLeft"
      :class="{
        closed: isBtnClosed,
        'animate__animated animate__fadeOutLeft': isBtnClosed
      }"
    ></span>
    <span
      class="third"
      :class="{ closed: isBtnClosed }"
    ></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isBtnClosed: false
      }
    },
    methods: {
      changeClass: function() {
        this.isBtnClosed = !this.isBtnClosed
        this.$emit('btnClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    position: absolute;
    cursor: pointer;
    right: 25px;
    top: 50px;
    height: 20px;
    width: 35px;

    span {
      transition: 0.6s;

      position: absolute;
      height: 2px;
      width: 100%;
      right: 0px;
      background: black;
      border-radius: 20px;
    }
    span.closed {
      transition: 0.6s;
      position: absolute;
      height: 3px;
      width: 100%;
      right: 0px;
      border-radius: 20px;
    }
    .first {
      position: absolute;
      bottom: 100%;
    }
    .first.closed {
      position: absolute;
      bottom: 100%;
      transform: rotate(135deg) translate(5px, -5px);
    }
    .secound {
      position: absolute;
      bottom: 50.5%;
    }
    .third {
      position: absolute;
      bottom: 0%;
    }
    .third.closed {
      position: absolute;
      bottom: 0%;
      transform: rotate(-135deg) translate(9px, 9px);
    }
  }
</style>
