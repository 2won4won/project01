<template>
  <div id="header" >
    <!-- 네비바 상단 고정 : class="fixed-top" -->
    <b-container fluid id="navBox" class="fixed-xl-top">
      <b-row>
        <!-- main.js: 중단점 xxl 추가, _layout.scss: grid 추가 -->
        <b-col xl="12" xxl="3" id="colBox" > 
          <div id="xxlnavbar" >
          <!-- 오른쪽 정렬 : class="text-xxl-end", class="justify-content-xxl-end" -->
          <!-- logo 이미지삽입 -->
          <div class="text-xxl-end "> <b-img :src="logo"></b-img> </div> 
          <!-- 메뉴바 -->
          <div id="nav">
            <!-- to xl: 메뉴 정렬-around / xxl: layoutI 지정 -->
            <b-navbar toggleable="sm" type="dark" 
                      class="justify-content-around justify-content-xxl-end"
            >
              <b-navbar-brand> wonhago </b-navbar-brand>
              <b-navbar-toggle target="nav-collapse">
                <template #default="{ expanded }">
                  <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                  <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
              </b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav >
                      <!-- class="d-flex flex-md-row flex-xl-column" -->
                <b-nav  id="navList"  v-b-scrollspy:list  
                        class="d-flex flex-xl-row flex-xxl-column "
                >
                  <b-nav-item href="#home2"  >HOME2 </b-nav-item>
                  <!-- <b-nav-item href="#home"  >HOME </b-nav-item> -->
                  <b-nav-item href="#service">SERVICE </b-nav-item>
                  <b-nav-item href="#team" >TEAM </b-nav-item>
                  <b-nav-item href="#contact" >CONTACT </b-nav-item>
                </b-nav>
              </b-collapse>
            </b-navbar>
          </div>
          </div>
        </b-col>
        <b-col xl="12" xxl="9"> 
          <!-- view(scrollyspy) pages -->
          <div id="list"  style="position:relative; overflow-y:auto; height:100vh" >
            <Home2 id="home2"/>
            <!-- <Home id="home"/> -->
            <Service id="service" />
            <Team id="team" />
            <Contact id="contact" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import Home from "@/views/Home.vue";
import Home2 from "@/views/Home2.vue";
import Service from "@/views/Service.vue";
import Team from "@/views/Team.vue";
import Contact from "@/views/Contact.vue";

export default {
  name: 'header',
  components: {
  Service, Team, Contact, Home2
  },
  data() {
    return {
      logo: require ('../assets/images/logo.png')
    }
  },
  
}
</script>
<style lang="scss">
  #navBox {
    padding: 0 !important;
    width: 100vw;
  }
  // view 화면 배경색과 글자색 제어
  #list {
    background-color: $bg;
    color: $t1 ;
  }
  #nav {
    background-color: $bg_nav;
    padding: 0;
  }  

  a.nav-link {
    font-weight: bold;
    color: $a;
    font-size: 1.2rem;

    &:hover {
      color: $a_hover;
    }

    &.active {
      background-color: none;
      color: $a_active;
      font-weight: bolder ;
      font-size: 1.2rem;
    }
  

  }

 

</style>
