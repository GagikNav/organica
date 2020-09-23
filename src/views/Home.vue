<template>
  <div class="home page animate__animated animate__zoomIn">
    <Navbar v-on:btnClicked="isShowMenu()" />
    <MobileMenu :isMenuOpen="isMenuOpen" />
    <Carousel />
    <Text1 />
    <Cards1 />
    <Banner />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '../components/Carousel';
  import Navbar from '../components/Navbar';
  import Text1 from '../components/Text-1';
  import Cards1 from '../components/Cards-1';
  import Banner from '../components/Banner';
  import MobileMenu from '../components/MobileMenu';
  import Footer from '../components/footer/Footer';
  export default {
    name: 'Home',
    components: {
      Navbar,
      Carousel,
      Text1,
      Cards1,
      Banner,
      MobileMenu,
      Footer
    },
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      isShowMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
</script>

<style lang="scss">
  @import '../Scss/config';
</style>
