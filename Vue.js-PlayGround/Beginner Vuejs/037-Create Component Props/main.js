Vue.component('product', {
  template: 
  `<div>
  <h1>{{name}}</h1>
  <h3>{{price}}</h3>
  </div>`,
  props:['name','price','img','product-category','productDescription']
})
// create new vue instance
new Vue({
  el: "#app",
  'data': {
    'dataPrice': 1000,
    products:[
      {'name' : 'p1' , 'price':1000},
      {'name' : 'p2' , 'price':2000},
      {'name' : 'p3' , 'price':3000}
    ]
  }

});
