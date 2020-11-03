<template>
  <div class="follow-layout">
    <h3 class="footer-title">
      Follow Me
    </h3>
    <GreenSpreator />
    <ul class="follow-content">
      <li class="socialLinks-item">
        <a
          href="https://www.facebook.com"
          title="Facebook"
          class="icon-social facebook"
          ><i class="fa fa-facebook"></i>
          <span>Facebook</span></a
        >
      </li>
      <li class="socialLinks-item">
        <a
          href="https://twitter.com"
          class="icon-social twitter"
          ><i class="fa fa-twitter"></i>
          <span>Twitter</span></a
        >
      </li>

      <li class="socialLinks-item">
        <a
          href="https://www.pinterest.com"
          title="Pinterest"
          class="icon-social pinterest"
          ><i class="fa fa-pinterest"></i>
          <span>Pinterest</span></a
        >
      </li>
      <li class="socialLinks-item">
        <a
          href="https://instagram.com"
          title="Instagram"
          class="icon-social instagram"
          ><i class="fa fa-instagram"></i>
          <span>Instagram</span></a
        >
      </li>
      <li class="socialLinks-item">
        <a
          href="https://www.youtube.com"
          title="Youtube"
          class="icon-social youtube"
          ><i class="fa fa-youtube"></i>
          <span>Youtube</span></a
        >
      </li>
      <li class="socialLinks-item">
        <a
          href="http://wordpress.org"
          title="Wordpress"
          class="icon-social wordpress"
          ><i class="fa fa-wordpress"></i>
          <span>Wordpress</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
  import GreenSpreator from '../GreenSpreator';
  export default {
    components: {
      GreenSpreator
    }
  };
</script>

<style scoped lang="scss">
  @import '/src/Scss/config';
  .follow-layout {
    width: 35%;
    max-width: 15rem;
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
    @media screen and (max-width: 990px) {
      width: 50%;
      font-size: 0.8rem;
      span {
        font-size: 0.8rem;
      }
      ul {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        font-size: 0.7rem;
        margin: 0;
        padding: 0 auto;
        li {
          i {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
</style>
