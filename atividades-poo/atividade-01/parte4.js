let lanche = {
    "nome": "X-Bacon",
    "preco": 40,
    "ingredientes": ["Pão", "Hamburger", "queijo", "alface"]
};

console.log(`O lanche ${lanche.nome} custa R$ ${lanche.preco}`);

lanche.preco = 17;

lanche["vegano"] = false;

console.log(lanche)