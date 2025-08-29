function adicionar(num1, num2){
    return num1 + num2;
}
console.log(adicionar(1,2));

function subtrair(num1, num2){
    return num1 - num2;
}
console.log(subtrair(1,2));

console.log(((num1, num2) => {
    return num1 * num2;
})(5,3));

function calcularMedia(array){
    let length = array.length;
    let sum = 0;

    for(let i = 0; i < length; i++){
        sum+=array[i];
    }

    return sum / length;
}

function ePar(numero) {
    return numero % 2 == 0;
}
console.log(ePar(2));

console.log(calcularMedia([1, 2, 3, 4, 5]));

let texto = ((text) => {
    return text.toUpperCase();
})("textoBaixo");

console.log(texto);

function filtrarNumeroMaiorQue(array, num){
    return array.filter(function(numero) {
        return numero > num;
    })
}

let array = [1, 2, 3, 3, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeroMaiorQue(array, num)); // [6, 7, 8, 9]


//QUESTÃO 8
function contarOcorrenciasDe(array, num){
    return array.filter(function(numero) {
        return numero == num;
    }).length;
}

console.log(contarOcorrenciasDe(array, 3));

//QUESTÃO 9
function contarVogais(texto) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let textoEmArray = texto.split('');

    return textoEmArray.filter(function(caracter){
        return vogais.some(function(letra){
            return letra == caracter;
        });
    }).length;
}

let texto12 = "Exemplo de uma string qualquer";
console.log(contarVogais(texto12)); // 10

//QUESTÃO 10
function criarArray(numero) {
    let array = [];

    for(let i = 1; i <= numero; i++){
        array.push(i);
    }

    return array;
}

let numero = 5;
console.log(criarArray(numero)); // [1, 2, 3, 4, 5]

//QUESTÃO 12
function numeroAleatorio(){
    return Math.random();
}

//QUESTÃO 13
function diasEntreDatas(data1, data2){
    const diffenceMili = data1 - data2;
    return diffenceMili / 1000 / 60 / 60 / 24;
}
let birthday = new Date(1995, 11, 17);
let dead = new Date(1995, 11, 12);
console.log(diasEntreDatas(birthday, dead));


//QUESTÃO 15
let frutas = ["maçã", "banana", "laranja"]
console.log(frutas[1]);
frutas.push("manga");
frutas.pop();
console.log(frutas.length);
frutas.forEach((fruta) => {
    console.log(fruta);
})

let novaArray = frutas.map((fruta) => {
    return fruta.length;
})
console.log(novaArray);

let novaArray2 = frutas.filter((fruta)=> {
    return fruta.length > 5;
})
console.log(novaArray2);


let soma = novaArray.reduce((total, numero) => {
    return total + numero;
}, (0));
console.log(soma);

