<template>
  <div id="home" >
    <div>
      <div id="wrap" class=" box">
          <div class="imgPostion" >
            <img :src="badge" alt="" class="imgSize50"  >
          </div>
          <div id="imgContents" >
            <p class="titleTop"> WELCOME TO <span class="blue"> WONHAGO </span> </p>
            <p class="title mt-5"> PALY TO EARN <br> NFT QUEST MARKETPLACE </p>
            <P class="subTitle"> 
                Audience can earn eal money from completing<br>
                NFT quests, and advertisers can conduct<br>
                targeted reward marking campaigns for <br>
                higer ROIs
            </P>
         </div>
        <div class="poniter text-sm-end pBox"  >
          <div >
            <b-img :src="whitepaperImg" alt="whitepaperImg" class="pointSize"></b-img>
          </div>
          <div class="pointEx mt-1" > Whitepaper </div>
        </div>  
    </div>  
    <div class="box " id="play">
        <b-container fluid >
          <b-row>
            <b-col cols="12" sm="4" class="imgBox "> 
              <!-- xs만 안보임 -->
              <div class="colBox d-none d-sm-block " > 
                  <b-img :src="imgPer" class="imgSize60" > </b-img>
                  <!-- <b-img :src="treasure" class="imgSize60" > </b-img> -->
              </div>
            </b-col>
            <b-col cols="12" sm="8" id="playContents" class="pl-sm-5" >
              <div id="smBox">
                <!-- xs에서만 보임 -->
                  <div class="colBox d-block d-sm-none imgPostion"  > 
                      <b-img :src="imgPer" class="imgSize60 absolute" > </b-img>
                  </div>
                  <div class="titleTop mb-4"> PLAY TO EARN </div>
                  <div class="title"> 
                    <span class="blue"> WONHAGO</span>'s Dexcentralized <br>
                      Autonomous organization
                  </div>
                  <div class="contents ">
                    Where audience can choose what quests they
                    want to complete and earn redeemable NFT
                    <span class="wrapVoca">token(<span class="blue">wont </span>) </span> in order to monetize their
                    participation during the pandemic
                  </div> 
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
      <div id="claim" class=" box">
        <div class="smallBox">
          <div class="titleTop mb-4"> CLAIM YOUR REWARD </div>
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
      <div  id="how" class=" box">
        <div class="smallBox">
          <div class="titleTop mb-4"  > HOW IT WORKS </div>
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
      <div id="wont" class=" box">
        <div class="smallBox">
          <div class="titleTop mb-4"> <span class="blue"> WONT </span>ECONOMICS</div>
          <div id="wontop">
              <div class="titleTop" >
                <p > <span class="blue hig"> 30% </span> CONTRIBUTION FOR ECOSYSTM</p>
                <p id="inter"> <span class="blue hig"> 1% </span> REWARD FOR AUDIENCE </p>
              </div>  
              <div id="imgW" class="d-flex justify-content-center pt-3 pr-5 mb-3" >
                <b-img :src="wont" id="wontImg"></b-img>
              </div>  
            <!-- mt-margin-top -->
              <div class="contents pt-n5" id="conW">  
                As a bootster of interoperability between audiences and advertisers, 
                Audience participating in and completing quests lised by advertisers will be 
                rewarded with <span class="blue subtitle">1% of WONT </span> 
                against the reward amount on each quest   
              </div>
          </div>
        </div>  
      </div>  
       <div id="wont1" class=" box">
        <div class="smallBox">
          <div class="title pb-5" id="onlyM"> <span class="blue"> WONT </span>ECONOMICS</div>
          <div id="wontop1">
              <!-- xs에서만 보임 -->
              <div class="titleTop d-block d-sm-none ">
                 <div id="imgW2" class="pr-5" >
                 <!-- <div id="imgW2" class="d-flex justify-content-end pr-5" > -->
                  <b-img id="wontImg3"></b-img>
                </div>  
                <dl class="row"> 
                  <dt class="col-2 blue"> 30% </dt>
                  <dd class="col-10 pb-n5"> CONTRIBUTION FOR ECOSYSTM </dd>
                </dl>
                <dl class="row mt-n5 mb-5"> 
                  <dt class="col-2 blue"> 1% </dt>
                  <dd class="col-10"> REWARD FOR AUDIENCE  </dd>
                </dl>
              </div>  
              <!-- xs에서는 비활성화 -->
              <div class="titleTop d-none d-sm-block" >
                <p > <span class="blue hig"> 30% </span> CONTRIBUTION FOR ECOSYSTM</p>
                <p id="inter"> <span class="blue hig"> 1% </span> REWARD FOR AUDIENCE </p>
                <div id="imgW" class="d-flex justify-content-center pt-sm-3 pr-5 mb-3" >
                  <b-img :src="wont" id="wontImg2"></b-img>
                </div>  
              </div>  
              <!-- mt-margin-top -->
              <div class="contents pt-n5">  
                As a bootster of interoperability between audiences and advertisers, 
                Audience participating in and completing quests lised by advertisers will be 
                rewarded with <span class="blue subtitle">1% of WONT </span> 
                against the reward amount on each quest   
              </div>
          </div>
        </div>  
      </div>  
      <div id="dis" class="box">
        <div class="small box">
        <div class="title"> WONT DISTRBUTION </div> 
            <b-container>
              <b-row>
                <b-col cols="12" md="6">
                  <div class="title"> TOKEN DISTRBUTION</div>
                  <div> #Total Insuance : 300,000,000 WONT </div>
                  <div> #Token sales : 90,000,000(30%) WONT </div>
                  <div> #Token Economics : 90,000,000(30%) WONT </div>
                </b-col>
                <b-col cols="12" md="6">
                  <b-img :src="dis" id="imgDis"> </b-img>
                </b-col>
              </b-row>  
            </b-container>
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
      wont: require ('../assets/images/wn.png'),
      dis: require ('../assets/images/dis.png'),
      imgPer: require ('../assets/images/imgPer.png'),
    }
  },
}
</script>
<style lang="scss" scoped>
  #wrap, #playContents, #imgBox2 {
    position: relative;
  }
  #playContents {
    text-align: left;
   }

 .wrapVoca {
  white-space: nowrap;
 }
#wontop{
  // text-align: left !important;
  padding: 1rem 4.5rem 1rem 4.5rem;
   @media (max-width:575px) { 
     width: 100%;
     padding:0;
     }
}
// col- left 정렬 (good) -> layout1 지정
#wontop1 {
  text-align: left !important;
  padding: 1rem 4.5rem 1rem 4.5rem;
}
.hig {
  text-shadow: 0.1rem 0.1rem rgb(166,193,212);
  font-size: 2.4rem;
}
// p 줄간격
#inter {
  line-height: 0;
}
#wontImg, #wontImg2,#wontImg3 {
  width: 5rem;
}
 #imgDis {
  width: 90%;
}
</style>
