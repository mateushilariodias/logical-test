let inputString = "Front-end"

function reverseString(inputString){
    let outputString = inputString.split('').reverse().join('') // O primeiro método separa cada caractere da string e os armazena em um array. O segundo método inverte a ordem dos elementos nesse array. O terceiro método junta os elementos do array novamente, formando uma nova string, que é a versão invertida da string original.
    return outputString
}

console.log(reverseString(inputString))