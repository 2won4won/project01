<template>
  <div id="contact">
    <div class="box" id="lastBox">
      <div class="imgBox">
          <div class="outer">
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
// 마지막 page layout(padding)
#lastBox {
  margin-bottom: 5rem;
  padding-bottom: 15rem;
}
.inn {
  position: absolute;
  top: 95%;
  left: 75%;
  transform: translate( -50%, -50%);
}
//icon으 수평정렬
.iconBox {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
}
 </style>