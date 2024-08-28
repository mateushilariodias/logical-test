let inputString = "ovo"

function isAPlindrome(inputString) {
    let outputString = inputString.split('').reverse().join('');
    if (outputString === inputString) return "É palindromo";
    else return "Não é palindromo"
}

console.log(isAPlindrome(inputString));