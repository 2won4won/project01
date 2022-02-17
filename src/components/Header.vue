<template>
  <div id="header" >
    <!-- 네비바 상단 고정 : class="fixed-top" -->
    <b-container fluid id="navBox" class="fixed-top">
      <!-- xs에서 안보임: logo 이미지삽입 -->
      <div class="d-none d-sm-block" id="logoBox">
        <div> <b-img :src="logo" id="logoSize" class="iconSize"></b-img>  </div> 
      </div>
      <!-- 메뉴바 -->
      <div id="nav" >
        <b-navbar toggleable="sm" type="dark"  >
        <!-- <b-navbar-brand> wonhago </b-navbar-brand> -->
          <!-- xs 에서만 보임: logo 이미지삽입 -->
          <div class="d-block d-sm-none"> 
            <b-img :src="logo" id="logoIcon" ></b-img>  
          </div> 
         <b-collapse id="nav-collapse" is-nav >
                   <!-- class="d-flex flex-md-row flex-xl-column" -->
            <b-nav  id="navList"  v-b-scrollspy:list>
              <b-nav-item href="#home"  >HOME </b-nav-item>
              <b-nav-item href="#service">SERVICE </b-nav-item>
              <b-nav-item href="#team" >TEAM </b-nav-item>
              <b-nav-item href="#contact" >CONTACT </b-nav-item>
            </b-nav>
          </b-collapse>
         <div class="d-block d-sm-none"> 
          <template>
              <div>
                <b-button v-b-toggle.sidebar>
                    <b-img :src="menu" id="listIcon" class="iconSize">  </b-img>
                </b-button>
                <b-sidebar id="sidebar" 
                           title = "WONHAGO"
                           shadow
                           backdrop
               >
                    <div class="p-3">
                      <nav class="mb-3">
                            <b-nav  id="navList" vertical v-b-scrollspy:list>
                              <b-nav-item href="#home"  >HOME </b-nav-item>
                              <b-nav-item href="#service">SERVICE </b-nav-item>
                              <b-nav-item href="#team" >TEAM </b-nav-item>
                              <b-nav-item href="#contact" >CONTACT </b-nav-item>
                            </b-nav>
                            <!-- <b-nav> -->
                             <!-- <b-nav-item href="/team" >TEAM </b-nav-item> -->
                            <!-- </b-nav> -->
                      </nav>
                    </div>
                </b-sidebar>
              </div>
            </template>
          </div> 
         
        </b-navbar>
      </div>
      <!-- view(scrollyspy) pages -->
      <div id="list"  style="position:relative; overflow-y:auto; height:100vh" >
        <Home id="home"/>
        <Service id="service" />
        <Team id="team" />
        <Contact id="contact" />
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
    // Service, Contact, Home,
    Service, Team, Contact, Home,
  },
  data() {
    return {
      logo: require ('../assets/images/logo.png'),
      menu: require ('../assets/images/menu.png'),
    }
  },
  
}
</script>
<style lang="scss">
#logoSize {
  max-height: $logo-height ;
}
  // view 화면 배경색과 글자색 제어
  //box line 숨김
  #list {
    background-color: $bg;
  }
  #navBox {
    padding: 0 !important;
    width: 100vw;
  }
  #nav {
    background-color: $bg_nav;
    padding: 0;
  }  

  a.nav-link {
    color: $a;
    font-size: $a_font;
    padding-bottom: 0;
    font-weight: bold ;

    display: inline-block;
    position: relative;
    margin: 0;

    &.active {
      color: $a_active;
      font-weight: bolder ;
      font-size: $a_font;
   }
    &.active::after {
      position: absolute;
      content: "";
      display: block;
      left: auto;
      width: 0;
      border-bottom: solid 0.4rem $a_activeLine;
      transition: 0.2s all ;
      border-image-slice: 1;
      width: 30%;
      left: 35%;
    }
  }
   a.nav-link:hover {
     color: $a_hover;
     font-size: $a_font ;
   }  
</style>
