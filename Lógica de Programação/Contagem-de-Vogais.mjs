let inputString = "programming";

function vowelCount(inputString){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of inputString) {
        if (vowels.includes(char)) { //Se o caractere for igual a uma vogal, incrementa o contador;
            count++;
        }
    }
    return count;
}

console.log(vowelCount(inputString));