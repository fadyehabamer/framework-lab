Vue.component("counter-btn", {
  template:
    `<div>
  <button @click="dec()" class="button-63"> - </button>
  <button class="button-63">{{count}}</button>
  <button @click="inc()" class="button-63">+</button>
  </div>
  `,
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    inc: function () {
      this.count++
    },
    dec:function(){
      this.count--
    }
  }
})

// create new vue instance
new Vue({
  el: "#app",
  'data': {}

});
