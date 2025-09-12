let livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

let arrayChaves = Object.keys(livro);
let arrayValores = Object.values(livro);
let arrayCompleta = [];

for(let chave in livro){
    let array = [chave, livro[chave]];
    arrayCompleta.push(array);
}

console.log(arrayChaves);
console.log(arrayValores);
console.log(arrayCompleta);


let configuracao = {
    status: "ativo"
};

Object.freeze(configuracao);

configuracao.status = "Inativo";

console.log(configuracao.status);