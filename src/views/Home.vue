<template>
  <div id="home"  class="d-flex justify-content-center">
    <div class="layoutBox">
      <div id="wrap" class="smallBox">
          <div id="badgeImg" >
            <img :src="badge" alt="" class="imgSize"  >
          </div>
          <div id="imgContents">
            <p class="title"> WELCOME TO <span class="blue"> WONHAGO </span> </p>
            <p class="subTitle"> PALY TO EARN <br> NFT QUEST MARKETPLACE </p>
            <P class="contents"> 
                Audience can earn eal money from completing<br>
                NFT quests, and advertisers can conduct<br>
                targeted reward marking campaigns for <br>
                higer ROIs
            </P>
          </div>
      </div>    
      <div class="pointer " id="pointLayout">
          <b-img :src="whitepaperImg" alt="whitepaperImg" class="imgPointSize"></b-img>
          <p class="pointEx" > Whitepaper </p>
      </div>  
      <div id="play" class="smallBox d-flex justify-content-center" >
        <b-container fluid >
          <b-row class="rowBox rowAlign">
            <!-- 1. col 에서 안보임 -->
            <!-- <b-col cols="12" sm="3" md="4" class="d-flex justify-content-center"> 
              <b-img :src="treasure" class="imgSize d-none d-sm-block "></b-img>
            </b-col> -->
            <!-- 2. 그대로 보임 -->
            <b-col cols="12" sm="3" md="4" class="d-flex justify-content-center"> 
              <b-img :src="treasure" class="imgSize" id="imgT"> </b-img>
            </b-col>
            <!-- 3. -->
            <!-- <b-col class="d-none d-sm-block" sm="3" md="5"> 333</b-col> -->
            <!-- <b-col cols="12" sm="3" md="4" class="d-flex justify-content-center"> 
              <b-img :src="treasure" class="imgSize d-none d-sm-block "></b-img>
              <b-img :src="treasure" class="imgSize d-block d-sm-none dflex flex-sm-column" id="imgT"> </b-img>
            </b-col> -->
            <b-col cols="12" sm="9" md="8" id="playContents"  class="d-flex justify-content-center" >
              <div  >
                <p class="title"> PLAY TO EARN </p>
                <p class="subTitle"> 
                  <span class="blue"> WONHAGO</span>'s Dexcentralized <br>
                    Autonomous organization
                </p>
                <p class="contents ">
                  Where audience can choose what quests they
                  want to complete and earn redeemable NFT
                  token(<spn class="blue">wont </spn>) in order to monetize their
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
      <div class="smallBox" id="claim">
        <div class="title"> CLAIM YOUR REWARD </div>
        <div> 
          <b-img :src="claimImg" class="imgSize"></b-img>
        </div>
        <div class="pointer" id="pointService">
          <b-img :src="ponterS" class="imgPointSize"></b-img>
          <p class="pointEx"> Service</p>
        </div>
      </div>
      <div class="smallBox" id="how">
        <div class="rowBox rowAlign" >
          <div class="title"> HOW IT WORKS </div>
          <div id="iframeSize">
            <iframe width="70%" height="100%" src="https://www.youtube.com/embed/L1JUfCyeT5E" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
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
    @media (max-width:576px) {
      // text-align: center;
    }
  }
  // image & text 간격조정
  #imgT {
      @media (max-width:575px) { padding-bottom: 2rem;}
  }
</style>
