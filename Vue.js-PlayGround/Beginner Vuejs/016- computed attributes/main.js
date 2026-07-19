// create new vue instance

new Vue({
  el: "#app",
  'data': {
    first_name: 'Fady',
    last_name: 'Amer'
  },

  //  * used for clarity and maintain
  'computed': {
    full_name:function() {
      return this.first_name + ' ' + this.last_name
    }
  }
});
