Vue.component('product', {
  template:
    `<div>
  <h1>{{name}}</h1>
  <h3>{{price}}</h3>
  <h3> {{productcategory}} </h3>
  </div>`,

  // * make some props required

  props: {
    'name': {},
    'price': {
      type: [Number, String], default: 0, validator: function (value) {
        return value >= 0
      }
    },
    'img': { default: 'img' },
    'productcategory': { required: true },
    'productDescription': String
  }
})
// create new vue instance
new Vue({
  el: "#app",
  'data': {
    'dataPrice': 1000,
    products: [
      { 'name': 'p1', 'price': 1000 },
      { 'name': 'p2', 'price': 2000 },
      { 'name': 'p3', 'price': 3000 }
    ]
  }

});
