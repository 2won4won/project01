<template>
  <div id="etc">

<div class="box" id="play">
      <div class="titleBox"> PLAY TO EARN </div>
      <div class="imgBox">
        <b-img :src="home02" class="imgSize100"></b-img>
      </div>  
    </div>  
    <div class="box" id="claim">
      <div class="titleBox"> CLAIM YOUR REWARD </div>
      <div class="imgBox">
        <b-img :src="home03" class="imgSize40"></b-img>
      </div> 
      <div class="pointerbox "> 
        <div class="hoverBox1">
          <a href="#pointarea2" >
              <b-img right :src="point2" class="piconBox"> </b-img>
              <p class="pBox"> Service </p>
          </a>  
        </div>
      </div>  
    </div>  
    <div class="box" id="how">
      <div class="titleBox"> HOW TO WORK </div>
      <div class="imgBox">
        <b-img :src="home04" class="imgSize60"></b-img>
      </div> 
    </div>  
    <div class="box" id="wont">
      <div class="titleBox"> WONT ECONOMICS </div>
      <div class="imgBox">
        <b-img :src="home05" class="imgSize100"></b-img>
      </div> 
    </div>  
    <div class="box" id="dis">
      <div class="titleBox"> WONT DISTRIBUTION </div>
      <div class="imgBox">
        <b-img :src="home06" class="imgSize100"></b-img>
      </div> 
    </div>  
    <div class="box" id="road">
      <div class="titleBox"> ROADMAP </div>
      <div class="imgBox">
        <b-img :src="home08" class="imgSize100"></b-img>
      </div> 
    </div>  
    <div class="box" id="pointarea1">
      <div class="titleBox"> STAY UP TO DATE </div>
      <div class="imgBox d-flex justify-content-around" id="wBox">
          <!-- <b-img :src="home09" class="imgSize100"></b-img> -->
          <!-- <a href='filepath'downlaod> -->
          <!-- <a href='filepath'downlaod="저장된후 이름변경"> -->
         <div id="w1" class="wiconBox">
            <a href="" download >
              <!-- <img src="/images/myw3schoolsimage.jpg"> -->
              <b-img :src="point1" ></b-img>
              <!-- <div  class="pBox"> Whitepaper(eng)</div> -->
            </a>  
        </div>
        <div id="w2">
          <a href="" download > 
            <b-img :src="point1" class="wiconBox"></b-img>
            <div class="pBox"> Whitepaper(kor)</div>
          </a>  
        </div>
        <div id="w3">
          <b-button  v-b-modal.ms1 >
          <!-- <a  v-b-modal.ms1  > -->
            <b-img :src="point1" class="wiconBox"></b-img>
            <div  class="pBox"> Onepaper(eng)</div>
          </b-button>
             <b-modal id="ms1" 
                      ref="mymodal"
                      scrollable 
                      fade
                      size="lg"
                      modal-class="modalSize"
                      hide-header-close
                      :title="title"
            > 
            <div id="modalContents" > <OnePageEng /> </div>
            <template #modal-footer >
                  <!-- block: 전체 길이 -->
                <b-button class="mt-3 modalBtn" block variant="light" @click="hideModal"> 닫기 </b-button>     
            </template>      
            </b-modal>
        </div>
    
        <div id="w4"> 
          <b-button  v-b-modal.ms2  >
            <b-img :src="point1" class="wiconBox"></b-img>
            <div class="pBox"> Onepaper(kor)</div>
          </b-button>  
            <!-- ref=hide 연결 -->
            <!-- 모달창 크기는 @media에서 확인 -->
             <b-modal id="ms2" 
                      ref="mymodal"
                      scrollable 
                      fade
                      size="lg"
                      modal-class="modalSize"
                      hide-header-close
                      :title="title"
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
</template>

<script>
// import txt from "raw-loader!./assets/onePageEng.txt";
import OnePageKor from './OnePageKor.vue';
import OnePageEng from './OnePageEng.vue';

export default {
  name: 'etc',
  components: {
    OnePageKor, OnePageEng
  },
  data() {
    return {
      // txt: txt,
      home01: require ('../assets/body/home01_welcome.png'),
      home02: require ('../assets/image/home02.png'),
      home03: require ('../assets/image/home03.png'),
      home04: require ('../assets/image/home04.png'),
      home05: require ('../assets/image/home05.png'),
      home06: require ('../assets/image/home06.png'),
      home08: require ('../assets/image/home08.png'),
      home09: require ('../assets/image/home09.png'),
      icon01: require ('../assets/icons/icon01.png'),
      point2: require ('../assets/images/point2.png'),
      
      // imgPer: require ('../assets/images/imgPer.png')
      title: "WONHAGO(KOR)",
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
//버튼 기본 css 제거
.btn-secondary {
  color: $a;
  font-weight: bold;
  font-size:  $hover_before;
  //버튼 바탕색 제거
  background-color: transparent;
  //border 제거
  border: 0;
  outline: 0;
}
//클릭 후 css 제거
.btn-secondary:focus{ 	
    border: none !important;
    outline:none !important; 
    box-shadow:none !important; 
    background-color: transparent !important;
}
.btn-secondary:hover{ 	
   color: $a_hover ;
   font-size: $hover_font;
   font-weight: bold;
   text-shadow: 0.2rem 0.2rem black; 
   background-color: transparent !important;
}
//hover 기능 변경필요
//img 확대
.hoverBox1 {
  // width: 20%;
  margin: 0 0 0 auto;
  overflow: hidden;
  transition: all 0.5s linear 
}

.hoverBox1:hover  {
  // transform: rotateY( 180deg );
  //왼쪽으로 이동 하면서 확대
  transform: translateX( -6rem ) scale(1.1);
}
//whiteppaer Box 내 icon 정렬
// #wBox {
//   padding: 1rem 10rem;
// }
.modalBtn {
  width: 100%;
  min-height: 4vh;
  background-color: $bgBtn !important;
  border-block-style: none;
  margin-top: 0;
  padding: 0;
}
.btn-block {
  margin: 0 !important;
}
#modalContents {
  padding: 1rem 1.5rem ;
}