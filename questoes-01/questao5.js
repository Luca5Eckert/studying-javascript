const prompt = require(`prompt-sync`)();

let ano = parseInt(prompt("Digite um ano: "));

if( (ano % 100 == 0) && (ano % 400 == 0) || (ano % 4 == 0) && !(ano % 100 == 0) ){
    console.log("O ano é bissexto");
} else {
    console.log("O ano não é bissexto");
}