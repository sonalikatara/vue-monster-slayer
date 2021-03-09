function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
        }
    },
    computed:{
        monsterHealthBarStyle(){
            return {width: this.monsterHealth +'%'}
        },
        playerHealthBarStyle(){
            return {width: this.playerHealth +'%'}
        },
        canSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster(){
           this.currentRound++;
           // calculate the  damage and reduce monster health by it
           // generate a random number between 5 and 12
           let damage =  getRandomValue(5,12);
           this.monsterHealth -= damage;
           this.attackPlayer();
          
        },

        attackPlayer(){
            let damage =  getRandomValue(8,15);
            this.playerHealth -= damage;
        },
        
        specialAttackMonster(){
            this.currentRound++;
            let damage =  getRandomValue(10,25);
            this.monsterHealth -= damage;
            this.attackPlayer();
        }
    },

});

app.mount('#game');