// create new vue instance

new Vue({
  el: "#app",
  'data': {
    liked: false,
    likes: 5
  },
  'computed': {
    className: function () {
      return (this.liked) ? "liked" : "";
    }
  },
  'watch': {
    // variable to watch 
    liked: function (value) {

      if (value) {
        this.likes++
      }
      else {
        this.likes--
      }
    }
  }
});
