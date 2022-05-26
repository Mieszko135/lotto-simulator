const randomNumber = () => {
    return Math.floor(Math.random()*49+1)
}

const choosenNumbers = [];
const drawnNumbers = [];

const couponNumbers = document.querySelectorAll("td");

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