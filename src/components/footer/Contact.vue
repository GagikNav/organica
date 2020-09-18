<template>
  <div class="contact-layout ">
    <h3 class="footer-title">
      Contact Our Farm
    </h3>
    <GreenSpreator />
    <div class="contact-content">
      <p class="info">
        Fusce dapibus, tellus ac cursus commodo, tortor
        mauris condimentum nibh.
      </p>
      <ul>
        <li class="add">
          <i class="fas fa-map-marker-alt"></i>
          PO Box 16122 Collins Street West
        </li>
        <li class="call">
          <i class="fas fa-phone-alt"></i>
          +(1100) 1989 1994 0901
        </li>
        <li class="email">
          <i class="far fa-paper-plane"></i>
          Gagik.n@gmail.com
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import GreenSpreator from '../GreenSpreator'
  export default {
    components: {
      GreenSpreator
    }
  }
</script>

<style scoped lang="scss">
  @import '/src/Scss/config';
  .contact-layout {
    width: 35%;
    max-width: 25rem;
    // @include border;
    @include paragraph;
    h3 {
      color: #000;
      margin: 0.5rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      justify-content: center;
      align-items: flex-start;
      li {
        i {
          font-size: 1.1rem;
          margin: 0.2rem 0.5rem;
          color: $primary-color;
        }
        a {
          text-decoration: none;
          font-size: 1.1rem;
          color: $secondary-color;
          &:hover {
            color: $primary-color;
          }
        }
        margin: 5px;
      }
    }
  }
</style>
