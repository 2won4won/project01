<template>
  <div id="etc3">
    <div class="box" id="carouselBox">
      <b-carousel
            id="sel"
            v-model="slide"
            :interval="30000"
            controls
            indicators
            fade
            no-hover-pause
          > 
            <b-carousel-slide id="selslider" class="col-sm-6"  v-for="(data, i) in group" :key="i" > 
              <template v-slot:img  >
                <b-card-group deck   >
                  <b-row id="teamR"  >
                    <!-- b-col 대체 :class="col" -->
                    <!-- <b-col   > -->
                     <!-- class="d-flex flex-col-column flex-sm-row" -->
                    <b-card class="col" id="cardT"  v-for="(items, i) in data" :key="i" >
                        <b-avatar :src="items.picture" id="ava" size="6rem" ></b-avatar>
                        <!-- <div id="cardLine" > -->
                        <div id="teamH">
                            <p id="teamSub"> {{ items.name}} </p>
                            <p id="teamTi"> {{ items.part}} </p>
                        </div>  
                          <div  id="detail" v-for="(ci, i) in items.career" :key="i" >
                            <div id="teamF" >
                              <p class="teamCf "> {{ ci.career1 }} </p>
                              <p class="teamCf "> {{ ci.career2 }} </p>
                              <p class="teamCf "> {{ ci.career3 }} </p>
                              <p class="teamCf "> {{ ci.career4 }} </p>
                            </div>
                          </div>
                      <!-- </div> -->
                        <template #footer> </template>
                    </b-card>
                    <!-- </b-col> -->
                  </b-row>
                </b-card-group>
              </template>  
            </b-carousel-slide>  
        </b-carousel>
      </div>
    </div>
</template>

<script>
import data from "@/data/member";

export default {
  name: "etc3",
  data() {
    return {
      data: data.member,
    }
  },
  computed: {
    group() {
      return this.data.reduce((c, n,i) => {
        if (i % 2 === 0) c.push([]);
        c[c.length - 1].push(n);
        return c;
      }, []);
      //  width: 40% !important;
    },
  },
}
</script>

<style lang="scss" scoped>
  #sel {
    width: 80%;
    padding-left: 20%;

  }
  .carousel-inner {
    border-radius: 1rem;
  }
  .sr-only {
  position: absolute; 
  width: 0.3rem; height: 0.3rem; 
  padding: 0; margin: -0.3rem; 
  overflow: hidden; clip: rect(0,0,0,0); border: 0;
  color: red;
  }
  // icon 위치: top
  .carousel-control-next-icon, .carousel-control-prev-icon {
    position: absolute;
    // top: -2.5rem;
  }
  /* indicator location: top  */
  .carousel-indicators {
    position: absolute;
    right: 0;
    top: -2rem;
  } 
  // indicator 위치와 css
  .carousel-indicators li {
    border-radius: 50%;
    background-color: $sideBar;
    // indicator shap : circle ->bar 모양일때는 border 이용
    height: 0.5rem;
    width: 0.5rem;
    margin: 0.3rem;
    opacity: 1;
    padding: 0.1rem;
    position: relative;
  }
  .carousel-indicators li::after {
    bottom: -0.5rem;
    content: none;
    left: -0.3rem;
    padding: 0.1rem;
    position: absolute;
    right: -0.3rem;
  }
  .carousel-indicators li.active {
    background-color: red;
    width: 1rem;
    height: 1rem;
    top: -0.3rem;
    box-shadow: 0.2rem  whitesmoke;
  }
</style>