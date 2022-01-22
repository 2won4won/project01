<template>
  <div id="etc2">
    <div class="box" id="halfBox">
      <div class="imgBox">
        <div>
          <b-button class="web" href="https://test.wonhago.com" 
                    target="_blank"
          > 
              https://wonhago.com 
          </b-button>
          <!-- <button class="web"> 
             <a href="http://test.wonhago.com" target="_blank">
            https://test.wonhago.com </a> 
        </button>  -->
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'etc2',
}
</script>

 <style lang="scss" scoped> 
 #halfBox {
   height: 50vh;
 }
.btn {
  position: relative;
  border: none;
  font-size: $web_font;
  transition: color 0.5s, transform 0.2s, background-color 0.2s;
  outline: none;
  border-radius: 0.2rem ;
  margin: 0 1rem;
  padding:1.5rem 5rem;
  border: 0.2rem  solid $bg;
  // border: 0.2rem  solid transparent;
}
.btn:active {
  transform: translateY(0.2rem);
}
.btn::after, .btn::before {
  border-radius: 0.2rem ;
}

.web {
  background-color: transparent;
  color: $bgBtn;
}
.web:hover {
  background-color: transparent;
  box-shadow: none !important;
  border: none;
  font-size: $web_font;
  text-shadow: none;
  color: $a;
}
.web::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0.2rem solid $bg;
  transition: opacity 0.3s, border 0.3s;
}
.web:hover::before {
  opacity: 0;
}
.web::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0.2rem  solid #e6e6e6;
  opacity: 0;
  z-index: -1;
  transform: scaleX(1.1) scaleY(1.3);
  transition: transform 0.3s, opacity 0.3s;
}
.web:hover::after {
  opacity: 1;
  transform: scaleX(1) scaleY(1);
}
</style>