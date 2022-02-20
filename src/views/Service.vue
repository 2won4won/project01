<template>
  <div id="service">
    <div class="box" id="serviceBox">
      <div id="out">
        <div id="inn">
          <b-button class="serviceBtn" href="https://test.wonhago.com" 
                    target="_blank"
          > 
              https://wonhago.com 
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'service',
}
</script>

 <style lang="scss" scoped> 
 #service {
    // border: 1px solid blue;
  // background-color: aqua;
 }
 //server 화면 전체의 높이 지정, imgBox 중앙정렬
 #serviceBox {
  //  border: 1px solid red;
   position: relative;
 }
 #out {
   height: auto;
 }
 #inn {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.serviceBtn {
  background-color: transparent;
  color: $bgBtn;
  position: relative;
  border: none;
  font-size: $serviceBtn_font;
  transition: color 0.5s, transform 0.2s, background-color 0.2s;
  outline: none;
  border-radius: 0.2rem ;
  margin: 0 1rem;
  padding:1.5rem 5rem;
  border: 0.2rem  solid  $serviceBtn;
  // border: 0.2rem  solid transparent;
}
.serviceBtn:hover {
  background-color: transparent;
  box-shadow: none !important;
  border: none ;
  font-size: $serviceBtn_hover_font;
  text-shadow: none;
  color: $a;
}
.serviceBtn:focus{
  background-color: transparent !important;
  // border:  0.2rem  solid  $serviceBtn !important;
  outline:none !important; 
  box-shadow:none !important; 
  color: $bgBtn;
}

// .serviceBtn::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border: 0.2rem solid $bg;
//   transition: opacity 0.3s, border 0.3s;
// }
// .serviceBtn:hover::before {
//   opacity: 0;
// }
// .serviceBtn:visited {
// .serviceBtn::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: transparent !important;
//   border: 0.2rem  solid $serviceBtn;
//   opacity: 0;
//   z-index: -1;
//   transform: scaleX(1.1) scaleY(1.3);
//   transition: transform 0.3s, opacity 0.3s;
//   font-size: $serviceBtn_font;
//   color: $a;
// }
// .serviceBtn:hover::after {
//   opacity: 1;
//   transform: scaleX(1) scaleY(1);
// }
</style>