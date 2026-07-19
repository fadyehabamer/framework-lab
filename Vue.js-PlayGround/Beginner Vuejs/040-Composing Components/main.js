Vue.component('product', {
  template:
    `<div>
    <h1>{{productData.id}}-{{productData.name}}</h1> 
    <user :user-data="productData.myusers"></user>
    </div>`,
  props: {
    productData: {}
  }
})


Vue.component('user', {
  template:
    ` <div>
      <h1> {{userData.name}} </h1>
      <img :src=userData.img>
    </div> `,
  props: {
    userData: {}
  }
})
// create new vue instance
new Vue({
  el: "#app",
  'data': {
    myproduct: {
      id: 1,
      name: 'IPHONE 1',
      myusers: {
        name: 'fady',
        img: 'https://i.pravatar.cc/300'
      }
    },
    myusers: {
      name: 'fady',
      img: 'https://i.pravatar.cc/300'
    }

  }

});
