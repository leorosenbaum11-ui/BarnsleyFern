let posX
let posY

let nextX
let nextY

let fernX
let fernY

let chance

function setup() {
    posX = 0
    posY = 0.16
    createCanvas(800, 600)
    chance = random(100)
}

function stem() {
    nextX = 0
    nextY = 0.16 * posY
}

function sml() {
    nextX = 0.85 * posX + 0.04 * posY
    nextY = -0.04 * posX + 0.85 * posY + 1.6
}

function llf() {
    nextX = 0.2 * posX - 0.26 * posY
    nextY = 0.23 * posX + 0.22 * posY + 1.6
}

function rlf() {
    nextX = -0.15 * posX + 0.28 * posY
    nextY = 0.26 * posX + 0.24 * posY + 0.44
}

function draw() {
    for (let i = 0; i < 100; i++) {
        //chances
        chance = random(100)
        if (chance < 1) {
            stem()
        } else if (chance < 86) {
           sml()
        } else if (chance < 93) {
          llf()
        } else {
          rlf()
        }
    
        //print(nextX + ", " + nextY)

        fernX = map(posX, -2.1820, 2.6558, 0, width)
        fernY = map(posY, 0, 9.998, height, 0)

        fill(34, 139, 34)
        //plotting
        point(fernX, fernY)

        //calculating next point
        posX = nextX
        posY = nextY
    }
    
}