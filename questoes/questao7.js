const prompt = require(`prompt-sync`)();

let palindrome = prompt("Digite a frase que você deseja verificar: ")

let reverse = "";

for(i = palindrome.length; i >= 0; i--){
    reverse += (palindrome.charAt(i));
}


if(reverse.toLowerCase().trim() === palindrome.toLowerCase().trim() ){
    console.log("É um palindromo");
} else {
    console.log("Não é um palindromo");
}