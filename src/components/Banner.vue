<template>
  <div class="banner">
    <div class="main-image"></div>
    <div class="presentaion">
      <div class="main-text-container">
        <h1 class="fancy">Why us?</h1>
        <h2 class="title">What is Organica?</h2>
        <p>
          Die nachstehende Love zeigt die health, die Banken
          bei food Kernkapitals in Love, Healthy food nach
          einschlägigen Foodlovers aus-zubuchen wäre.
        </p>
      </div>
      <div class="service-container">
        <div class="service">
          <img src="../assets/n1.png" alt="" />
          <h4>Free Shipping</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="service">
          <img src="../assets/n2.png" alt="" />
          <h4>100% Organic</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing.
          </p>
        </div>

        <div class="service">
          <img src="../assets/n3.png" alt="" />
          <h4>Scure Payment</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="service">
          <img src="../assets/n4.png" alt="" />
          <h4>Friendly Suport</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import '../Scss/config';
  .banner {
    display: flex;
    // @include border;

    background: #f5fcf9;
    // background: #888;
    height: 80vh;
    width: 100%;
    .main-image {
      width: 50%;
      height: 100%;
      background-image: url('../assets/3.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .presentaion {
      width: 50%;
      @import '../Scss/texet1';
      text-align: start;
      .main-text-container {
        padding-top: 5%;
        h2,
        h1,
        p {
          background-position: bottom left;
          width: 100%;
          margin-left: 1rem;
          letter-spacing: 1px;
        }
        h1 {
          margin-left: 1.5rem;
        }
        p {
          width: 80%;
        }
      }
      .service-container {
        // @include border;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .service {
          // @include border;
          display: grid;

          grid-template-rows: 1fr 1fr;
          grid-template-areas: 'img h4' 'img p';
          img {
            grid-area: img;
            // @include border;
            height: 80%;
            margin: 10px;
          }

          h4 {
            height: 50%;
            padding: auto;
            margin: auto 0;
            grid-area: h4;
            // background: #eee;
          }
          p {
            grid-area: p;
            height: 50%;
            width: auto;
            margin: 0 1rem 1rem 0;
            // background: #eee;
          }
        }
      }
    }
  }
</style>
