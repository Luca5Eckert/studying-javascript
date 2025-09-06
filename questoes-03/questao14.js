function contarQuantidadeCaracter(frase, caracter){
    let qtd = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase.at(i) == caracter) qtd++;
    }
    return qtd;
}

let frase = "luucas";
let caracter = "u";

console.log(contarQuantidadeCaracter(frase, caracter));