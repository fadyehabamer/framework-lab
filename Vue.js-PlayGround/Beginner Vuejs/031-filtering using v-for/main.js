// create new vue instance
new Vue({
  el: "#app",
  'data': {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    searchname: '',
    users: [
      {
        name: 'fady',
        age: 20
      },
      {
        name: 'ahmed',
        age: 21
      },
      {
        name: 'mohamed',
        age: 22
      },
      {
        name: 'karem',
        age: 17
      }
    ]
  },
  'methods': {
    evenNumbers: function () {
      // * for inline function with v-for
      //  return this.numbers.filter(number =>  number % 2 == 0 )

      // * for btn to perform function
      this.numbers = this.numbers.filter(number => number % 2 == 0)
    },
    usersOverAge: function () {
      return this.users.filter(user => user.age > 18)
    },
    searchusersname: function () {
      return this.users.filter(user => user.name.indexOf(this.searchname) !== -1)
     }
  }

}); 
