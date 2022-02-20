<template>
  <div id="team">
    <div class="box imgsize100 d-none d-sm-block" >
      <div fluid id="cBox" class="box d-flex justify-content-center ">
      <!-- <b-container fluid id="cBox" class="box d-flex justify-content-center "> -->
        <!-- <div class="carouselBox d-none d-sm-block">  -->
        <div class="carouselBox"> 
          <b-carousel
              id="sel"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              fade
              no-hover-pause
            > 
              <b-carousel-slide id="selslider" class="col-sm-6 "  v-for="(data, i) in group" :key="i" > 
                <template v-slot:img  >
                  <b-card-group deck   >
                    <b-row id="teamR"  >
                      <b-card class="col" id="teamCard"  v-for="(items, i) in data" :key="i" >
                          <b-avatar :src="items.picture" id="ava" size="9rem" ></b-avatar>
                            <div class="card-header">
                                <div class="card_title"> {{ items.name }} </div>
                                <div class="card-sub"> {{ items.part}} </div>
                            </div>  
                          <div class="cardC">
                            <div class="cardCa">
                                <div  class="card-career" v-for="(ci, i) in items.career" :key="i" >
                                <div> {{ mark }} &nbsp;
                                  <span>
                                        <span > {{ ci.career1 }} </span>
                                        <span>  {{ ci.career2 }} </span>
                                        <span > {{ ci.career3 }} </span>
                                        <span > {{ ci.career4 }} </span>
                                  </span> 
                                </div>     
                                </div>
                              <!-- <div  class="card-career" v-for="(ci, i) in items.career" :key="i" >
                                    <div > {{ ci.career1 }} </div>
                                    <div>  {{ ci.career2 }} </div>
                                    <div > {{ ci.career3 }} </div>
                                    <div > {{ ci.career4 }} </div>
                              </div> -->
                            </div> 
                          </div>  
                          <template #footer></template>
                      </b-card>
                    </b-row>
                  </b-card-group>
                </template>  
              </b-carousel-slide>  
          </b-carousel>
        </div>
      </div>  
      <!-- </b-container>   -->
    </div>
    <div id="ta" class="box d-block d-sm-none">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide  v-for="(items, i) in data" :key="i">
            <b-card class="tCard"  >
                <b-avatar :src="items.picture" id="ava" size="7rem" ></b-avatar>
                <div class="card-header">
                    <div class="card_title"> {{ items.name }} </div>
                    <div class="card_sub"> {{ items.part}} </div>
                </div>  
                <div class="cardC">
                  <div class="cardCa">
                   <div  class="card-career" v-for="(ci, i) in items.career" :key="i" >
                     <div> {{ mark }} &nbsp;
                                  <span>
                                        <span > {{ ci.career1 }} </span>
                                        <span>  {{ ci.career2 }} </span>
                                        <span > {{ ci.career3 }} </span>
                                        <span > {{ ci.career4 }} </span>
                                  </span> 
                                </div>    
                        <!-- <div>  {{ ci.career1 }} </div>
                        <div>  {{ ci.career2 }} </div>
                        <div > {{ ci.career3 }} </div>
                        <div > {{ ci.career4 }} </div> -->
                   </div>
                  </div> 
                </div>  
                <template #footer></template>
            </b-card>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
//card align=row
import 'swiper/css/swiper.css'
import data from "@/data/member";

export default {
  name: 'Team',
  components: {
      Swiper,
      SwiperSlide
  },
  data() {
    return {
      data: data.member,
      mark: '✲ ',
      swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
      }
    }
  },
  computed: {
    group() {
      return this.data.reduce((c, n,i) => {
        if (i % 2 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
   
  },
}
</script>

<style lang="scss" scoped>
  #cBox {
    margin-bottom: 0;
    padding-bottom: 0;
    // height: calc(100vh - $nav_height - $logo_height);
    //1-1.carousel 중앙정렬
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #sel {
    margin: 0 !important;
    width: 80vw;
  }
  #teamR {
    margin-top: 1rem;
    // 1-3. carousel - silde - card 중앙정렬
    display: flex;
    justify-content: center;
  }
 //card length->media
  .carouselBox {
    //1-2. carousel - silde 중앙정렬
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //card css
  #teamCard { 
    color: $a;
    background-color: $bg ;
    // 마지막 카드 넓이가 전체 길이를 차지하지 않기 위해
    max-width: 45%;
    // padding-top: 0.5rem;
    //card 크기
     height: auto;
      // border: 0.2rem solid red;
  }
  .card-body {
    // border: solid 0.1rem $cardBody;
    border-radius: 0.6rem;
  }
  .card-header {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .card-career {
    font-size: 0.8rem;
    font-weight: 200;
    //2-3
    text-align: center;
  }
  .card_title {
    // border: 0.1rem solid red;
    font-size: 1.4rem;
    font-weight: 400;
  }
  .card-sub {
    font-size: 1.1rem;
     font-weight: 300;
  }
  .cardC {
    //2-1. caree 
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .cardCa {
    //2-2 넓이 조정
    width: 90%;
  }
  .tCard {
    // height: 25rem;
  border-radius: 0.5rem;
  background-color: $bg;
  color: $a;
}
.swiper {
  padding-top: 3rem;
  width: 90%;
}
.swiper-slide {
  // border: 1px $a_hover solid;
  width: 60%;
  height: 22rem;
  margin-bottom: 5rem;
  margin-top: 2rem;
}
</style>