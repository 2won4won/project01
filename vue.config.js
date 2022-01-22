module.exports = {
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
  // module: {
  //   rules: [
  //     {
  //       test: /\.txt$/i,
  //       use: 'raw-loader',
  //     },
  //   ],
  // },
}
