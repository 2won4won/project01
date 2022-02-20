<template>
  <div id="contact">
    <div  >
    <!-- <div id="lastBox" class="box"> -->
    <div  class="box">
      <div class="imgBox">
          <div class="outer" id="lastBox">
              <b-img :src="contact01" class="imgSize100"> </b-img>
              <div class="iconBox inn">
                <div id="teamgram" class="iconBox3" >
                <a href="" >
                  <b-img :src="icon07" class="iconSize4"> </b-img>
                </a>
                </div>  
                <div id="discord" class="iconBox3" >
                  <a href=""  >
                    <b-img :src="icon08" class="iconSize4"> </b-img>
                  </a>
                </div> 
                <div id="blog" class="iconBox3" > 
                  <a href="">
                    <b-img :src="icon09" class="iconSize4">  </b-img>
                  </a>
                </div>
              </div>
              <div id="footer">   
                  <p> © 2021 BUCHIGO.Inc. All rights reserved.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: 'Contact',
components: {
  },
  data() {
    return {
      contact01: require ('../assets/body/home09.png'),
      icon07: require ('../assets/icons/icon07.png'),
      icon08: require ('../assets/icons/icon08.png'),
      icon09: require ('../assets/icons/icon09.png'),
    }
  }
}
</script>

<style lang="scss" scoped>
//view 적용
#lastBox {
  // height: layoutView 
  margin-bottom: 2rem;
  // border: 1rem solid blue;
}
.inn {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate( -50%, -50%);
}
//icon으 수평정렬
.iconBox {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
}
#footer {
  color: $a_hover ;
  text-align: right;
  padding-right: 2rem;
  margin-bottom: 0;
  padding-bottom: 0;
 }
 p {
   font-size: 0.7rem;
 }
 </style>