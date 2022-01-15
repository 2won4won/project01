<template>
  <div id="home" >
    <div >
      <div id="wrap" class="A_center box">
        <div class="smallBox">
          <div id="badgeImg" >
            <img :src="badge" alt="" class="imgSize1"  >
          </div>
          <div id="imgContents" >
            <p class="title"> WELCOME TO <span class="blue"> WONHAGO </span> </p>
            <p class="subTitle"> PALY TO EARN <br> NFT QUEST MARKETPLACE </p>
            <P class="contents"> 
                Audience can earn eal money from completing<br>
                NFT quests, and advertisers can conduct<br>
                targeted reward marking campaigns for <br>
                higer ROIs
            </P>
         </div>
        <div class="poniter text-end pBox"  >
          <div >
            <b-img :src="whitepaperImg" alt="whitepaperImg" class="pointSize"></b-img>
          </div>
          <div class="pointEx " > Whitepaper </div>
        </div>  
      </div>
    </div>  
    <div class="box A_center" id="play">
      <div class="smallBox">
        <b-container fluid >
          <b-row>
            <b-col cols="12" sm="4" md="5" class="A_centerBottom"> 
              <div class="imgBox2">
                <div>
                  <b-img :src="treasure" class="imgSize2" > </b-img>
                </div>  
              </div>
            </b-col>
            <b-col cols="12" sm="8" md="7" id="playContents"  class="boxCol2" >
              <div class="playText" >
                <p class="title"> PLAY TO EARN </p>
                <p class="subTitle"> 
                  <span class="blue"> WONHAGO</span>'s Dexcentralized <br>
                    Autonomous organization
                </p>
                <p class="contents ">
                  Where audience can choose what quests they
                  want to complete and earn redeemable NFT
                  <span class="wrapVoca">token(<span class="blue">wont </span>) </span> in order to monetize their
                  participation during the pandemic
                </p> 
                 <!-- <p class="contents ">
                  Where audience can choose what quests they<br>
                  want to complete and earn redeemable NFT<br>
                  token( <spn class="blue">wont </spn> ) in order to monetize their<br>
                  participation during the pandemic
                </p> -->
              </div>
            </b-col>
          </b-row>
        </b-container>
       </div>
    </div>   
      <div id="claim" class="A_center box">
        <div class="smallBox">
          <div class="title"> CLAIM YOUR REWARD </div>
          <div > 
            <b-img :src="claimImg" class="imgSize3"></b-img>
            <!-- <b-img :src="claimImg" style="width:100%; height;100%;"></b-img> -->
          </div>
          <div class="poniter text-end pBox"  >
          <div >
            <b-img :src="ponterS" alt="ponterSImg" class="pointSize"></b-img>
          </div>
          <div class="pointEx " > Service </div>
        </div> 
        </div>  
      </div>
      <div  id="how" class="A_center box">
        <div class="smallBox">
          <div class="title"  > HOW IT WORKS </div>
           <div id="iframeSize">
                   <iframe src="https://www.youtube.com/embed/L1JUfCyeT5E" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            id="if">
                    </iframe>
                  </div>
        </div>  
      </div>
      <div id="wont" class="smallBox">
        <div class="title"> <span class="blue"> WONT </span>ECONOMICS</div>
        <div class="rowBox" >
          <div class="titleTop"> <span class="blue"> 30% </span> CONTRIBUTION FOR ECOSYSTM</div>
          <div class="titleTop"> <span class="blue"> 1% </span> REWARD FOR AUDIENCE </div>
        </div>
      </div>  
    </div>  
  </div>
</template>
<script>

export default {
  name: "home",
  data() {
    return {
      badge: require ('../assets/images/b.png'),
      whitepaperImg: require ('../assets/images/w.png'),
      treasure: require ('../assets/images/t.png'),
      claimImg: require ('../assets/images/c.png'),
      ponterS: require ('../assets/images/ps.png'),
    }
  },
}
</script>
<style lang="scss" scoped>
  #wrap {
    position: relative;
  }
  // 이미지 흐리게 : opacity 0~1
  #badgeImg {
    position: absolute;
    text-align: center;
    opacity: 0.5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
  #playContents {
    text-align: left;
   }
 .wrapVoca {
  white-space: nowrap;
 }
 
</style>
