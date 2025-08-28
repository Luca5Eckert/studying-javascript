const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite nota 1: "));
let nota2 = parseFloat(prompt("Digite nota 2: "));
let nota3 = parseFloat(prompt("Digite nota 3: "));

let media = (nota1 + nota2 + nota3) / 3;


if(media >= 8 ){
    console.log(`Media é ${media}, passou`);
} else if(media >= 6 ){
    console.log(`Media é ${media} em exame`);
} else {
    console.log(`Media é ${media} reprovado`);
}