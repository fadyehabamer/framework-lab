const app = Vue.createApp({
    data() {
        return {
            inlineBoxA: false,
            inlineBoxB: false,
            inlineBoxC: false,
            classBoxA: false,
            classBoxB: false,
            classBoxC: false,
            computedBox:false
        }
    },
    methods: {
        inlineBoxSelected(box) {
            if (box == 'A') {
                this.inlineBoxA = !this.inlineBoxA
            }
            else if (box == 'B') {
                this.inlineBoxB = !this.inlineBoxB
            }
            else if (box == 'C') {
                this.inlineBoxC = !this.inlineBoxC
            }
        },
        classboxSelected(box) {
            if (box == 'A') {
                this.classBoxA = !this.classBoxA
            }
            else if (box == 'B') {
                this.classBoxB = !this.classBoxB
            }
            else if (box == 'C') {
                this.classBoxC = !this.classBoxC
            }
        },
        computedBoxSelected(box){
            if (box == 'A'){
                this.computedBox = !this.computedBox
            }
        }
    },
    computed:{
        computedClassBox(){
           return { active:this.computedBox} 
        }
    }
})

app.mount('#styling')