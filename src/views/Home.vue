<template>
  <div class="home page animate__animated animate__zoomIn">
    <Carousel />
    <Text1 />
    <Cards1 />
    <Banner />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Carousel from '../components/Carousel'
  import Text1 from '../components/Text-1'
  import Cards1 from '../components/Cards-1'
  import Banner from '../components/Banner'
  export default {
    name: 'Home',
    components: {
      Carousel,
      Text1,
      Cards1,
      Banner
    }
  }
</script>
