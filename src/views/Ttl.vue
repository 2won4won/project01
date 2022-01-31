<template>
  <div id="ttl" class="d-block d-sm-none">
    <div id="ta" class="box">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide  v-for="(items, i) in data" :key="i">
            <b-card class="tCard"  >
                <b-avatar :src="items.picture" id="ava" size="10rem" ></b-avatar>
                <div id="cheader">
                    <div id="ctitle"> {{ items.name }} </div>
                    <div id="csub"> {{ items.part}} </div>
                </div>  
                <div  id="card-career" v-for="(ci, i) in items.career" :key="i" >
                      <!-- <div>  {{ mark }} </div> -->
                      <div>  {{ ci.career1 }} </div>
                      <div>  {{ ci.career2 }} </div>
                      <div > {{ ci.career3 }} </div>
                      <div > {{ ci.career4 }} </div>
                </div>
                <template #footer></template>
            </b-card>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import data from "@/data/member";
  export default {
    name: 'ttl',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        data: data.member,
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
#ta {
  // width: 80%;
  // height: 100vh;
}
.tCard {
  // width: 20rem;
  height: 30rem;
  border-radius: 0.5rem;
  background-color: $tCard ;
  color: $a;
}
.swiper {
  // background-color: aqua;
  // height: 30rem;
  padding-top: 3rem;
  width: 90%;
  border: 1px transparent solid;

}
.swiper-slide {
  width: 80%;
}
// .swiper-slide:nth-child(2n) {
//   width: 60%;
// }
// .swiper-slide:nth-child(3n) {
//   width: 40%;
// }
  #cheader {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  #ccareer {
    width: auto;
    font-size: 1rem;
  }
 
  #ctitle {
    font-size: 1.7rem;
    font-weight: bolder;
  }
  #csub {
    font-size: 1.3rem;
    font-weight: bold;
  }
</style>