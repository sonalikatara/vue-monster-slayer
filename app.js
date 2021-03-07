function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100
        }
    },
    computed:{
        monsterHealthBarStyle(){
            return {width: this.monsterHealth +'%'}
        },
        playerHealthBarStyle(){
            return {width: this.playerHealth +'%'}
        }
    },
    methods: {
        attackMonster(){
           // calculate the  damage and reduce monster health by it
           // generate a random number between 5 and 12
           let damage =  getRandomValue(5,12);
           this.monsterHealth -= damage;
           this.attackPlayer();
        },
        attackPlayer(){
            let damage =  getRandomValue(8,15);
            this.playerHealth -= damage;
        }
    },

});

app.mount('#game');