// create new vue instance
new Vue({
  el: "#app",
  'data': {
    list : [1,3,5,7,9],
    users:[
    { name : 'fady', age : 21},
    { name : 'ahmed', age : 10}  
  ]
  },
  'methods': {
    reverseusers:function(){
      this.users.reverse();
    },
    addClasstoFirst:function(){
      // * want to add class error to first input ( fady input )
      // * but if reverse clicked , it will remain on first input ( ahmed ) because -> vuejs depend on index
      // * go to html
      document.getElementById("first").classList.add("error")
    }
  }

});
