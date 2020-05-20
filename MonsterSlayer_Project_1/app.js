new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth:100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            dmg = this.calculateDamage(3, 10);
            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits Monster for ' + dmg
            })
            this.monsterHealth -= dmg

            if (this.checkWin()){
                return;
            }

            this.monsterAttacks();
        },
        specialAttack: function() {
            dmg = this.calculateDamage(10, 20);
            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits hard Monster for ' + dmg
            })
            this.monsterHealth -= dmg;

            if (this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        heal: function() {
            this.turns.unshift({
                isPlayer:true,
                text: 'Player heals for 10'
            });

            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        monsterAttacks : function () {
            dmg = this.calculateDamage(5, 12);
            this.turns.unshift({
                isPlayer:false,
                text: 'Monster hits player for ' + dmg
            })
            this.playerHealth -= dmg
            this.checkWin();
        },
        calculateDamage: function(min,max) {
            var damage = Math.max(Math.floor(Math.random() * max +1), min);
            return damage;
        }, 
        checkWin: function(){
            if ( this.monsterHealth <= 0 ){
                if (confirm('You won, new game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})