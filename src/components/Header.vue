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
          <!-- xs만 안보임: logo 이미지삽입 -->
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
     border-bottom: solid 0.3rem $t2;
    //  border-bottom: solid 0.2rem transparent;
     //linear-gradient
     border-bottom-width: 0.2rem;
    //  border-image: linear-gradient(to right,  rgba(87,93,92,0.10688025210084029) 11%, rgba(255,255,255,1) 27%, rgba(36,56,59,1) 45%, rgba(255,255,254,1) 67%, rgba(21,25,36,0.21332282913165268) 88%);
    //  border-image: linear-gradient(to right,  #FA8BFF 30%, #2BD2FF 75%, #2BFF88 70%);
     transition: 0.2s all ;
    //  transition: width 0.3s ease 0s, left 0.1s ease 0s ;
     border-image-slice: 1;
   }
   a.nav-link:hover {
     color: $a_hover;
     font-size: $a_font ;
   }  
  //  hover 밑줄 길이 조절
   a.nav-link:hover::after {
      width: 50%;
      left: 25%;
    }
   
</style>
