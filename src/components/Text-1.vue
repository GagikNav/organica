<template>
  <div class="main-text-container">
    <h1 class="fancy">About Us</h1>
    <h2 class="title">Who we are</h2>
    <p>
      Die nachstehende Love zeigt die health, die Banken bei unterschiedlicher
      Höhe food Kernkapitals in Love, Healthy food mindern sollte oder falls sie
      nach einschlägigen Foodlovers aus-zubuchen wäre.
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mobileView: false
      };
    }
  };
</script>

<style scoped lang="scss">
  @import '../Scss/config';
  @import '../Scss/texet1';
  @media screen and (max-width: 990px) {
    .main-text-container {
      padding: 0;
      margin: 0;
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
</style>
