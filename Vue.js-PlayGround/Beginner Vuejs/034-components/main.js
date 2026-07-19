Vue.component('product',{
  // ! template is a must
  // template:'<div>{{name}}</div>',
  // * with slot no need to pass data
  template:'<div><slot></slot></div>',
  data:function(){
    return{
      // name:'Product 1'
    }
  }
})
// create new vue instance
new Vue({
  el: "#app",
  'data': {
    rate : 3
  }

}); 
