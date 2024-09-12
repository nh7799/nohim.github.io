const autoText = document.querySelector('.text')
const autoText2 = document.querySelector('.auto-text-2')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNum() {
    setInterval(() => {
        return getRandomInt(400, 500)
    }, 100);
}


class typeWriter {
    constructor(typeWords, el, speed, waitPeriod = 1) {
        const wordsUn = typeWords.split(',')
        const inTheMiddle = typeWords.split(':')
        let words = []
        let waitStr = ''
        for (let i = 0; i < waitPeriod; i++) {
            waitStr += ' '
        }

        wordsUn.forEach((el => {
            words.push(el.trim()[0].toUpperCase() + el.trim().slice(1, el.length) + waitStr)
        }))


        let i = 0
        let k = 0
        this.speed = speed

        el.textContent = '  '
        let reversing = false

        const typingAnimation = setInterval(() => {
            if (!reversing) {
                el.textContent += words[k][i]
                if (i === words[k].length - 1) {
                    reversing = true
                    return
                }
                i++
            }
        }, 180)

        const clearAnimation = setInterval(() => {
            if (reversing) {
                el.textContent = words[k].slice(0, i)
                if (i === 0) {
                    reversing = false
                    if (k === words.length - 1) {
                        k = 0
                        return
                    }
                    k++
                    return
                }
                i--;
            }
        }, 60);
    }

    speedUp() {
        this.speed -= 200
        console.log(this.speed);
    }

}

new
    typeWriter
    ('i love interstellar,anne frank is my favourite character,nohim,A loner, student, computer science', autoText, 190, 6)

const mouseFollower = document.querySelector('.mouse-follower')
const rippleEffect = document.querySelector('.ripple-effect')
const text = document.querySelector('.text')
const c = text.getBoundingClientRect()

let scale = 1
let count = 0
setInterval(() => {
    count = 0
}, 600)


let left = false


document.addEventListener("mousemove", function (e) {
    const rainDrops = document.querySelectorAll('.rain-drop')

    count++

    const details = {
        x: e.clientX,
        y: e.clientY
    }

    console.log();

    const observePoint = window.innerWidth / 2
    if (details.x > observePoint) {
        left = false
    }
    else {
        left = true
    }

    const degree = getRandomInt(0, 20)
    if (left) {
        rainDrops.forEach(el => {
            el.style.transform = `rotate(${degree}deg)`
        })
    }
    else {
        rainDrops.forEach(el => {
            el.style.transform = `rotate(-${degree}deg)`
        })

    }



    console.log(left);
    mouseFollower.style.top = `${details.y}px`
    mouseFollower.style.left = `${details.x}px`

    // console.log(c, details.y, c.y);
    if (details.y === c.y) {
        console.log('wooo');
    }
    // speed

    scale += 0.02
    mouseFollower.style.transform = `scale(${scale})`
    // console.log(mouseFollower.style.transform = `scale(${scale})`);
    if (count <= 1) {
        const scaleToNormal = setTimeout(() => {
            console.log('h');
            scale = 1
            mouseFollower.style.transform = `scale(${scale})`
        }, 1000);
    }



})

document.addEventListener('click', () => {
    rippleEffect.style.transform = 'scale(1.6)'
})


const portfolio = document.querySelector('.pro-portfolio')

const rainDrop = document.querySelector('.rain-drop')

const degree = getRandomInt(0, 16);

for (let i = 0; i < getRandomInt(10, 16); i++) {

    portfolio.insertAdjacentHTML('afterbegin', `
                    <div class="rain-drop"
                    style="right:${getRandomInt(0, 100)}%;
                    top:${getRandomInt(0, 100)}%;
                    animation-delay:${getRandomInt(0, 1000)}ms;
                     transform:rotate(${degree}deg);
                   
                    
                    "></div>
        `)



}


Date.prototype.getCustom = function (type) {
    if (type === 'h') {
        return this.getHours() >= 10 ? this.getHours() : `0${this.getHours()}`
    }
    else if (type === 'm') {
        return this.getMinutes() >= 10 ? this.getMinutes() : `0${this.getMinutes()}`

    }
}

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')



setInterval(() => {
    const time = new Date()


    hours.textContent = time.getCustom('h')
    minutes.textContent = time.getCustom('m')

    console.log(time.__proto__);
}, 1000)

