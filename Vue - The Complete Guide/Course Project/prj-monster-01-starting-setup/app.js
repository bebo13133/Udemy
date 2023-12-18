const randomValue = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
        }
    },
    computed: {
        monsterHealthBar() {
            if(this.monsterHealth <0) return {width: "0%"}
            return { width: this.monsterHealth + '%' }
        },
        playerHealthBar() {
            if(this.playerHealth <0) return {width: "0%"}
            return { width: this.playerHealth + '%' }
        },
        mayUseAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
// return "equal"
            this.winner = "draw"
            } else if (value <= 0) {
                // return "Monster win"
                this.winner = "Monster"
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw"
            } else if (value <= 0) {
                this.winner = "Player"
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = randomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
            // playerHealth(this.monsterHealth)
        },
        attackPlayer() {
            const attackValue = randomValue(15, 8);
            this.playerHealth -= attackValue;
            // playerHealth(this.playerHealth)
        },
        specialAttack() {
            this.currentRound++
            const attackValue = randomValue(25, 10);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
            // playerHealth(this.monsterHealth)

        },
        healPlayer() {
            this.currentRound++
            const healValue = randomValue(20, 8)

            if (this.playerHealth + healValue > 100) { this.playerHealth = 100 } else { this.playerHealth += healValue }
            this.attackPlayer()
            // playerHealth(this.playerHealth)
        }
    }
})

app.mount("#game")