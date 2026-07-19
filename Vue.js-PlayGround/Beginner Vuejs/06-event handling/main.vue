// create new vue instance

new Vue({
    'el': "#app",
    'data':{
        'counter':0
    },
    'methods':{
        'showMsg':function(){
            alert("Hello from Vue js")
        }
    }
})
