const randomNumber = () => {
    return Math.floor(Math.random()*49+1)
}

const choosenNumbers = [];
const winnerryNum = [];

const couponNumbers = document.querySelectorAll("td");
const lottoBalls = document.querySelectorAll(".ball");
const startBtn = document.querySelector(".start-lottery");
const checkBtn = document.querySelector(".check-numbers")

howManyNumb = 0;

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

startBtn.addEventListener("click", () => {
    if (choosenNumbers.length !== 6) {
        alert("Nie wypełniono kuponu! Przed rozpoczęciem losowania wypełnij kupon.")
    } else {
        let counter = 0;
        const drawnNumbers = [];
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
                clearInterval(lottoInterval);
            }
        }, 100);
    }
})

checkBtn.addEventListener("click", () => {
    if (winnerryNum.length < 6) {
        for (let i = 0; i < 6; i++) {
            winnerryNum.push(parseInt(lottoBalls[i].textContent));
        }
    }
    for (let i = 0; i < 6; i++) {
        if (choosenNumbers.includes(winnerryNum[i]) == true) {
            howManyNumb++;
        } else {
            howManyNumb += 0
        }
    }
    if (howManyNumb <= 2) {
        alert(`Niestety, tym razem nic nie wygrałeś. Ilość trafionych liczb to: ${howManyNumb}`)
    } else if (howManyNumb == 3) {
        alert("Trafiłeś 3 liczby, wygrywasz 24zł.")
    } else if (howManyNumb == 4) {
        alert("Trafiłeś 4 liczby, wygrywasz 250zł")
    } else if (howManyNumb == 5) {
        alert("Trafiłeś 5 liczb, wygrywasz 5000zł")
    } else {
        alert("Gratulacje, trafiłeś 6 liczb, wygrywasz 10000000zł!!!")
    }

    howManyNumb = 0;
    // choosenNumbers.splice(0,6);
    // couponNumbers.forEach((number) => {
    //     number.style.backgroundColor = "white";
    // });
})

// setTimeout(() => {
//     for (let i = 0; i < 6; i++) {
//         winnerryNum.push(parseInt(lottoBalls[i].textContent));
//         if (choosenNumbers.includes(winnerryNum[i]) == true) {
//             howManyNumb++
//         }
//     }
//     console.log(howManyNumb);
// }, 5000);

// for (let i = 0; i < 6; i++) {
//     let lotteryNumber = randomNumber();
//     if (!drawnNumbers.includes(lotteryNumber)) {
//         drawnNumbers.push(lotteryNumber)
//     } else {
//         i -= 1;
//     }
// }

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