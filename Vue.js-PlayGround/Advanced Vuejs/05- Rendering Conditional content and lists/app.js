const app = Vue.createApp({
  data() {
    return {
      enteredVal: '',
      goals: [],
      myObj:{
        name:'fady',
        age:'21 '
      }
    };
  }, methods: {
    addGoal() {
      if (this.enteredVal == '') {
        alert('HEY Dude ! Can not add empty task')
      } else {
        this.goals.push(this.enteredVal)
        this.enteredVal = ''
      }
    },
    removeGoal1(e){
      this.goals.splice(this.goals.indexOf(e.currentTarget),1)
      // alert(123)
    },
    removeGoal2(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
