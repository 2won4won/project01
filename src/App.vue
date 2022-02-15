<template>
  <div id="app">
     <Header />
     <!-- <router-view></router-view> -->
     <!-- <Footer /> -->
  </div>
</template>
<script>
import Header from '@/components/Header';

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
  color: #2c3e50;
}
</style>
