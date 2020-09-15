<template>
  <div
    class="nav-container animate__animated animate__zoomIn"
  >
    <a href="/home"
      ><div class="logo">
        <img
          src="../../public/Favicon/logo.png"
          alt=""
        /></div
    ></a>
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
  export default {}
</script>

<style lang="scss" scoped>
  .nav-container {
    .links {
      height: 10vh;
      display: flex;
      flex-direction: column;
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
</style>
