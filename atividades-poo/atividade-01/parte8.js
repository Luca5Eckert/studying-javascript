let pessoa = {
    nome: "Liandra Spezia",
    anoNascimento: 2007,
    calcularIdade: function() {
        return 2025 - this.anoNascimento;
    },
    apresentar: function() {
        let idade = this.calcularIdade();
        return `Olá, meu nome é ${this.nome} e eu tenho ${idade} anos`
    }
};

console.log(pessoa.apresentar());

let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2022
};

for(let chave in carro){
    console.log(`${chave} : ${carro[chave]}`);
}

