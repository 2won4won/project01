module.exports = {
  publicPath: '/Wonhago',
  // publicPath: '/WonhagoHome',
  // publicPath: '/wonhagomain',
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
