<template>
  <div class="nav-container animate__animated animate__zoomIn">
    <a href="/home"
      ><div class="logo">
        <img src="../../public/Favicon/logo.png" alt="" /></div
    ></a>
    <div class="links">
      <div id="nav" v-if="!mobileView">
        <router-link to="/">Home</router-link>
        <router-link target="_blank" to="/portfolio"
          >Visit My Website</router-link
        >
        <router-link target="_blank" to="/about">About</router-link>
        <router-link target="_blank" to="/contacts">Contacts</router-link>
      </div>
    </div>
    <Hamburger v-if="mobileView" v-on:btnClicked="showMobileMenu()" />
  </div>
</template>

<script>
  import Hamburger from './Hamburger';
  export default {
    data() {
      return {
        mobileView: false,
        isShowMenu: false,
        closeMenu: false
      };
    },
    components: {
      Hamburger
    },
    computed: {},
    methods: {
      showMobileMenu() {
        this.isShowMenu = !this.isShowMenu;
        this.$emit('btnClicked');
      },
      handleView() {
        this.mobileView = window.innerWidth <= 990;
        window.addEventListener('resize', this.handleView);
      }
    },
    created() {
      this.handleView();
    }
  };
</script>

<style lang="scss" scoped>
  @import '../Scss/config';
  .nav-container {
    .links {
      height: 10vh;
      display: flex;
      flex-direction: column;
      // this is for placing line under nav
      justify-content: flex-end;
      align-items: center;
      z-index: 2;
      #nav {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 20px;
        width: 80vw;
      }
      &::after {
        content: '';
        border-bottom: 1px solid #222;
        width: 60%;
        filter: drop-shadow(0px 1px 1px #555);
        z-index: inherit;
        margin-bottom: 0.9rem;
      }
    }
    .logo {
      position: absolute;
      margin: 1rem 5rem;
      img {
        height: 50px;
        width: 200px;
      }
      @include mediaMd {
        margin: 2rem 0.2rem;
        img {
          height: 40px;
          width: 150px;
        }
      }
    }
  }
  #nav a {
    padding: 1rem;
    color: #000;
    text-decoration: none;
    margin-bottom: 0.9rem;
    &:hover {
      border-bottom: 2px solid #000;
    }
  }

  #nav a.router-link-exact-active {
    font-weight: bold;
  }
  @media screen and (max-width: 990px) {
    .links {
      min-height: 90px;
    }
  }
</style>
