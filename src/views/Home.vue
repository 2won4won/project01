<template>
  <div id="home" >
    <!-- carousel 이용 : 이미지가 작아지면 글자 크기도 작아짐 -->
    <!-- <div id="mycarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item active"> -->
          <!-- class="img-fluid":이미지 반응형으로 제어 -->
          <!-- <img :src="badge" alt="" class="img-fluid" id="badgeImg" > -->
          <!-- <img :src="badge" alt="" class="img-responsive" id="badgeImg" > -->
            <!-- <div class="carousel-caption">
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
      </div>  -->
    <!-- </div> -->
      <!-- <div class="box">  -->
      <div id="wrap" >
          <div id="badgeImg" >
            <img :src="badge" alt=""  id="imgb"  >
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
      <div class="pointer d-flex flex-column" id="whitpaperImg">
      </div>
        <div id="whitepaperImg">
          <img :src="whitepaperImg" alt="whitepaperImg" id="imgw">
        </div>
        <div id="contentsW">
          <p > Whitepaper </p>
        </div>  
      </div>
      <div id="play">
        <b-container fluid id="conP" >
          <b-row class="rowBox">
            <!-- col 에서 안보임 -->
            <!-- <b-col class="d-none d-sm-block" sm="3" md="5"> 333</b-col> -->
            <b-col cols="12" sm="3" md="4"> 
              <b-img :src="treasure" class="imgAlign"></b-img>
            </b-col>
            <b-col cols="12" sm="9" md="8">
              <div class="title"> PLAY TO EARN </div>
              <div class="subTitle"> 
                 <span class="blue"> WONHAGO</span>'s Dexcentralized <br>
                  Autonomous organization
              </div>
              <div class="contents">
                Where audience can choose what quests they<br>
                want to complete and earn redeemable NFT<br>
                token( <spn class="blue">wont </spn> ) in order to monetize their<br>
                participation during the pandemic
              </div>

            </b-col>
          </b-row>
        </b-container>
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
    }
  },
}
</script>
<style lang="scss">
  #home {
    padding-top: 3rem;
  }
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
  #imgb {
    width: 30%;
    height: 30%;
  }

  #imgw {
    width: 5%;
    height: 5%;
  }
  #conP {

  }

</style>
