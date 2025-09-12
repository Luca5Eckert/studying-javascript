const prompt = require(`prompt-sync`)();

const celsius = parseFloat(prompt("Celsius: "));

const fahrenheit = (1.8 * celsius) + 32;

console.log(`Fahrenheit: ${fahrenheit}`);