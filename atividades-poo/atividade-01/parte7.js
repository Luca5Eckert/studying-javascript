let veiculo = {
    rodas: 4
};

let carro = Object.create(veiculo);
carro.marca = "Ford";

console.log(carro.marca);
console.log(carro.rodas);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
    this.descrever = function() {
        console.log(`${nome} custa R$ ${preco}`);
    }
};

let livro = new Produto("Caminho dos reis", 123);
livro.descrever();

function Guerreiro(nome){
    this.nome = nome;
    this.atacar = () => {
        console.log(`Guerreiro ${nome} atacando!!!`);
    }
};

let guerreiro1 = new Guerreiro("Lucas Ismael Eckert");
let guerreiro2 = new Guerreiro("Liandra Spezia");

guerreiro1.atacar();
guerreiro2.atacar();

