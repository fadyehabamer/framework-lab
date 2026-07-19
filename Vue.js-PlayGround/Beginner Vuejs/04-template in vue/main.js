// create new vue instance

new Vue({
    'el': "#app",
    'data': {
        'title': 'hello world !',
        'name': 'fady ehab amer'
    },
    // template should contain exactly one root element (container) 
    'template': ' <div> <span style="color:red;">{{name}}</span> wrote <span style="color:red;">{{title}}</span> using vue.js </div> '
})
