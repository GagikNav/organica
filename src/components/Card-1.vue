<template>
  <div class="card">
    <div class="title">
      <div class="img">
        <img
          src="../assets/card1.png"
          height="130"
          width="130"
          style="border-radius: 50%"
        />
      </div>
      <h2>{{ card.title }}</h2>
    </div>
    <div class="green-spreator">
      <div class="line"></div>
      <div class="dot"></div>
    </div>
    <p>{{ card.paragraph }}</p>
  </div>
</template>

<script>
  export default {
    methods: {
      getImgUrl(pic) {
        return '../assets/' + pic
      }
    },
    props: ['card'],
    data() {
      return {
        pic: 'card1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../Scss/config';

  .card {
    // background: #bbb;
    width: 25%;
    p {
      @include paragraph;
      width: 80%;
      margin: 1rem auto;
    }
    .green-spreator {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15%;
      margin: auto;
      .line {
        width: 80%;
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
  }
</style>
