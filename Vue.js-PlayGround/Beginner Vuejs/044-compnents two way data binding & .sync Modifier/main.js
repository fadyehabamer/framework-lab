Vue.component('my-comp', {
    template: '<button @click="clicked()">Click Me</button>',
    props: {
        val: {
            default: 0
        }
    },
    methods: {
        clicked: function () { 
            //* this.val = this.val++ // can not re assign props values
            this.$emit('update:val', this.val + 1)
        }
    }
})
// create new vue instance
new Vue({
    'el': "#app",
    'data': {
        userscount: 5
    }
})