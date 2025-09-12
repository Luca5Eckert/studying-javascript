
function reverseArray(array){
    let left = 0;
    let right = array.length - 1;

    while((right-left) > 0){
        let temp = array[left];

        array[left] = array[right];
        array[right] = temp;

        left++;
        right--;
    }

}

const prompt = require('prompt-sync')();

let array = [];
for(let i = 0; i < 3; i++){
    let number = parseInt(prompt("Digite um número: "))
    array.push(number);
}

console.log( `Antes: ${array}`);

reverseArray(array);

console.log( `Depois: ${array}`);




