// * if we control part of HTML CODE by VUE .. WE can control all its children as well ==>
// * create Vue app

const app = Vue.createApp({
    data() {
        return {
            coursegoal: "Finish Course to master Vue",
            GithubLink: "https://www.github.com/fadyehabamer",
            dynamicDataA: "DYNAMIC DATA 1",
            dynamicDataB: "DYNAMIC DATA 2",
            htmlCode: ` <h4> HI , FROM VUE H4 </h4>`,
            counter1: 0,
            counter2: 0,
            argCounter: 0,
            name1: '',
            name2: '',
            rightButton: 0,
            confirmedName: '',
            onceCounter: 0,
            setName: '',
            computedName: '',
            watcherName:'',
            watcherLastName:'',
            watcherFullName: ''
        }
    },
    methods: {
        methodsGoal() {
            const rand = Math.random()
            return rand > 0.5 ? "rand > 0.5 " : "rand < 0.5";
        },
        // * CANT WORK WITH ARROW FUNCTIONS
        dynamicData() {
            const random = Math.random()
            if (random > 0.5) {
                return this.dynamicDataA;
            } else {
                return this.dynamicDataB;
            }
        },
        incCounter() {
            this.counter1++
        },
        decCounter() {
            this.counter1 -= 1
        },
        incArgCounter(num) {
            this.argCounter += num
        },
        // * Native Event Object
        updateName1(event) {
            this.name1 = event.target.value
        },
        // * Or With "COMMENT ONE FUNCTION called updateName"
        updateName2(event, welcomingMsg) {
            this.name2 = welcomingMsg + " " + event.target.value
        },
        // * Event Modifier
        fireAlert() {
            // * or We can use js built in function (preventDefault)
            alert("Sbmitted")
        },
        enterKey(event) {
            this.confirmedName = event.target.value
        },
        setNameFunc(event) {
            this.setName = event.target.value
        },
        resetName() {
            this.setName = ''
        }
    },
    // * Computed Property
    computed: {
        computedFullName() {
            if (this.computedName == '') {
                return ''
            } else {
                return 'Hey! ,' + this.computedName
            }
        }
    },
    watch: {
        watcherName(value) {
            this.watcherFullName =  value
        },
        watcherLastName(value){
            this.watcherFullName = this.watcherName + '  ' + value
        }
        
    }
});

app.mount("#user-goal")