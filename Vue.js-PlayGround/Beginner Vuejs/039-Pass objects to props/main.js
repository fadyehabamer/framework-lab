Vue.component('product', {
  template:
  `<div>
  <h1>{{productData.id}}-{{productData.name}}</h1>
  </div>`,

  // * make some props required

  props: {
    productData: {}
  }
})
// create new vue instance
new Vue({
  el: "#app",
  'data': {
      myproduct:{
        id : 1,
        name : 'IPHONE 1'
      },
      myproducts:[
        {
          id : 2,
          name : 'IPHONE 2'
        },{
          id : 3,
          name : 'IPHONE 3'
        }
      ]
  }

});
