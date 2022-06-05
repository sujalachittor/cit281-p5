/*
    CIT 281 Project 5:

    Name: Sujala Chittor
*/
module.exports = class Monster {
    constructor({
     monsterName = "Unknown", 
     minimumLife= 0,
     currentLife = 100,
    }) { 
      
      this.monsterName = monsterName;
      this.minimumLife = minimumLife;
      this.currentLife = currentLife;
      this.isAlive = (this.currentLife >= this.minimumLife);
      console.log(`New monster ${monsterName} initialized, ready to play!`);
    };

    updateLife=(lifeChangeAmount) => {
        console.log(`${this.monsterName} random power drain of ${lifeChangeAmount}`);
        this.currentLife -= lifeChangeAmount;
        this.currentLife = Math.max(this.currentLife, 0);
        this.isAlive = (this.currentLife >= this.minimumLife);
    };

    randomLifeDrain=(minimumLifeDrain, maximumLifeDrain) => {
        this.updateLife(getRandomInteger(minimumLifeDrain, maximumLifeDrain))
    }
};

function getRandomInteger(min, max) {
    //let min = 5;
    //let max = 25;
    let RandomInteger = Math.floor(Math.random() * (max - min) + min);
    return RandomInteger
}
