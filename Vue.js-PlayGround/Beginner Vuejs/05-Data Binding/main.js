// create new vue instance

new Vue({
    'el': "#app",
    'data': {
        // this will render TEXT only !!
        'msg': 'hello world !',
        'name': 'fady ehab amer',
        'dynamicID': 'vueID',
        'x': '11',
        'y': '20'
    },
    'methods': {
        'multiply': function () {
            return this.x * this.y
        }
    }
})
