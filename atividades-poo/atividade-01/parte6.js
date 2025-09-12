let frutas = ["Maçã", "Banana"];
let maisFrutas = ["Laranja", "Uva"];

let todasAsFrutas = [...frutas, ...maisFrutas];

console.log(todasAsFrutas);

let configuracoes = {
    tema: "dark",
    idioma: "pt-br"
}

let novasConfiguracoes = {...configuracoes};

novasConfiguracoes.tema = "light";

console.log(configuracoes);
console.log(novasConfiguracoes);

let dadosPessoais = {
    nome: "Liandra",
    idade: 17
};

let dadosProfissionais = {
    cargo: "Senior",
    empresa: "Chop"
};

let funcionarioCompleto = {...dadosPessoais, ...dadosProfissionais};

console.log(funcionarioCompleto);

function mostrarNumeros(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

let numeros = [10, 20, 30];

mostrarNumeros(...numeros);