getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            // * NULL TREATED AS FALSY VALUE IN JS
            winner: null,
            logMsgs: []
        }
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100,
                this.monsterHealth = 100,
                this.urrentRound = 0,
                this.winner = null,
                this.logMsgs = []
        },
        attackMonster() {
            // * Generate rand value between 5 , 12
            const attackValue = getRandom(5, 12)
            this.monsterHealth -= attackValue
            // * can access methods using 'this' keyword
            this.attackPlayer();
            this.currentRound++
            this.addLogMsg('Player', 'Attack', attackValue)
            // console.log(this.logMsgs)
        },
        attackPlayer() {
            const attackValue = getRandom(8, 15)
            this.playerHealth -= attackValue

            this.addLogMsg('Monster', 'Attack', attackValue)
        },
        specialAttackMonster() {
            const attackValue = getRandom(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
            this.currentRound++
            this.addLogMsg('Player', 'Special Attack', attackValue)

        },
        healPlayer() {
            const healVal = getRandom(8, 20)
            if (this.playerHealth + healVal > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healVal
            }
            this.currentRound++
            this.attackPlayer()
            this.addLogMsg('Player', 'Heal', healVal)

        },
        surrender() {
            this.winner = 'monster'
        },
        addLogMsg(who, what, value) {
            // * Latest Actions at the top
            this.logMsgs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }, computed: {
        monsterBar() {
            if (this.monsterHealth <= 0) {
                return { width: '0%' }
            } else {
                return { width: this.monsterHealth + '%' }
            }
        },
        playerBar() {
            if (this.playerHealth <= 0) {
                return { width: '0%' }
            } else {
                return { width: this.playerHealth + '%' }
            }
        },
        disableSpecialAttack() {
            return this.currentRound % 3 != 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                // * Player Lost
                this.winner = 'monster'
            }
        }, monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // * DRAW
                this.winner = 'draw'
            } else if (value <= 0) {
                // * monster Lost
                this.winner = 'player'
            }
        }
    }
})

app.mount('#game')