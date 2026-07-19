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
      count: this.value
    }
  },
  props: {
    value: {
      default: 0
    }
  }
  ,
  methods: {
    inc: function () {
      this.count++
      // * make parent know that count changed
      this.$emit('increment')
    },
    dec: function () {
      this.count--
      this.$emit('decrement')
    }
  }
})

// create new vue instance
new Vue({
  el: "#app",
  'data': {
    rootCount: 0
  },
  methods: {
    inc: function () {
      this.rootCount++
      if (this.rootCount > 10) {
        document.body.style.backgroundColor = 'lightblue'
      }
    }
  }

});
