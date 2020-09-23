<template>
  <div
    class="menu-container  "
    :class="{ show: isMenuOpen }"
  >
    <div class="links">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contacts">Contacts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isMenuOpen'],
    data() {
      return {
        isDisplayed: false
      };
    }
  };
</script>

<style scoped lang="scss">
  @import '../Scss/config';
  .menu-container {
    // @include border;
    padding: 2.5rem 0.5rem;
    opacity: 0.95;
    border-radius: 25px 0 0 25px;
    position: absolute;
    z-index: 5;
    width: 300px;
    height: 80vh;
    right: 0;
    background: white;
    transition: 0.5s ease-in-out;
    transform: translateX(400px);
    box-shadow: -2px 0 20px 2px #33333344;
    &.show {
      transform: translateX(0);
    }
    .links {
      #nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    #nav a {
      padding: 1rem;
      color: #000;
      text-decoration: none;
      margin-bottom: 1.5rem;
      &:hover {
        border-bottom: 2px solid #000;
      }
    }
    #nav a.router-link-exact-active {
      font-weight: bold;
    }
  }
</style>
