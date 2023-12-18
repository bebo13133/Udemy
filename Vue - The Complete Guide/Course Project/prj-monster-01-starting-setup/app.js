const randomValue=(max,min)=>{
    return  Math.floor(Math.random() * (max - min) + min);
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        }
    },
    computed:{
        monsterHealthBar(){
           return {width: this.monsterHealth + '%'}
        },
        playerHealthBar(){
            return {width: this.playerHealth + '%'}
         },
         mayUseAttack (){
            return this.currentRound % 3 !== 0
         }
    },
    methods: {
        attackMonster() {
            this.currentRound++
            const attackValue = randomValue(12,5);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue =  randomValue(15,8);
            this.playerHealth -= attackValue;
        },
        specialAttack() {
            this.currentRound++
            const attackValue =  randomValue(25,10);
            this.monsterHealth -= attackValue;
            this.attackPlayer()

        }
    }
})

app.mount("#game")