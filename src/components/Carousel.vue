<template>
  <vueper-slides
    autoplay
    duration="8000"
    :bullets="false"
    :slide-ratio="1 / 2.35"
    class="no-shadow"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :style="true"
    />
    <template v-slot:pause>
      <i class="icon pause_circle_outline"></i>
    </template>
  </vueper-slides>
</template>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides';
  import '../Scss/carousel.css';
  export default {
    components: {
      VueperSlides,
      VueperSlide
    },
    data: () => ({
      internalAutoPlaying: true,
      slides: [
        {
          image: require('../assets/1.jpg')
        },
        {
          image: require('../assets/2.jpg')
        }
        // Other slides...
      ]
    })
  };
</script>

<style lang="scss">
  /* Added by me */
  @import '../Scss/config.scss';

  .vueperslides__arrow:hover {
    box-shadow: 0px 0px 5px 5px lighten($primary-color, 50);
  }
  .vueperslides__arrows {
    color: $primary-color;
  }

  // Responsive section
  @include mediaMd {
    .vueperslide {
    }
    .vueperslides__arrows {
      font-size: 0.3rem;
    }
  }
</style>
