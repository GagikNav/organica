<template>
  <div class="home page animate__animated animate__zoomIn">
    <Carousel />
    <Text1 />
    <Cards1 />
    <Banner />
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '../components/Carousel'
  import Text1 from '../components/Text-1'
  import Cards1 from '../components/Cards-1'
  import Banner from '../components/Banner'
  import Footer from '../components/footer/Footer'
  export default {
    name: 'Home',
    components: {
      Carousel,
      Text1,
      Cards1,
      Banner,
      Footer
    }
  }
</script>
<style lang="scss">
  .footer {
  }
</style>
