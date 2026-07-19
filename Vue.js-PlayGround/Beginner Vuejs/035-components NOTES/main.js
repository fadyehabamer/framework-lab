//  * Component must be defined before vue instance
//  * Component not include spaces but can contain (-)
//  * Component data is a function not an object 

Vue.component('Product',{
  // ! template is a must
  template:'<div>{{name}}</div>',
  data:function(){
    return{
      name:'Product 1'
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
