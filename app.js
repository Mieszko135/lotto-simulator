const randomNumber = () => {
    return Math.floor(Math.random()*49+1)
}

const choosenNumbers = [];
const winnerryNum = [];

const couponNumbers = document.querySelectorAll("td");
const lottoBalls = document.querySelectorAll(".ball");
const startBtn = document.querySelector(".start-lottery");
const checkBtn = document.querySelector(".check-numbers")
const winMsg = document.querySelector(".win-info__text")
const continueBtn = document.querySelector(".win-info__btn");
const blockWindow = document.querySelector(".block-under")

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
        })
    }
})

startBtn.addEventListener("click", () => {
    if (choosenNumbers.length !== 6) {
        alert("Nie wypełniono kuponu! Przed rozpoczęciem losowania wypełnij kupon.")
    } else {
        startBtn.disabled = true;
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
                startBtn.disabled = false;
            }
        }, 2000);
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
            howManyNumb += 0;
        }
    }
    if (lottoBalls[5].textContent !== "") {
        blockWindow.classList.remove("none")
    } else {
        alert("Losowanie się nie odbyło")
    }
    if (howManyNumb <= 2) {
        winMsg.textContent =`Ilość trafionych liczb: ${howManyNumb}. Niestety, tym razem nic nie wygrywasz.`;
    } else if (howManyNumb == 3) {
        winMsg.textContent ="Iloś trafionych liczb: 3. Wygrywasz 24zł.";
    } else if (howManyNumb == 4) {
        winMsg.textContent = "Iloś trafionych liczb: 4. Wygrywasz 250zł";
    } else if (howManyNumb == 5) {
        winMsg.textContent = "Iloś trafionych liczb: 5. Wygrywasz 5000zł";
    } else {
        winMsg.textContent = "Gratulacje, Iloś trafionych liczb: 6. Wygrywasz 10000000zł!!!";
    }
})

continueBtn.addEventListener("click", () => {
    howManyNumb = 0;
    winnerryNum.splice(0,6);
    choosenNumbers.splice(0,6);
    couponNumbers.forEach((number) => {
        number.style.backgroundColor = "white";
    });
    lottoBalls.forEach((ball) => {
        ball.textContent = "";
    });
    blockWindow.classList.add("none");
})
