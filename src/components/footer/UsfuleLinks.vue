<template>
  <div class="linklist-layout">
    <h3 class="footer-title">
      Userful Links
    </h3>
    <GreenSpreator />
    <ul class="linklist-content">
      <li>
        <router-link to="/about">About Us</router-link>
      </li>

      <li>
        <a href="https://www.gagik.me/" target="_blank"
          >Portfolio</a
        >
      </li>

      <li>
        <a href="#">Terms Of Service</a>
      </li>

      <li>
        <a href="#">Privacy Policy</a>
      </li>

      <li>
        <router-link to="/contacts">Contacts</router-link>
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
  .linklist-layout {
    width: 35%;
    max-width: 15rem;
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
      display: none;
    }
  }
</style>
