<template>
  <div class="green-spreator">
    <div class="line"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import '../Scss/config';
  .green-spreator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    margin: auto;
    .line {
      width: 2rem;
      margin: 3px;
      height: 2px;
      background-color: $primary-color;
    }
    .dot {
      margin: 2px;
      content: '';
      background-color: $primary-color;
      width: 2px;
      height: 2px;
    }
  }
</style>
