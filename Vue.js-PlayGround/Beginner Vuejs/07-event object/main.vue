// create new vue instance

new Vue({
    'el': "#app",
    'data':{
        'x':0,
        'y':0,
        'type':''
    },
    'methods':{
        'showObj':function(event){
            console.log(event)

            // get coordinates where I clicked
            this.x=event.clientX
            this.y=event.clientY
            this.type=event.type
        }
    }
})
