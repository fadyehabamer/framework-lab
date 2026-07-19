// create new vue instance

new Vue({
    'el': '#app',
    'methods': {
        'rect1': function () {
            console.log("hovered on rect 1")
        },
        'rect2': function (event) {
            // or we can add .stop modifier at html   
            //   event.stopPropagation();

            console.log("hovered on rect 2")
        }
    }
})
