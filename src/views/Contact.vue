<template>
  <div id="contact">
    <div class="box imgSize110 ">
      <div class="imgBox">
          <div class="outer">
            <b-img :src="contact01" class="imgSize100"> </b-img>
            <div class="iconBox inn">
              <div id="teamgram"  >
                <a href="" >
                  <b-img :src="icon07" class="iconSize3"> </b-img>
                </a>
              </div>  
              <div id="discord"  >
                <a href="" >
                  <b-img :src="icon08" class="iconSize3"> </b-img>
                </a>
              </div> 
              <div id="blog"  > 
                <a href="">
                  <b-img :src="icon09" class="iconSize3">  </b-img>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'contact',
  data() {
    return {
      contact01: require ('../assets/body/home09.png'),
      icon07: require ('../assets/icons/icon07.png'),
      icon08: require ('../assets/icons/icon08.png'),
      icon09: require ('../assets/icons/icon09.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
// ㅁㅏ지막 page layout
#contact {
  // width: 100vw;
  height: 100vh;
}
.inn {
  position: absolute;
  top: 87%;
  left: 77%;
  transform: translate( -50%, -50%);
}
.iconBox {
  display: flex;
  justify-content: end;
  margin: 0;
  padding: 0;
  }
 </style>