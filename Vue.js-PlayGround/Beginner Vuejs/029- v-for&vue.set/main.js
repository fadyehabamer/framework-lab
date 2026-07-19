// create new vue instance
new Vue({
  el: "#app",
  'data': {
    list : [1,3,5,7,9],
    user:{
      name : 'fady'
    }
  },
  'methods': {
    // * changes will be tracked
    addTen:function(){
      this.list.push(10)
    },
    // * changes will be tracked
    changeList:function(){
      this.list = [2,4,6,8,10]
    },
    // * channges will not be tracked
    change3rd:function(){
      // this.list[2] = 100 // ! wrong way !!!
      // * correct way
      // * Vue.set( item , index , newValue)
      Vue.set(this.list , 2 , 100)
    },
    addNewDatatoObj:function(){
      // ! wrong way 
      // this.user.age = 10   // * changes will be un tracked
      
      // * correct way
      Vue.set(this.user,'age' , 10)
    }
  }

});
