<template>
  <div id="home">
    <div class="box" id="welcome">
      <div class="imgBox">
        <div class="outer">
          <b-img :src="home01" class="imgSize100"></b-img>
            <a href="#stayUp" class="iconBox1 ">
              <b-img :src="icon01" class="iconSize1 innerB"> </b-img>
            </a>  
        </div>
      </div>
    </div> 
    <div class="box" id="play">
      <div class="imgBox">
        <b-img :src="home02" class="imgSize100"></b-img>
      </div>  
    </div> 
     <div class="box" id="claim">
      <div class="imgBox">
        <div class="outer ">
          <b-img :src="home03" class="imgSize100"></b-img>
          <!-- <div class="innerB" > -->
            <a href="#service" class="iconBox1">
              <b-img :src="icon02" class="iconSize1 innerD"> </b-img>
            </a>  
          <!-- </div> -->
        </div>
      </div>  
    </div> 
    <!-- <div class="box " id="how">
       <div class="imgBox ">
         <div class="outer">
            <b-img :src="home04" class="imgSize100"> 
            </b-img>
          <div class="inner ">
            <iframe width="90%" height="240vh" 
                    id="iframe"
                    src="https://www.youtube.com/embed/hhoP2kZ33K8" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
          </div> 
         </div> 
       </div>  
    </div>  -->
    <div class="box" id="econmics">
      <div class="imgBox">
        <b-img :src="home05" class="imgSize100"></b-img>
      </div>  
    </div> 
    <div class="box" id="distribution">
      <div class="imgBox">
        <b-img :src="home06" class="imgSize100"></b-img>
      </div>  
    </div> 
    <div class="box" id="roadMap">
      <div class="imgBox">
        <b-img :src="home07" class="imgSize100"></b-img>
      </div>  
    </div> 
    <div class="box" id="stayUp">
      <div class="imgBox">
        <div class="outer">
          <b-img :src="home08" class="imgSize100"></b-img>
          <div class="innerC">
            <div class="alignC">
              <div id="w1" class="iconBox2">
                <a href="" download >
                  <!-- <img src="/images/myw3schoolsimage.jpg"> -->
                  <b-img :src="icon03" class="iconSize3" ></b-img>
                </a>  
              </div>
              <div id="w1" class="iconBox2">
                <a href="" download >
                  <!-- <img src="/images/myw3schoolsimage.jpg"> -->
                  <b-img :src="icon04" class="iconSize3" ></b-img>
                </a>  
              </div>
              <div id="w3" class="iconBox2">
                <b-button  v-b-modal.ms1 >
                  <b-img :src="icon05" class="iconSize3 wiconBox"></b-img>
                </b-button>
                <b-modal    id="ms1" 
                            ref="mymodal"
                            scrollable 
                            fade
                            hide-header-close
                            :title="title1"
                > 
                    <div id="modalContents" > <OnePageEng /> </div>
                    <template #modal-footer >
                          <!-- block: 전체 길이 -->
                        <b-button class="mt-3 modalBtn" block variant="light" @click="hideModal"> 닫기 </b-button>     
                    </template>      
                </b-modal>
              </div>
              <div id="w4" class="iconBox2"> 
                <b-button  v-b-modal.ms2  >
                  <b-img :src="icon06" class="iconSize3 wiconBox"></b-img>
                </b-button>  
                  <!-- ref=hide 연결 -->
                  <!-- 모달창 크기는 @media에서 확인 -->
                  <b-modal id="ms2" 
                            ref="mymodal"
                            scrollable 
                            fade
                            hide-header-close
                            :title="title2"
                  > 
                    <div id="modalContents" > <OnePageKor /> </div>
                    <template #modal-footer >
                          <!-- block: 전체 길이 -->
                        <b-button class="mt-3 modalBtn" block variant="light" @click="hideModal"> 닫기 </b-button>     
                    </template>      
                  </b-modal>
              </div> 
            </div>
          </div>
        </div>
      </div>  
    </div> 
  </div>
</template>

<script>
import OnePageKor from './OnePageKor.vue';
import OnePageEng from './OnePageEng.vue';

export default {
  name: "Home",
  components: {
    OnePageKor, OnePageEng,
  },
  data() {
    return {
        home01: require ('../assets/body/home01.png'),
        home02: require ('../assets/body/home02.png'),
        home03: require ('../assets/body/home03.png'),
        home04: require ('../assets/body/home04.png'),
        home05: require ('../assets/body/home05.png'),
        home06: require ('../assets/body/home06.png'),
        home07: require ('../assets/body/home07.png'),
        home08: require ('../assets/body/home08.png'),
        icon01: require ('../assets/icons/icon01.png'),
        icon02: require ('../assets/icons/icon02.png'),
        icon03: require ('../assets/icons/icon03.png'),
        icon04: require ('../assets/icons/icon04.png'),
        icon05: require ('../assets/icons/icon05.png'),
        icon06: require ('../assets/icons/icon06.png'),
        title1: "WONHAGO(ENG)",
        title2: "WONHAGO(KOR)",
    }
  },
  methods: {
    hideModal() {
      this.$refs['mymodal'].hide()
    }
  }
}
</script>

<style lang="scss" scoped>
//모달 내 버튼 크기(전체길이) & 색상 지정
.modalBtn {
  width: 100vw;
  min-height: 4vh;
  background-color: $bgBtn !important;
  border-block-style: none;
  color: $a;
  margin-top: 0;
  padding: 0;
}
.btn.modalBtn:hover {
  background-color: $bgBtn_hover!important; 
  color: $a !important;
}
.btn-block {
  margin: 0 !important;
}
#modalContents {
  padding-left:  0.2rem;
  padding-right:  0.2rem;
}
</style>
