module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ?'https://2won4won.github.io/Wonhago/'
      :'/',
  css : {
    loaderOptions : {
      sass : {         
        //pass option
        // sacc-loader v8 이상시 적용가능
        //  prependData , additionalData
        prependData: `   
          @import "@/assets/scss/common.scss";
        `
      }
    }
  },
}
