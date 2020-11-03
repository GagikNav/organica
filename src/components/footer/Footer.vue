<template>
  <div class="main-container">
    <div class="layout">
      <div class="newsletter">
        <div class="text">
          <h1>Subscribe</h1>
          <h2>Subscribe Newsletter</h2>
        </div>
        <form action="submit">
          <input
            type="email"
            placeholder="Email address"
            name="mail"
            required
          />
          <button class="btn-green">Submit</button>
        </form>
      </div>
    </div>
    <div class="links">
      <Contact />
      <FolowLayout />
      <UsfuleLinks />
      <Branding />
    </div>
  </div>
</template>

<script>
  import FolowLayout from '../footer/FolowLayout';
  import Branding from '../footer/Branding';
  import Contact from '../footer/Contact';
  import UsfuleLinks from '../footer/UsfuleLinks';

  export default {
    components: {
      Contact,
      UsfuleLinks,
      FolowLayout,
      Branding
    }
  };
</script>

<style scoped lang="scss">
  @import '../../Scss/config';
  .main-container {
    height: 50vh;
    width: 100%;
    padding-bottom: 15rem;
    .layout {
      position: relative;
      height: 25vh;
      min-height: 250px;
      width: 100%;
      display: flex;

      .newsletter {
        @import '../../Scss/green-button';
        height: 100px;
        width: 100%;
        padding-top: 60px;
        padding-bottom: 60px;
        padding-right: 5vw;
        padding-left: 5vw;
        background-color: #e8dac799;
        border-top: 1px solid #e8dac7;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        .text {
          text-align: start;
          margin-right: 2rem;
          z-index: 2;
          h1 {
            font-family: 'Clicker Script', cursive;
            font-size: 2.56rem;
            color: $primary-color;
          }
          h2 {
            width: auto;
            height: 5vh;
            font-size: 2rem;
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: initial;
            letter-spacing: 1px;
            line-height: 0.2;
            font-family: 'Poppins', sans-serif;
          }
          p {
            width: auto;
            margin: 1rem auto;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            color: #888;
          }
        }
        form {
          z-index: 2;
          input {
            height: 2.7rem;
            width: 20vw;
            font: 1.2em sans-serif;
            border-radius: 7px;
            outline: none;
            border: none;
          }
        }
      }
      &::after {
        position: absolute;
        right: 0;
        z-index: 1;
        content: '';
        background-image: url('../../assets/footer-2.webp');
        background-repeat: no-repeat;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        height: 25vh;
        width: 15vw;
      }
      &::before {
        z-index: 1;
        position: absolute;
        left: 0;
        content: '';
        background-image: url('../../assets/footer-1.webp');
        background-repeat: no-repeat;
        height: 25vh;
        width: 15vw;
        // @include border;
      }
    }

    .links {
      // @include border;
      margin: 0 auto;
      padding: 2rem;
      width: 80%;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 990px) {
    .main-container {
      .layout {
        .newsletter {
          flex-direction: column;
          .text {
            h1 {
              height: 2vh;
              font-size: 2rem;
              padding-bottom: 1rem;
            }
            h2 {
              height: 2vh;
              font-size: 1rem;
              padding-bottom: 0rem;
            }
          }
          form {
            input {
              width: 50vw;
              font: 1em sans-serif;
            }
          }
        }
      }
      .links {
        width: 100%;
        flex-wrap: wrap;
        margin: 0;
        padding: 0rem;
        overflow: hidden;
      }
    }
  }
</style>
