<template>
  <div id="header" >
    <!-- 네비바 상단 고정 : class="fixed-top" -->
    <b-container fluid id="navBox" class="fixed-top">
      <!-- xs에서 안보임: logo 이미지삽입 -->
      <div class="d-none d-sm-block">
        <div> <b-img :src="logo" class="logoSize"></b-img>  </div> 
      </div>
      <!-- 메뉴바 -->
      <div id="nav" >
        <b-navbar toggleable="sm" type="dark" >
          <div >
            <!-- xs 에서만 보임: logo 이미지삽입 -->
            <div class="d-block d-sm-none" id="logoBox"> 
              <b-img :src="logo" id="logoIcon"></b-img>  
              <b-img :src="nav"></b-img> 
            </div> 
            <b-navbar-toggle target="nav-collapse">
              <!-- <b-img :src="nav"></b-img>  -->
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav >
                    <!-- class="d-flex flex-md-row flex-xl-column" -->
              <b-navbar-nav id="navList"  v-b-scrollspy:list>
                <b-nav-item href="#home"> HOME </b-nav-item>
                <!-- <b-nav-item to="/" > HOME </b-nav-item> -->
                <b-nav-item href="https://test.wonhago.com" 
                            target="_blank" > SERVICE </b-nav-item>
                <b-nav-item href="#team" >TEAM </b-nav-item>
                <b-nav-item href="#contact" >CONTACT </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
          <!-- 핸드폰 -->
          <div class="d-block d-sm-none"> 
            <template>
                <div>
                  <b-button v-b-toggle.sidebar>
                      <b-icon icon="list" id="listIcon" class="iconSize">  </b-icon>
                      <!-- <b-img :src="nav" id="listIcon" class="iconSize">  </b-img> -->
                  </b-button>
                  <b-sidebar id="sidebar" 
                            title = "WONHAGO"
                            shadow
                            backdrop
                >
                    <!-- <template #default="{ hide }"> -->
                      <div class="p-3">
                        <!-- <h4 id="sidebar-no-header-title">Custom header sidebar</h4> -->
                        <!-- <nav class="mb-3"> -->
                              <b-nav  id="navList" vertical v-b-scrollspy:list>
                                <b-nav-item href="#home"  >HOME </b-nav-item>
                                <b-nav-item href="https://test.wonhago.com" 
                                             target="_blank">SERVICE </b-nav-item>
                                <b-nav-item href="#team" >TEAM </b-nav-item>
                                <b-nav-item href="#contact" >CONTACT </b-nav-item>
                              </b-nav>
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
        <Team id="team" /> 
        <Contact id="contact" />
         <!-- <b-nav-item href="/home" id="home"></b-nav-item>
        <b-nav-item href="/contact" id="contact"></b-nav-item> -->
      </div> 
    </b-container>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";
import Team from "@/views/Team.vue";
import Contact from "@/views/Contact.vue";
export default {
  name: 'Header',
  components: {
    Home,
    Team,Contact
  },
  data() {
    return {
      logo: require ('../assets/images/logo.png'),
      nav: require ('../assets/images/nav.png'),
    }
  },
  
}
</script>
<style lang="scss">
//contents height 
#header{
  height: calc($nav_height + $logo_height ) ;
}
.logoSize {
  padding: 1rem;
  height: $logo-height ;
  object-fit: contain ;
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
    background-color: $bg;
    padding-top: 0.2rem ;
    padding-bottom: 0.4rem ;
    height: $nav-height;
    margin-bottom: 0;
    a.nav-link {
      color: $a;
      font-size: $a_font;

      display: inline-block;
      position: relative;
      margin: 0 2rem;

      &:hover {
        color : $a_hover;
      }
      &.active {
        color: $a_active;
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
        padding-top: 1rem;
      }
    }
}
</style>
