let usuario = {
    "nome": "Liandra Spezia",
    "endereco": {
        "rua": "Rua Horacio pradi",
        "numero": 280,
        "cidade": "Jaraguá do Sul"
    }
};

console.log(`O usuário mora em ${usuario.endereco.cidade}, na ${usuario.endereco.rua}`);

let aluno = {
    "nome": "Liandra Spezia",
    "matricula": {
        "numero": 78,
        "curso": "Enfermagem"
    }
};

aluno.matricula.numero = 4;

console.log(aluno);

let carrinhoCompras = [{"produto": {"nome": "azeite", "preco": 32}, "quantidade": 23}, {"produto": {"nome": "feijao", "preco": 343}, "quantidade": 43}];

console.log(`Nome do primeiro da lista: ${carrinhoCompras[0].produto.nome}`)
console.log(`Preço do segundo da lista: ${carrinhoCompras[1].produto.preco}`)

let loja = {
    nome: "Tech Store",
    categorias: {
        celulares: {
            produto1: { nome: "iPhone 14", preco: 7000 },
            produto2: { nome: "Samsung Galaxy S23", preco: 5000 }
        },
        notebooks: {
            produto1: { nome: "MacBook Air", preco: 9500 },
            produto2: { nome: "Dell XPS 13", preco: 8500 }
        }

    }
};

console.log(loja.categorias.notebooks.produto1.nome);