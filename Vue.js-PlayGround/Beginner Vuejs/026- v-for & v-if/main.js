// create new vue instance
new Vue({
  el: "#app",
  'data': {
    userInfo: [
      {
        name: 'Ahmed',
        age: 9,
        address: 'Egypt'
      },
      {
        name: 'fady',
        age: 21,
        address: 'Egypt'
      },
      {
        name: 'Mohamed',
        age: 22,
        address: 'Egypt'
      }
    ]

  },
  'methods': {
    deleteItem: function (index) {
      this.userInfo.splice(index, 1)
    }
  }
});
