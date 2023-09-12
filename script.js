let toggleButton = document.querySelector('.toggle-button')
let indicator = document.querySelector('.indicator')
let cardApp = document.querySelectorAll('.card-app')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let statsCard = document.querySelectorAll('.statistics')
let theme

toggleButton.onclick = () => {
    indicator.classList.toggle('right-move')
    toggleButton.classList.toggle('button-light')
    cardApp.forEach((cardApp) => {
    cardApp.classList.toggle("card-app-light");
    })
    body.classList.toggle('white-bg')
    h1.classList.toggle('dark-text')
    statsCard.forEach((statsCard) => {
    statsCard.classList.toggle("statistics-light");
    })

    // if(body.classList.contains('white-bg')) {
    //     theme = 'LightMode'
    //     console.log ('LightMode')
    // }else {
    //     theme = 'DarkMode'
    //     console.log("DarkMode");
    // }
    // localStorage.setItem('PageTheme', JSON.stringify(theme))
}

// let getTheme = JSON.parse(localStorage.getItem('PageTheme'))
// console.log(getTheme)
// if(getTheme === 'Dark') {
    
// }

//counting animation
let ValDisplay = document.querySelectorAll('.number')
let yt = document.querySelector('.number-yt')
let face = document.querySelector('.number-face')
let likes = document.querySelector('.likes')
let interval = 1200;

ValDisplay.forEach((number) => {
    let startValue = 0;
    let endValue = parseInt(number.getAttribute('data-val'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1
        number.innerHTML = startValue
        if(startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})

function counter() {
    let startValue = 7400
    let endValue = parseInt(yt.getAttribute('data-val'))
    let duration = Math.floor(20 / endValue)
    let counter = setInterval(() => {
        startValue += 1;
        yt.innerHTML = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
}

counter()


function likescounter() {
    let startValue = 4600
    let endValue = parseInt(likes.getAttribute('data-val'))
    let duration = Math.floor(1000 / endValue)
    let counter = setInterval(() => {
        startValue += 1;
        likes.innerHTML = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
}

likescounter()

function facecounter() {
    let startValue = 1200
    let endValue = parseInt(face.getAttribute('data-val'))
    let duration = Math.floor(1000 / endValue)
    let counter = setInterval(() => {
        startValue += 1;
        face.innerHTML = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
}

facecounter()

// let valueDisplays = document.querySelectorAll(".number");
// let interval = 2000;

// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
    // let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });