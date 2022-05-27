const randomNumber = () => {
    return Math.floor(Math.random()*49+1)
}

const choosenNumbers = [];
const drawnNumbers = [];

const couponNumbers = document.querySelectorAll("td");
const lottoBalls = document.querySelectorAll(".ball");

couponNumbers.forEach((number) => {
    const markedNumber = parseInt(number.textContent);
    if (number.textContent !== "") {
        number.addEventListener("click", () => {
            if (choosenNumbers.length < 6) {
                number.style.backgroundColor = "#ffd1d9";
                if (!choosenNumbers.includes(markedNumber)) {
                    choosenNumbers.push(markedNumber)
                } else {
                    choosenNumbers.splice(choosenNumbers.indexOf(markedNumber), 1);
                    number.style.backgroundColor = "white";
                }
            } else if (choosenNumbers.length = 6){
                if (choosenNumbers.includes(markedNumber)) {
                    choosenNumbers.splice(choosenNumbers.indexOf(markedNumber), 1);
                    number.style.backgroundColor = "white";
                } else {
                    alert("Skreślono maksymalną ilość liczb")
                }
            } 
            return console.log(choosenNumbers)
        })
    }
})

// for (let i = 0; i < 6; i++) {
//     let lotteryNumber = randomNumber();
//     if (!drawnNumbers.includes(lotteryNumber)) {
//         drawnNumbers.push(lotteryNumber)
//     } else {
//         i -= 1;
//     }
// }

let counter = 0;
const lottoInterval = setInterval(() => {
    let lotteryNumber = randomNumber();
    if (!drawnNumbers.includes(lotteryNumber)) {
         drawnNumbers.push(lotteryNumber)
    } else {
        counter -= 1;
    }
    lottoBalls.forEach((ball, index) => {
        ball.textContent = drawnNumbers[index];
    });
    counter++;
    if (counter === 6) {
        clearInterval(lottoInterval)
    }
}, 2000);

// lottoBalls.forEach((ball, index) => {
//     ball.textContent = drawnNumbers[index];
// })



// setTimeout(() => {
//     clearInterval(lottoInterval)
// }, 18000);


// couponNumbers.forEach((number) => {
//     const markedNumber = parseInt(number.textContent);
//     if (number.textContent !== "") {
//         number.addEventListener("click", () => {
//             if (choosenNumbers.length < 6) {
//                 number.style.backgroundColor = "#ffd1d9";
//                 if (!choosenNumbers.includes(markedNumber)) {
//                     choosenNumbers.push(markedNumber)
//                 } else {
//                     choosenNumbers.splice(choosenNumbers.indexOf(markedNumber), 1);
//                     number.style.backgroundColor = "white";
//                 }
//             } else {alert("Skreślono maksymalną ilość liczb")}
//             return console.log(choosenNumbers)
//         })
//     }
// })