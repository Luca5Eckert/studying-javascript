const prompt = require('prompt-sync')();

var number = prompt("Digite um número: ");

if(number == 0 ){
    console.log(`O número é ${number} é 0`);
} else if(number > 0 ){
    console.log(`O número é ${number} é positivo`);
} else {
    console.log(`O número é ${number} é negativo`);
}