<template>
  <div id="app">
     <Header />
     <!-- <div id="contents">
        <router-view> </router-view>
     </div> -->
     <!-- <Footer /> -->
  </div>
</template>
<script>
import Header from './components/Header';

export default {
  name: "app",
  components: {
    Header
  }
}
</script>
<style lang="scss">
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: Poppins,antialiased;
  -moz-osx-font-smoothing: Poppins,grayscale;
  text-align: center;
  // color: #2c3e50;
}

// #nav {
//   background-color: $bg;
//   padding-top: 0.2rem ;
//   padding-bottom: 0.4rem ;
//   height: $nav-height;
//   margin-bottom: 0;

//   a.nav-link {
//     color: $a;
//     font-size: $a_font;

//     display: inline-block;
//     position: relative;
//     margin: 0 2rem;

//     &:hover {
//       color : $a_hover;
//     }
//     &.active {
//       color: $a_active;
//       font-size: $a_font;
//    }
//     &.active::after {
//       position: absolute;
//       content: "";
//       display: block;
//       left: auto;
//       width: 0;
//       border-bottom: solid 0.4rem $a_activeLine;
//       transition: 0.2s all ;
//       border-image-slice: 1;
//       width: 30%;
//       left: 35%;
//       padding-top: 1rem;
//     }
//   }
// }
</style>
