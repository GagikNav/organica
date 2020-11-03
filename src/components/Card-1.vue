<template>
  <div class="card">
    <div class="title">
      <div class="img">
        <img
          :src="getImgUrl"
          height="130"
          width="130"
          style="border-radius: 50%"
        />
      </div>
      <h2>{{ card.title }}</h2>
    </div>
    <GreenSpreator />
    <p>{{ card.paragraph }}</p>
  </div>
</template>

<script>
  import GreenSpreator from './GreenSpreator';
  export default {
    components: {
      GreenSpreator
    },
    props: ['card'],
    computed: {
      getImgUrl() {
        return require(`../assets/${this.card.img}`);
      }
    },
    methods: {},

    data() {
      return {};
    }
  };
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
    @media screen and (max-width: 990px) {
      width: 40%;
      margin: auto;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1rem;
      }
      img {
        height: 100px;
        width: 100px;
      }
    }
  }
</style>
