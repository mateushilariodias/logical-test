let positiveInteger = 10;

function returnEvenNumbers(positiveInteger) {
    let evenNumbers = [];
    if (positiveInteger < 0) {
        return "O número deve ser positivo";
    } else {
        for (let i = 2; i <= positiveInteger; i += 2) { // Inclui o número positivo inteiro no resultado se for par
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(returnEvenNumbers(positiveInteger));