// create new vue instance

new Vue({
  el: "#app",
  'data': {
    active: true,
  },
  'computed': {
    activeclass: function () {
      return { blue:this.active, red:!this.active,"has-border":this.active}
    }
  }
});
