<template>
  <div id="header" >
    <!-- 네비바 상단 고정 : class="fixed-top" -->
    <b-container fluid id="navBox" class="fixed-top">
      <!-- xs에서 안보임: logo 이미지삽입 -->
      <div class="d-none d-sm-block">
        <div> <b-img :src="logo"></b-img>  </div> 
      </div>
      <!-- 메뉴바 -->
      <div id="nav" >
        <b-navbar toggleable="sm" type="dark"  >
        <!-- <b-navbar-brand> wonhago </b-navbar-brand> -->
          <!-- xs 에서만 보임: logo 이미지삽입 -->
          <div class="d-block d-sm-none"> 
            <b-img :src="logo"></b-img>  
          </div> 
          
          <!-- 메뉴바 -->
         <b-navbar-toggle target="nav-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
         </b-navbar-toggle>
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
                <b-button v-b-toggle.sidebar-footer >
                    <b-img :src="menu" class="iconSize">  </b-img>
                </b-button>
                <b-sidebar id="sidebar-footer" 
                           aria-label="Sidebar with custom footer" 
                           no-header shadow >
                  <template #default="{ hide }">
                    <div class="p-3">
                      <!-- <h4 id="sidebar-no-header-title">Custom header sidebar</h4> -->
                      <nav class="mb-3">
                            <b-nav  id="navList" vertical v-b-scrollspy:list>
                              <b-nav-item href="#home"  >HOME </b-nav-item>
                              <b-nav-item href="#service">SERVICE </b-nav-item>
                              <b-nav-item href="#team" >TEAM </b-nav-item>
                              <b-nav-item href="#contact" >CONTACT </b-nav-item>
                            </b-nav>
                      </nav>
                      <b-button block @click="hide">닫기</b-button>
                    </div>
                  </template>
              
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
  Service, Team, Contact, Home
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
    // view 화면 배경색과 글자색 제어
    #list {
      // background-color: $bg;
      // width: 100vw;
      // height: 100vh;
      // max-width: 100%;
      // max-height: 100%;
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
    font-weight: bold;
    color: $a;
    font-size: $a_font;
    padding-bottom: 0;

    display: inline-block;
    position: relative;
    margin: 0;

    &.active {
      color: $a_active;
      font-weight: bolder ;
      font-size: $active_font;
   }
  }
   a.nav-link::after {
     //inline-block & bolck
     position: absolute;
     content: "";
     display: block;
     left: auto;
     width: 0;
     border-bottom: solid 0.1rem $a_hover;
     border-bottom-width: 0.1rem;
     transition: 0.2s all ;
     border-image-slice: 1;
   }
   a.nav-link:hover {
     color: $a_hover;
     font-size: $a_font ;
   }  
  //  hover 밑줄 길이 조절
   a.nav-link:hover::after {
      width: 40%;
      left: 30%;
    }
   
</style>
