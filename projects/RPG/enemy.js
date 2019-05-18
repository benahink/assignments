let readline = require('readline-sync')

// let playerName = readline.question("What is your name? ")

const playerProperties = {
    // name: playerName, 
    resistPoints: 50, 
    hasWon: false, 
    isAlive: true, 
    playList: ["J Cole", "Common", "Alicia Keys"]
}

let ariana = new Enemy('Ariana Grande', 35, 15, ['guest appearance', 'free merchandise'])
let cardiB = new Enemy('Cardi B', 45, 20, ['superbowl performance', 'commericals'])
let justin = new Enemy('Justin Bieber', 45, 20, ['outrageous concerts', 'TV interview'])

const badMusic = [ariana, cardiB, justin]
newMusicList = ['Ariana Grande', 'Cardi B', 'Justin Bieber']

let enemy = badMusic[Math.floor(Math.random()*badMusic.length)]

const enemyProperties = {
    name: badMusic,
    isDefeated: false, 
    isAlive: true,
    influencePower: Math.floor(Math.random() * 20) + 1
}

function Enemy (name, hp, num, arr) {
    this.badMusic = name;
    this.influencePoints = hp;
    this.influencePower = num;
    this.inventory = arr;
}


function enemyAttack() {
    let damageToPlayer = enemy.influencePower
    console.log(damageToPlayer)
    let low =  damageToPlayer <=3
    let medium = damageToPlayer >= 4 && damageToPlayer <=10
    let high =  damageToPlayer >= 11 && damageToPlayer && damageToPlayer <=20
    if (low) {
       let random = Math.floor(Math.random() * 2) + 1 
       let damageDone = playerProperties.resistPoints - random
       let weapon = Math.floor(Math.random(enemy.inventory))
       console.log(`${enemy} attacked you with ${weapon}, but little harm was done to your musical taste. Your HP is now ${damageDone}`)
    } else if (medium) {
        let random = Math.floor(Math.random() * 15) + 1 
        let damageDone = playerProperties.resistPoints - random
        console.log(`${enemy.badMusic} found and has found and attacked you with ${weapon}. Your HP is now ${damageDone}. Need to resist more.`)
    } else if (high) {
        let random = Math.floor(Math.random() * 25) + 1 
        playerProperties.resistPoints -= random
        console.log(`${enemy.badMusic} has found their way into your playlist. Your resist points is now ${playerProperties.resistPoints}`)
    }
}
console.log(enemyAttack())