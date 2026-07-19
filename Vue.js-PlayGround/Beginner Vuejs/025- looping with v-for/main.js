// create new vue instance
new Vue({
  el: "#app",
  'data': {
    newValue: '',
    list: [1, 2, 3, 4, 5],
    userInfo: [
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
    addItem: function () {
      this.list.push(this.newValue)
      this.newValue = ''
    },
    deleteItem: function (index) {
      this.userInfo.splice(index, 1)
    }
  }
});
