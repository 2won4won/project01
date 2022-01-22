<template>
  <div id="contact">
    <div id="lastBox"  class="box">
      <div class="titleBox"> CONTACT </div>
      <div class="imgBox">
        <b-img :src="contact1" class="imgSize40"> </b-img>
      </div>
      <div class="imgBox">
        <div class="iconBox d-flex justify-content-end">
          <div id="teamgram" class="iconBox" >
            <a href="" >
              <b-img :src="contactIcon" class="footFont"> </b-img>
              <div> Teamgram </div>
            </a>
          </div>  
          <div id="discord" class="iconBox" >
            <a href="" >
              <b-img :src="contactIcon" class="footFont"> </b-img>
              <div> Discord</div>
            </a>
          </div> 
          <div id="blog" class="iconBox" > 
            <a href="">
              <b-img :src="contactIcon" class="footFont">  </b-img>
              <div> Blog </div>
            </a>
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
      contact1: require ('../assets/image/contact1.png'),
      contactIcon: require ('../assets/image/contactIcon.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
// ㅁㅏ지막 page layout
#contact {
  height: 100%;
}
.iconBox {
  margin: 1rem;
} 
</style>