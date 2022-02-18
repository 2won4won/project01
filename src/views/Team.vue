<template>
  <div id="team">
    <div class="box imgsize100 d-none d-sm-block" >
      <b-container fluid id="smContainer" class="d-flex justify-content-center">
        <div class="carouselBox"> 
          <b-carousel
              id="sel"
              v-model="slide"
              :interval="3000"
              controls
              indicators
              fade
              no-hover-pause
            > 
              <b-carousel-slide id="selslider" class="col-sm-6"  v-for="(data, i) in group" :key="i" > 
                <template v-slot:img  >
                  <b-card-group deck   >
                    <b-row id="teamR"  >
                      <b-card class="col teamCard"  v-for="(items, i) in data" :key="i" >
                          <b-avatar :src="items.picture" id="ava" size="8rem" ></b-avatar>
                          <div class="card-header">
                              <div class="card_title"> {{ items.name }} </div>
                              <div class="card-sub"> {{ items.part}} </div>
                          </div>  
                          <div  class="card-career" v-for="(ci, i) in items.career" :key="i" >
                              <!-- <span>    {{ mark }} </span>   -->
                                <div > {{ ci.career1 }} </div>
                                <div>  {{ ci.career2 }} </div>
                                <div > {{ ci.career3 }} </div>
                                <div > {{ ci.career4 }} </div>
                          
                          </div>
                          <template #footer></template>
                      </b-card>
                    </b-row>
                  </b-card-group>
                </template>  
              </b-carousel-slide>  
          </b-carousel>
        </div>
      </b-container>  
    </div>
    <div id="ta" class="box d-block d-sm-none">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide  v-for="(items, i) in data" :key="i">
            <b-card class="tCard"  >
                <b-avatar :src="items.picture" id="ava" size="10rem" ></b-avatar>
                <div class="card-header">
                    <div class="card_title"> {{ items.name }} </div>
                    <div class="card_sub"> {{ items.part}} </div>
                </div>  
                <div  class="card-career" v-for="(ci, i) in items.career" :key="i" >
                      
                      <div>  {{ ci.career1 }} </div>
                      <div>  {{ ci.career2 }} </div>
                      <div > {{ ci.career3 }} </div>
                      <div > {{ ci.career4 }} </div>
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
  name: 'team',
  components: {
      Swiper,
      SwiperSlide
  },
  data() {
    return {
      data: data.member,
      mark: '✓',
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
        if (i % 3 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
    },
   
  },
}
</script>

<style lang="scss" scoped>
  #sel {
    margin-top: 2rem;
  }
  #teamR {
    margin-top: 1rem;
    width: 76vw;
    display: flex;
    justify-content: center;
  }
 //card length->media
  .carouselBox {
    padding: 3rem;
  }
  //card css
  .teamCard { 
    color: $a;
    background-color: $bg ;
    // 마지막 카드 넓이가 전체 길이를 차지하지 않기 위해
    max-width: 30%;
    padding-top: 1rem;
    //card 크기
    //  width: 20rem;
    //  height: auto;
     height: auto;
  }
  .card-body {
    border: solid 0.1rem $cardBody;
    border-radius: 0.6rem;
  }
  .card-header {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  .card-career {
    width: auto;
    font-size: 0.8rem;
    text-align: left;
  }
 
  .card_title {
    font-size: 1.4rem;
    font-weight: bolder;
  }
  .card-sub {
    font-size: 1.2rem;
    // font-weight: bold;
  }
  .tCard {
  height: 25rem;
  border-radius: 0.5rem;
  // border: solid 0.3rem $cardBody;
  background-color: $bg;
  color: $a;
}
.swiper {
  padding-top: 3rem;
  width: 90%;
  border: 1px transparent solid;

}
.swiper-slide {
  width: 70%;
}
</style>