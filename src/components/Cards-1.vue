<template>
  <div class="main-contaner">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      v-bind:card="card"
    />
  </div>
</template>

<script>
  import Card from '../components/Card-1'
  export default {
    components: {
      Card
    },
    data() {
      return {
        cards: [
          {
            title: 'Natural Food',
            paragraph:
              'Lorem ipsum "ONE" dolor sit amet consectetur adipisi',
            img: `card1.png`
          },
          {
            title: 'Healthy Food',
            paragraph:
              'Lorem ipsum "TOW" dolor sit amet consectetur adipisi',
            img: `card2.png`
          },
          {
            title: 'Biologically Safe',
            paragraph:
              'Lorem ipsum "THREE" dolor sit amet consectetur adipisi',
            img: `card3.png`
          },
          {
            title: 'Biologically Safe',
            paragraph:
              'Lorem ipsum "FOUR" dolor sit amet consectetur adipisi',
            img: `card4.png`
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../Scss/config';
  .main-contaner {
    width: 80%;
    // background: #ccc;
    display: flex;
    margin: 5rem auto;
    gap: 15px;
  }
</style>
