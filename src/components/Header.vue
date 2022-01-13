<template>
  <div id="header">
    <b-container fluid  no-gutter  >
      <div id="nav" class="d-flex justify-content-around" >
      <b-navbar toggleable="sm" type="dark" >
        <b-navbar-brand> wonhago </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
           </template>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav >
          <b-navbar-nav id="navList"  v-b-scrollspy:list>
            <b-nav-item href="#nav1">HOME </b-nav-item>
            <b-nav-item href="#nav2">SERVICE </b-nav-item>
            <b-nav-item href="#nav3">TEAM </b-nav-item>
            <b-nav-item href="#nav4">CONTACT </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      </div>
      <div id="list"  style="position:relative; overflow-y:auto; height:100%" >
        <Home id="nav1"/>
        <Service id="nav2" />
        <Team id="nav3" />
        <Contact id="nav4" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import Service from "@/views/Service.vue";
import Team from "@/views/Team.vue";
import Contact from "@/views/Contact.vue";

export default {
  name: 'header',
  components: {
    Home, Service, Team, Contact
  }
}
</script>
<style lang="scss">
  #nav {
    background-color: $bg_nav;
    padding: 0;

    a {
    font-weight: bold;
    color: $font_nav_color;

    &.router-link-exact-active {
      color: $a_active;
    }
  }

  }

 

</style>
