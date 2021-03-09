function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
        }
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <=0 ){
                this.winner = 'draw'
            } else if(value<=0){
                this.winner = 'monster'    
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <=0 ){
                this.winner = 'draw'
            } else if(value<=0){
                this.winner = 'player'    
            }
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
        },

        healPlayer(){
            this.currentRound++;
            let healValue =  getRandomValue(8,20);
            if(this.playerHealth+healValue > 100){
                this.playerHealth = 100;
            } else {
                this.playerHealth+=healValue;
            }
            this.attackPlayer();
        },

        startGame(){
            this.monsterHealth= 100;
            this.playerHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        }
    },

});

app.mount('#game');