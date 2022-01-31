<template>
  <div id="ttl">
    <div id="ta">
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide  v-for="(items, i) in data" :key="i">
        <b-card class="tCard"  >
            <b-avatar :src="items.picture" id="ava" size="10rem" ></b-avatar>
            <div id="card-header">
                <div id="card_title"> {{ items.name }} </div>
                <div id="card-sub"> {{ items.part}} </div>
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
    </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper-vue2'


// Import Swiper styles
import 'swiper/swiper.scss'
import data from "@/data/member";

export default {
  components: {
    Swiper,
    SwiperSlide, 
  
  },
  data() {
    return {
       data: data.member,
    }
  },

}
</script>

<style lang="scss" scoped>
#ta {
  background-color: aqua;
  height: 100vh;
}
.tCard {
  height: 30rem;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}
</style>