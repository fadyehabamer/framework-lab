Vue.component('my-row', {

  template: '<div>{{name}}</div> ',
  data: function () {
  return {
    name: 'row 1'
  }
}
})
// create new vue instance
new Vue({
  el: "#app",
  'data': {
    rate: 3
  }

});
