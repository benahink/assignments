let readline = require('readline-sync')

console.log(`
Music is EVERYTHING! And the  has consipired to influence our taste with TERRIBLE music`)

let playerName = readline.question("What is your name? ")

let action = readline.keyIn(`press [w] to walk: `, {limit: 'w'})

const playerProperties = {
    name: playerName, 
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

function playList() {
    console.log(`Current playList: ${playerProperties.playList}`)
}

function addToPlayList() {
    let newItem = readline.question(`You won the fight and discoverd a new artsit to add to your great playlist.`)
    newItem.push(playerProperties.playList)
}

while (!playerProperties.hasWon && playerProperties.isAlive) {
    let nextMove = readline.keyIn(
        `what's your next move? 
         press [w] to walk
         press [i] for inventory
         press [x] to exit game `, {limit: 'wxi'})
    if(nextMove === "w") {
        walk()
    } else if (nextMove === "i") {
        playList()
    } else if (nextMove === 'x') { 
        console.log(`Thank you for playing`)
        break;
    } else {
        `You've defeated your enemies!`
        gameOver()
    }
}

function enemyEncounter(enemy) {
    encounter = Math.floor(Math.random(enemy) * 3) + 1
    let react = readline.keyIn(`
        you encountered an enemy
        press [f] to fight
        press [r] to run 
        response: `, {limit: 'fr'})
    if(react === 'r') {
        run()
    } else {
        fight(encounter)
    }
}

function walk() {
    let walk = Math.floor(Math.random() * 4) + 1 
    if (walk <= 2) {
        console.log("You've avoided bad music thus far! What a great day?!")
    } else {
        enemyEncounter()
    }
}

function enemyAttack() {
    let damageToPlayer = enemy.influencePower
    if (damageToPlayer <= 3) {
       let random = Math.floor(Math.random() * 2) + 1 
       let damageDone = playerProperties.resistPoints - random
       let weapon = Math.floor(Math.random(enemy.inventory))
       console.log(`${enemy} attacked you with ${weapon}, but little harm was done to your musical taste. Your HP is now ${damageDone}`)
    } else if (damageToPlayer >= 4 && damageToPlayer <= 10) {
        let random = Math.floor(Math.random() * 15) + 1 
        let damageDone = playerProperties.resistPoints - random
        console.log(`${enemy.badMusic} found and has found and attacked you with ${weapon}. Your HP is now ${damageDone}. Need to resist more.`)
    } else if (damageToPlayer >= 11 && damageToPlayer <= 20) {
        let random = Math.floor(Math.random() * 25) + 1 
        playerProperties.resistPoints -= random
        console.log(`${enemy.badMusic} has found their way into your playlist. Your resist points is now ${playerProperties.resistPoints}`)
    }
}

function enemyDies(arr) {
    return arr.map((el, i) => {
        if (el[1] === 0) {
            arr.splice(i, 1)
        }
    })
}

function gameOver() {
    if (enemy.influencePoints === 0) {
        enemyDies()
    } else if (playerProperties.resistPoints === 0) {
        playerProperties.isAlive = false
    } else if (badMusic.length === 0) {
        enemyProperties.isDefeated = true
    }
}

function fight() {
    let resistPower = Math.floor(Math.random() * 10) + 1
    if(resistPower < 4) {
        enemyAttack()
    } else {
        playerProperties.resistPoints += 4
        let random = Math.floor(Math.random() * 20) + 1 
        enemy.influencePoints -= random
        console.log(`You won this fight. Good job! Your HP is now ${playerProperties.resistPoints} #resistbadmusic`)
        console.log(`You have weakened ${enemy.badMusic}. Their HP is now ${enemy.influencePoints}`)
    }
}

function run() {
    let losePower = Math.floor(Math.random() * 2) + 1
    if(losePower === 1) {
        console.log(`${enemy.badMusic} missed. You live another wonderful musical day!`)
    } else {
        enemy.influencePoints--
         console.log(`${enemy.badMusic} got you. Your HP is now ${playerProperties.resistPoints}`)
         console.log(`${enemy.badMusic}'s HP is now ${enemy.influencePoints}`)
    }
}




