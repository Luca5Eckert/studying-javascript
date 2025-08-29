const prompt = require(`prompt-sync`)();

let numberFatorial = parseFloat(prompt("Digite um número para ver sua fatorial: "))

for(i = numberFatorial-1; i > 0; i--){
    numberFatorial *= i;
}

console.log(`Fatorial: ${numberFatorial}`);