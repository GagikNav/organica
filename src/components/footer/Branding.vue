<template>
  <div class="branding">
    <div class="branding-inner">
      <router-link to="/about" class="logo-link">
        <img
          src="../../../public/Favicon/logo.png"
          alt=""
          title="Organica"
        />
      </router-link>

      <div class="about-content">
        Fusce dapibus, tellus ac cursus commodo, tortor
        mauris condimentum nibh, ut fermentum massa justo
        sit amet risus. Curabitur blandit tempusporttitor
        nullam quis.
      </div>
    </div>
  </div>
</template>

<script>
  // import GreenSpreator from '../GreenSpreator'
  export default {
    components: {}
  }
</script>

<style scoped lang="scss">
  @import '/src/Scss/config';

  .branding {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    max-width: 25rem;
    padding: 1rem;
    border: 7px solid #e8dac799;
    -webkit-box-shadow: 0px 7px 24px 0px #bbaf9f9e;
    -moz-box-shadow: 0px 7px 24px 0px #bbaf9f9e;
    box-shadow: 0px 7px 24px 0px #bbaf9f9e;
    .logo-link {
      img {
        width: 15rem;
        margin: 1rem auto;
      }
    }
    .about-content {
      @include paragraph;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      right: 0;
      height: 15rem;
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: 90%;

      background-image: url('../../assets/png5_a17429d5-8fed-4566-ac17-09f4e684ffe6.png');
    }
  }
</style>
